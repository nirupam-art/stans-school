export type GalleryCategory =
  | "Annual Function"
  | "School Trip"
  | "Session 2025-26"
  | "Sports"
  | "Academics"
  | "Activities";

export type GalleryImage = {
  src: string;
  title: string;
  description: string;
  height: "small" | "medium" | "large";
  category: GalleryCategory;
};

export const galleryCategories = [
  "All Photos",
  "Annual Function",
  "School Trip",
  "Session 2025-26",
  "Sports",
  "Academics",
  "Activities",
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/hero-images/student1.jpg",
    title: "Academic Excellence",
    description: "Celebrating our outstanding achievers.",
    height: "small",
    category: "Academics",
  },
  {
    src: "/hero-images/student2.jpg",
    title: "Champions",
    description: "Students winning prestigious awards.",
    height: "large",
    category: "Sports",
  },
  {
    src: "/hero-images/student3.jpg",
    title: "Science Laboratory",
    description: "Learning through practical experiments.",
    height: "medium",
    category: "Academics",
  },
  {
    src: "/hero-images/student1.jpg",
    title: "Sports Day",
    description: "Fitness, teamwork, and discipline.",
    height: "medium",
    category: "Sports",
  },
  {
    src: "/hero-images/student2.jpg",
    title: "Annual Function",
    description: "Celebrating talent, creativity, and confidence.",
    height: "small",
    category: "Annual Function",
  },
  {
    src: "/hero-images/student3.jpg",
    title: "Digital Classroom",
    description: "Modern education with smart technology.",
    height: "large",
    category: "Session 2025-26",
  },
  {
    src: "/hero-images/student1.jpg",
    title: "School Events",
    description: "Memories that last forever.",
    height: "small",
    category: "Activities",
  },
  {
    src: "/hero-images/student2.jpg",
    title: "Competitions",
    description: "Developing confidence and leadership.",
    height: "medium",
    category: "Activities",
  },
  {
    src: "/hero-images/student3.jpg",
    title: "Learning Together",
    description: "Building brighter futures every day.",
    height: "small",
    category: "Session 2025-26",
  },
  {
    src: "/hero-images/student1.jpg",
    title: "School Trip",
    description: "Students exploring, learning, and enjoying together.",
    height: "large",
    category: "School Trip",
  },
  {
    src: "/hero-images/student2.jpg",
    title: "Annual Day Performance",
    description: "A beautiful celebration of culture and talent.",
    height: "medium",
    category: "Annual Function",
  },
  {
    src: "/hero-images/student3.jpg",
    title: "Session Memories",
    description: "Highlights from the academic session 2025-26.",
    height: "small",
    category: "Session 2025-26",
  },
];