import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://myjcflntkayqzvfrvvta.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface AdmissionRecord {
  id?: string;
  student_name: string;
  dob: string;
  gender: string;
  class_applying: string;
  father_name: string;
  mother_name?: string;
  mobile: string;
  email: string;
  address?: string;
  query?: string;
  status?: "Pending" | "Contacted" | "Admitted" | "Rejected";
  created_at?: string;
}

export interface AnnouncementRecord {
  id?: string;
  title: string;
  date: string;
  description?: string;
  tag?: string;
  href?: string;
  is_active?: boolean;
  priority?: number;
  created_at?: string;
}

/**
 * Save an admission enquiry to Supabase
 */
export async function saveAdmissionEnquiry(
  record: Omit<AdmissionRecord, "id" | "created_at" | "status"> & { status?: string }
) {
  try {
    const { data, error } = await supabase.from("admissions").insert([
      {
        ...record,
        status: record.status || "Pending",
      },
    ]).select();

    if (error) {
      console.warn("Supabase insert admission warning:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("Supabase insert admission error:", msg);
    return { success: false, error: msg };
  }
}

/**
 * Fetch all admission enquiries (Admin)
 */
export async function getAdmissions() {
  try {
    const { data, error } = await supabase
      .from("admissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.warn("Supabase get admissions warning:", error.message);
      return { success: false, data: [] as AdmissionRecord[], error: error.message };
    }

    return { success: true, data: (data as AdmissionRecord[]) || [] };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, data: [] as AdmissionRecord[], error: msg };
  }
}

/**
 * Update admission enquiry status (Admin)
 */
export async function updateAdmissionStatus(id: string, status: string) {
  try {
    const { data, error } = await supabase
      .from("admissions")
      .update({ status })
      .eq("id", id)
      .select();

    if (error) return { success: false, error: error.message };
    return { success: true, data };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: msg };
  }
}

/**
 * Delete an admission enquiry (Admin)
 */
export async function deleteAdmission(id: string) {
  try {
    const { error } = await supabase.from("admissions").delete().eq("id", id);
    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: msg };
  }
}

/**
 * Fetch active announcements for homepage & popups
 */
export async function getAnnouncements() {
  try {
    const { data, error } = await supabase
      .from("announcements")
      .select("*")
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (error) {
      return { success: false, data: [] as AnnouncementRecord[], error: error.message };
    }

    return { success: true, data: (data as AnnouncementRecord[]) || [] };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, data: [] as AnnouncementRecord[], error: msg };
  }
}

/**
 * Fetch all announcements including inactive ones (Admin)
 */
export async function getAllAnnouncements() {
  try {
    const { data, error } = await supabase
      .from("announcements")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return { success: false, data: [] as AnnouncementRecord[], error: error.message };
    }

    return { success: true, data: (data as AnnouncementRecord[]) || [] };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, data: [] as AnnouncementRecord[], error: msg };
  }
}

/**
 * Create a new announcement (Admin)
 */
export async function createAnnouncement(
  record: Omit<AnnouncementRecord, "id" | "created_at">
) {
  try {
    const { data, error } = await supabase.from("announcements").insert([record]).select();
    if (error) return { success: false, error: error.message };
    return { success: true, data };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: msg };
  }
}

/**
 * Delete an announcement (Admin)
 */
export async function deleteAnnouncement(id: string) {
  try {
    const { error } = await supabase.from("announcements").delete().eq("id", id);
    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: msg };
  }
}

/**
 * Toggle announcement active status (Admin)
 */
export async function toggleAnnouncementActive(id: string, is_active: boolean) {
  try {
    const { data, error } = await supabase
      .from("announcements")
      .update({ is_active })
      .eq("id", id)
      .select();

    if (error) return { success: false, error: error.message };
    return { success: true, data };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return { success: false, error: msg };
  }
}

export const SUPABASE_SQL_SCHEMA = `-- 1. Create Admissions Table
CREATE TABLE IF NOT EXISTS public.admissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name TEXT NOT NULL,
  dob DATE NOT NULL,
  gender TEXT NOT NULL,
  class_applying TEXT NOT NULL,
  father_name TEXT NOT NULL,
  mother_name TEXT,
  mobile TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT,
  query TEXT,
  status TEXT DEFAULT 'Pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;

-- Allow public to submit admission forms
DROP POLICY IF EXISTS "Allow public insert on admissions" ON public.admissions;
CREATE POLICY "Allow public insert on admissions" ON public.admissions
  FOR INSERT WITH CHECK (true);

-- Allow authenticated admins to view/manage admissions
DROP POLICY IF EXISTS "Allow authenticated users to read admissions" ON public.admissions;
CREATE POLICY "Allow authenticated users to read admissions" ON public.admissions
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "Allow authenticated users to update admissions" ON public.admissions;
CREATE POLICY "Allow authenticated users to update admissions" ON public.admissions
  FOR UPDATE TO authenticated USING (true);

DROP POLICY IF EXISTS "Allow authenticated users to delete admissions" ON public.admissions;
CREATE POLICY "Allow authenticated users to delete admissions" ON public.admissions
  FOR DELETE TO authenticated USING (true);

-- 2. Create Announcements Table
CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  date TEXT NOT NULL,
  tag TEXT DEFAULT 'General',
  href TEXT DEFAULT '/admissions',
  is_active BOOLEAN DEFAULT true,
  priority INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;

-- Allow public to read announcements
DROP POLICY IF EXISTS "Allow public select on announcements" ON public.announcements;
CREATE POLICY "Allow public select on announcements" ON public.announcements
  FOR SELECT USING (true);

-- Allow authenticated admins to manage announcements
DROP POLICY IF EXISTS "Allow authenticated insert on announcements" ON public.announcements;
CREATE POLICY "Allow authenticated insert on announcements" ON public.announcements
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Allow authenticated update on announcements" ON public.announcements;
CREATE POLICY "Allow authenticated update on announcements" ON public.announcements
  FOR UPDATE TO authenticated USING (true);

DROP POLICY IF EXISTS "Allow authenticated delete on announcements" ON public.announcements;
CREATE POLICY "Allow authenticated delete on announcements" ON public.announcements
  FOR DELETE TO authenticated USING (true);

-- 3. Insert initial announcements sample
INSERT INTO public.announcements (title, description, date, tag, href) VALUES
  ('Admissions Open for Session 2026', 'Admissions are open from Nursery to Class X. Apply online or visit our campus.', 'June 2026', 'Admissions', '/admissions'),
  ('Class X Board Examination Forms Are Open', 'Important notification for Class X students regarding board registration.', 'Important Notice', 'Board Forms', '/contact'),
  ('Summer Vacation Notice', 'School will remain closed during summer vacation as per the academic calendar.', 'May 2026', 'Holiday', '/contact')
ON CONFLICT DO NOTHING;
`;