"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  supabase,
  getAdmissions,
  updateAdmissionStatus,
  deleteAdmission,
  getAllAnnouncements,
  createAnnouncement,
  deleteAnnouncement,
  toggleAnnouncementActive,
  AdmissionRecord,
  AnnouncementRecord,
  SUPABASE_SQL_SCHEMA,
} from "@/lib/supabase";
import {
  ShieldCheck,
  LogOut,
  Users,
  Bell,
  Database,
  Search,
  Trash2,
  Phone,
  Mail,
  Plus,
  RefreshCw,
  Copy,
  Check,
  ExternalLink,
  Calendar,
  AlertCircle,
  FileText,
} from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();

  // Auth State
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [adminUser, setAdminUser] = useState<string | null>(null);

  // Tab Navigation: 'admissions' | 'announcements' | 'database'
  const [activeTab, setActiveTab] = useState<"admissions" | "announcements" | "database">("admissions");

  // Admissions State
  const [admissions, setAdmissions] = useState<AdmissionRecord[]>([]);
  const [loadingAdmissions, setLoadingAdmissions] = useState(false);
  const [admissionsSearch, setAdmissionsSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedAdmission, setSelectedAdmission] = useState<AdmissionRecord | null>(null);

  // Announcements State
  const [announcements, setAnnouncements] = useState<AnnouncementRecord[]>([]);
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(false);
  const [showAddAnnouncement, setShowAddAnnouncement] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTag, setNewTag] = useState("Admissions");
  const [newDesc, setNewDesc] = useState("");
  const [newHref, setNewHref] = useState("/admissions");
  const [savingAnnouncement, setSavingAnnouncement] = useState(false);

  // SQL Copy State
  const [copiedSql, setCopiedSql] = useState(false);

  // General Notification
  const [notification, setNotification] = useState<{
    type: "success" | "error" | "info";
    text: string;
  } | null>(null);

  // Check auth session
  useEffect(() => {
    async function checkAuth() {
      try {
        const { data } = await supabase.auth.getSession();
        if (!data.session) {
          router.replace("/admin/login");
          return;
        }
        setAdminUser(data.session.user.email || "Admin");
        setCheckingAuth(false);
      } catch {
        router.replace("/admin/login");
      }
    }

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace("/admin/login");
      } else {
        setAdminUser(session.user.email || "Admin");
        setCheckingAuth(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  // Load Data
  const loadAdmissionsData = async () => {
    setLoadingAdmissions(true);
    const res = await getAdmissions();
    if (res.success) {
      setAdmissions(res.data);
    } else {
      setNotification({
        type: "info",
        text: `Admissions note: ${res.error}. If tables are not created yet, please check the 'Database Setup' tab.`,
      });
    }
    setLoadingAdmissions(false);
  };

  const loadAnnouncementsData = async () => {
    setLoadingAnnouncements(true);
    const res = await getAllAnnouncements();
    if (res.success) {
      setAnnouncements(res.data);
    }
    setLoadingAnnouncements(false);
  };

  useEffect(() => {
    let isMounted = true;

    async function initialFetch() {
      if (checkingAuth) return;

      const [admRes, annRes] = await Promise.all([
        getAdmissions(),
        getAllAnnouncements(),
      ]);

      if (!isMounted) return;

      if (admRes.success) {
        setAdmissions(admRes.data);
      }
      if (annRes.success) {
        setAnnouncements(annRes.data);
      }
    }

    initialFetch();

    return () => {
      isMounted = false;
    };
  }, [checkingAuth]);

  // Handle Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  // Admission actions
  const handleStatusChange = async (id: string, status: string) => {
    const res = await updateAdmissionStatus(id, status);
    if (res.success) {
      setAdmissions((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: status as AdmissionRecord["status"] } : item
        )
      );
      if (selectedAdmission?.id === id) {
        setSelectedAdmission((prev) =>
          prev ? { ...prev, status: status as AdmissionRecord["status"] } : null
        );
      }
      setNotification({ type: "success", text: `Status updated to ${status}` });
    } else {
      setNotification({ type: "error", text: "Failed to update status: " + res.error });
    }
  };

  const handleDeleteAdmission = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry record?")) return;
    const res = await deleteAdmission(id);
    if (res.success) {
      setAdmissions((prev) => prev.filter((item) => item.id !== id));
      if (selectedAdmission?.id === id) setSelectedAdmission(null);
      setNotification({ type: "success", text: "Enquiry record deleted." });
    } else {
      setNotification({ type: "error", text: "Failed to delete: " + res.error });
    }
  };

  // Announcement actions
  const handleAddAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setSavingAnnouncement(true);
    const res = await createAnnouncement({
      title: newTitle.trim(),
      date: newDate.trim() || new Date().toLocaleDateString("en-IN", { month: "short", year: "numeric" }),
      tag: newTag,
      description: newDesc.trim(),
      href: newHref.trim() || "/admissions",
      is_active: true,
    });

    if (res.success) {
      setNewTitle("");
      setNewDate("");
      setNewDesc("");
      setShowAddAnnouncement(false);
      loadAnnouncementsData();
      setNotification({ type: "success", text: "Announcement created successfully!" });
    } else {
      setNotification({ type: "error", text: "Failed to create announcement: " + res.error });
    }
    setSavingAnnouncement(false);
  };

  const handleToggleAnnouncement = async (id: string, currentStatus: boolean) => {
    const res = await toggleAnnouncementActive(id, !currentStatus);
    if (res.success) {
      setAnnouncements((prev) =>
        prev.map((item) => (item.id === id ? { ...item, is_active: !currentStatus } : item))
      );
    }
  };

  const handleDeleteAnnouncement = async (id: string) => {
    if (!confirm("Are you sure you want to delete this announcement?")) return;
    const res = await deleteAnnouncement(id);
    if (res.success) {
      setAnnouncements((prev) => prev.filter((item) => item.id !== id));
      setNotification({ type: "success", text: "Announcement deleted." });
    }
  };

  // Copy SQL schema
  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SQL_SCHEMA);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2500);
  };

  // Filtered Admissions
  const filteredAdmissions = useMemo(() => {
    return admissions.filter((item) => {
      const matchSearch =
        item.student_name.toLowerCase().includes(admissionsSearch.toLowerCase()) ||
        item.mobile.includes(admissionsSearch) ||
        item.father_name.toLowerCase().includes(admissionsSearch.toLowerCase()) ||
        item.class_applying.toLowerCase().includes(admissionsSearch.toLowerCase());

      const matchStatus =
        statusFilter === "ALL" || (item.status || "Pending").toUpperCase() === statusFilter.toUpperCase();

      return matchSearch && matchStatus;
    });
  }, [admissions, admissionsSearch, statusFilter]);

  // Statistics
  const stats = useMemo(() => {
    const total = admissions.length;
    const pending = admissions.filter((a) => (a.status || "Pending") === "Pending").length;
    const contacted = admissions.filter((a) => a.status === "Contacted").length;
    const admitted = admissions.filter((a) => a.status === "Admitted").length;
    return { total, pending, contacted, admitted };
  }, [admissions]);

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent"></div>
          <p className="text-sm font-semibold tracking-wider text-gray-400">
            Verifying Admin Credentials...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-slate-950 shadow-md">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-white">St. An&apos;s School</h1>
                <span className="rounded-full bg-yellow-400/20 px-2 py-0.5 text-xs font-semibold text-yellow-400 border border-yellow-400/30">
                  Admin Portal
                </span>
              </div>
              <p className="text-xs text-slate-400">Logged in as {adminUser}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-slate-700 hover:text-white"
            >
              <ExternalLink size={14} />
              View Website
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-lg bg-red-600/20 border border-red-500/30 px-3 py-1.5 text-xs font-semibold text-red-400 transition hover:bg-red-600 hover:text-white"
            >
              <LogOut size={14} />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Toast Notification */}
        {notification && (
          <div
            className={`mb-6 flex items-center justify-between rounded-xl border p-4 text-sm font-medium ${
              notification.type === "success"
                ? "border-green-500/30 bg-green-950/60 text-green-300"
                : notification.type === "error"
                ? "border-red-500/30 bg-red-950/60 text-red-300"
                : "border-yellow-500/30 bg-yellow-950/60 text-yellow-300"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <AlertCircle size={18} />
              <span>{notification.text}</span>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-xs opacity-70 hover:opacity-100"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab("admissions")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
              activeTab === "admissions"
                ? "bg-yellow-400 text-slate-950 shadow-lg"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <Users size={18} />
            Admission Enquiries ({admissions.length})
          </button>

          <button
            onClick={() => setActiveTab("announcements")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
              activeTab === "announcements"
                ? "bg-yellow-400 text-slate-950 shadow-lg"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <Bell size={18} />
            Announcements & News ({announcements.length})
          </button>

          <button
            onClick={() => setActiveTab("database")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
              activeTab === "database"
                ? "bg-yellow-400 text-slate-950 shadow-lg"
                : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <Database size={18} />
            Database Setup & SQL
          </button>
        </div>

        {/* TAB 1: ADMISSIONS */}
        {activeTab === "admissions" && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-xs font-medium text-slate-400">Total Enquiries</p>
                <p className="mt-1 text-2xl font-black text-white">{stats.total}</p>
              </div>
              <div className="rounded-2xl border border-yellow-500/20 bg-yellow-950/20 p-4">
                <p className="text-xs font-medium text-yellow-400">Pending Review</p>
                <p className="mt-1 text-2xl font-black text-yellow-400">{stats.pending}</p>
              </div>
              <div className="rounded-2xl border border-blue-500/20 bg-blue-950/20 p-4">
                <p className="text-xs font-medium text-blue-400">Contacted</p>
                <p className="mt-1 text-2xl font-black text-blue-400">{stats.contacted}</p>
              </div>
              <div className="rounded-2xl border border-green-500/20 bg-green-950/20 p-4">
                <p className="text-xs font-medium text-green-400">Admitted</p>
                <p className="mt-1 text-2xl font-black text-green-400">{stats.admitted}</p>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search by student, parent, phone, or class..."
                  value={admissionsSearch}
                  onChange={(e) => setAdmissionsSearch(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 py-2 pl-10 pr-4 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-yellow-400"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none focus:border-yellow-400"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="PENDING">Pending</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="ADMITTED">Admitted</option>
                  <option value="REJECTED">Rejected</option>
                </select>

                <button
                  onClick={loadAdmissionsData}
                  disabled={loadingAdmissions}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-700 disabled:opacity-50"
                  title="Refresh admissions list"
                >
                  <RefreshCw size={16} className={loadingAdmissions ? "animate-spin" : ""} />
                  <span className="hidden sm:inline">Refresh</span>
                </button>
              </div>
            </div>

            {/* Admissions Table & Detail View */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden lg:col-span-2">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-300">
                    <thead className="border-b border-slate-800 bg-slate-950/60 text-xs uppercase text-slate-400 font-bold">
                      <tr>
                        <th className="px-4 py-3.5">Student</th>
                        <th className="px-4 py-3.5">Class</th>
                        <th className="px-4 py-3.5">Contact</th>
                        <th className="px-4 py-3.5">Status</th>
                        <th className="px-4 py-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {filteredAdmissions.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                            {loadingAdmissions
                              ? "Loading admissions from Supabase..."
                              : "No admission enquiries found."}
                          </td>
                        </tr>
                      ) : (
                        filteredAdmissions.map((adm) => (
                          <tr
                            key={adm.id}
                            onClick={() => setSelectedAdmission(adm)}
                            className={`cursor-pointer transition hover:bg-slate-800/50 ${
                              selectedAdmission?.id === adm.id ? "bg-slate-800/80" : ""
                            }`}
                          >
                            <td className="px-4 py-3.5 font-bold text-white">
                              <div>{adm.student_name}</div>
                              <div className="text-xs text-slate-400 font-normal">
                                Parent: {adm.father_name}
                              </div>
                            </td>
                            <td className="px-4 py-3.5">
                              <span className="rounded-md bg-slate-800 px-2 py-1 text-xs font-semibold text-yellow-400 border border-slate-700">
                                {adm.class_applying}
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-xs text-slate-300">
                              <a
                                href={`tel:${adm.mobile}`}
                                onClick={(e) => e.stopPropagation()}
                                className="font-semibold text-yellow-400 hover:underline block"
                              >
                                {adm.mobile}
                              </a>
                              <span className="text-slate-400">{adm.email}</span>
                            </td>
                            <td className="px-4 py-3.5">
                              <span
                                className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                                  (adm.status || "Pending") === "Pending"
                                    ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20"
                                    : adm.status === "Contacted"
                                    ? "bg-blue-400/10 text-blue-400 border border-blue-400/20"
                                    : adm.status === "Admitted"
                                    ? "bg-green-400/10 text-green-400 border border-green-400/20"
                                    : "bg-red-400/10 text-red-400 border border-red-400/20"
                                }`}
                              >
                                {adm.status || "Pending"}
                              </span>
                            </td>
                            <td className="px-4 py-3.5 text-right">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (adm.id) handleDeleteAdmission(adm.id);
                                }}
                                className="rounded-lg p-1.5 text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition"
                                title="Delete enquiry"
                              >
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detail Sidebar */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                {selectedAdmission ? (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {selectedAdmission.student_name}
                        </h3>
                        <p className="text-xs text-yellow-400">
                          Class: {selectedAdmission.class_applying}
                        </p>
                      </div>
                      <span className="text-xs text-slate-400">
                        {selectedAdmission.created_at
                          ? new Date(selectedAdmission.created_at).toLocaleDateString()
                          : "Recent"}
                      </span>
                    </div>

                    {/* Status Changer */}
                    <div>
                      <label className="mb-1.5 block text-xs font-semibold text-slate-400">
                        Application Status
                      </label>
                      <select
                        value={selectedAdmission.status || "Pending"}
                        onChange={(e) => {
                          if (selectedAdmission.id) {
                            handleStatusChange(selectedAdmission.id, e.target.value);
                          }
                        }}
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-semibold text-slate-100 outline-none focus:border-yellow-400"
                      >
                        <option value="Pending">⏳ Pending</option>
                        <option value="Contacted">📞 Contacted</option>
                        <option value="Admitted">✅ Admitted</option>
                        <option value="Rejected">❌ Rejected</option>
                      </select>
                    </div>

                    {/* Student & Parent Info */}
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-xs text-slate-400 block">Date of Birth</span>
                        <span className="font-semibold text-slate-200">
                          {selectedAdmission.dob || "Not specified"} ({selectedAdmission.gender})
                        </span>
                      </div>

                      <div>
                        <span className="text-xs text-slate-400 block">Father&apos;s Name</span>
                        <span className="font-semibold text-slate-200">
                          {selectedAdmission.father_name}
                        </span>
                      </div>

                      {selectedAdmission.mother_name && (
                        <div>
                          <span className="text-xs text-slate-400 block">Mother&apos;s Name</span>
                          <span className="font-semibold text-slate-200">
                            {selectedAdmission.mother_name}
                          </span>
                        </div>
                      )}

                      {/* Direct Actions */}
                      <div className="flex gap-2 pt-2">
                        <a
                          href={`tel:${selectedAdmission.mobile}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-yellow-400 px-3 py-2 text-xs font-bold text-slate-950 shadow transition hover:bg-yellow-500"
                        >
                          <Phone size={14} /> Call ({selectedAdmission.mobile})
                        </a>
                        <a
                          href={`mailto:${selectedAdmission.email}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-bold text-slate-200 transition hover:bg-slate-700"
                        >
                          <Mail size={14} /> Email
                        </a>
                      </div>

                      {selectedAdmission.address && (
                        <div className="pt-2">
                          <span className="text-xs text-slate-400 block">Address</span>
                          <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-2.5 rounded-xl border border-slate-800 mt-1">
                            {selectedAdmission.address}
                          </p>
                        </div>
                      )}

                      {selectedAdmission.query && (
                        <div className="pt-1">
                          <span className="text-xs text-slate-400 block">Parent Query</span>
                          <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-2.5 rounded-xl border border-slate-800 mt-1 italic">
                            &quot;{selectedAdmission.query}&quot;
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="py-16 text-center text-slate-500">
                    <FileText size={36} className="mx-auto mb-3 opacity-40" />
                    <p className="text-sm font-semibold">Select an enquiry to view full details</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ANNOUNCEMENTS & NEWS */}
        {activeTab === "announcements" && (
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Live Announcements & News</h2>
                <p className="text-xs text-slate-400">
                  Manage notifications displayed on the homepage popup and bulletins.
                </p>
              </div>

              <button
                onClick={() => setShowAddAnnouncement(!showAddAnnouncement)}
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-yellow-500"
              >
                <Plus size={18} />
                {showAddAnnouncement ? "Close Form" : "New Announcement"}
              </button>
            </div>

            {/* Add Announcement Modal/Form */}
            {showAddAnnouncement && (
              <form
                onSubmit={handleAddAnnouncement}
                className="rounded-2xl border border-yellow-400/30 bg-slate-900 p-6 space-y-4 shadow-xl"
              >
                <h3 className="text-base font-bold text-white">Publish New Announcement</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-300">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Science Exhibition 2026"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-sm text-white outline-none focus:border-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-300">
                      Tag / Category
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Admissions, Event, Notice, Holiday"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-sm text-white outline-none focus:border-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-300">
                      Display Date
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. July 2026 or Important Notice"
                      value={newDate}
                      onChange={(e) => setNewDate(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-sm text-white outline-none focus:border-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-slate-300">
                      Link / URL
                    </label>
                    <input
                      type="text"
                      placeholder="/admissions, /contact, or https://..."
                      value={newHref}
                      onChange={(e) => setNewHref(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-sm text-white outline-none focus:border-yellow-400"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-semibold text-slate-300">
                      Description / Content
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Brief details about the announcement..."
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 p-2.5 text-sm text-white outline-none focus:border-yellow-400 resize-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddAnnouncement(false)}
                    className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={savingAnnouncement}
                    className="rounded-xl bg-yellow-400 px-5 py-2 text-sm font-bold text-slate-950 shadow hover:bg-yellow-500 disabled:opacity-50"
                  >
                    {savingAnnouncement ? "Publishing..." : "Publish Announcement"}
                  </button>
                </div>
              </form>
            )}

            {/* Announcements List */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {announcements.length === 0 ? (
                <div className="col-span-full rounded-2xl border border-slate-800 bg-slate-900 py-12 text-center text-slate-500">
                  {loadingAnnouncements ? "Loading announcements..." : "No announcements published yet."}
                </div>
              ) : (
                announcements.map((item) => (
                  <div
                    key={item.id}
                    className={`flex flex-col justify-between rounded-2xl border p-5 transition ${
                      item.is_active
                        ? "border-slate-800 bg-slate-900 shadow-md"
                        : "border-slate-800/40 bg-slate-950/60 opacity-60"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-yellow-400/20 px-2.5 py-0.5 text-xs font-bold text-yellow-400 border border-yellow-400/30">
                          {item.tag || "General"}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              if (item.id) handleToggleAnnouncement(item.id, !!item.is_active);
                            }}
                            className={`text-xs px-2 py-0.5 rounded-full font-semibold border ${
                              item.is_active
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : "bg-slate-800 text-slate-400 border-slate-700"
                            }`}
                          >
                            {item.is_active ? "Active" : "Hidden"}
                          </button>
                          <button
                            onClick={() => {
                              if (item.id) handleDeleteAnnouncement(item.id);
                            }}
                            className="text-slate-500 hover:text-red-400"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      <h3 className="mt-3 text-base font-bold text-white">{item.title}</h3>
                      <p className="mt-1 text-xs text-slate-400 flex items-center gap-1">
                        <Calendar size={13} /> {item.date}
                      </p>

                      {item.description && (
                        <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                      <span>Target: {item.href || "/admissions"}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 3: DATABASE SETUP & SQL HELPER */}
        {activeTab === "database" && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Supabase SQL Schema & Setup</h2>
                  <p className="mt-1 text-xs text-slate-400">
                    To enable database persistence, run this SQL script in your Supabase SQL Editor.
                  </p>
                </div>

                <button
                  onClick={handleCopySql}
                  className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-bold text-slate-950 shadow transition hover:bg-yellow-500"
                >
                  {copiedSql ? <Check size={18} /> : <Copy size={18} />}
                  {copiedSql ? "Copied SQL to Clipboard!" : "Copy SQL Script"}
                </button>
              </div>

              {/* Instructions Steps */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400 text-xs font-black text-slate-950 mb-2">
                    1
                  </span>
                  <h4 className="text-sm font-bold text-white">Open Supabase Dashboard</h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Go to your Supabase project (e.g. <code>myjcflntkayqzvfrvvta</code>) &amp; click <strong>SQL Editor</strong>.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400 text-xs font-black text-slate-950 mb-2">
                    2
                  </span>
                  <h4 className="text-sm font-bold text-white">Paste and Click Run</h4>
                  <p className="mt-1 text-xs text-slate-400">
                    Paste the SQL script below into a new query and click the <strong>Run</strong> button.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-400 text-xs font-black text-slate-950 mb-2">
                    3
                  </span>
                  <h4 className="text-sm font-bold text-white">All Set!</h4>
                  <p className="mt-1 text-xs text-slate-400">
                    All website submissions and announcements will immediately sync in real-time.
                  </p>
                </div>
              </div>

              {/* SQL Code Preview */}
              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>supabase_schema.sql</span>
                  <span>PostgreSQL / Supabase</span>
                </div>
                <pre className="max-h-96 overflow-y-auto text-xs text-yellow-300 font-mono leading-relaxed select-all">
                  {SUPABASE_SQL_SCHEMA}
                </pre>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
