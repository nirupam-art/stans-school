# St. An's Secondary School, Jalore 🏫

Official website for **St. An's Secondary School, Jalore** built with modern web technologies for a fast, accessible, and visually rich user experience.

🌐 **Live Website**: [https://www.stansjalore.in/](https://www.stansjalore.in/)

---

## 🚀 Features

- 🎓 **Interactive Homepage**: Dynamic hero section, announcements popup, school highlights, statistics counter, and principal's message.
- 🏫 **Comprehensive School Pages**:
  - **About Us**: School history, mission, vision, core values, and achievements.
  - **Facilities**: Interactive campus tours covering science labs, computer lab, library, sports ground, smart classrooms, and transport.
  - **Faculty**: Detailed directory of educators and academic leadership.
  - **Gallery**: Photo gallery with category filtering and lightbox preview.
  - **Contact Us**: Inquiry form, contact numbers, address, and interactive location map.
- 📝 **Online Admission System**: Digital admission application form connected to Supabase for database storage and EmailJS for automated email notifications.
- 🔐 **Admin Portal (`/admin`)**: Secure administrative dashboard to manage:
  - Admission enquiries (status tracking, filtering, and record management).
  - Live site announcements and popups (create, publish/unpublish, delete).
- 📱 **Fully Responsive**: Mobile-first design tailored across all viewport sizes.
- 🔍 **SEO Optimized**: Dynamic `sitemap.ts`, `robots.ts`, and structured meta tags.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI & Styling**: [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **Backend & Database**: [Supabase](https://supabase.com/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Icons & UI Utilities**: Lucide React, React Icons, React CountUp
- **Analytics**: Vercel Analytics

---

## 📁 Directory Structure

```
├── app/                  # Next.js App Router pages and layouts
│   ├── about/            # About Us page
│   ├── admin/            # Admin dashboard and authentication
│   ├── admissions/       # Online admissions form & details
│   ├── contact/          # Contact details & inquiry page
│   ├── facilities/       # Campus facilities showcase
│   ├── faculty/          # Teacher & staff directory
│   ├── gallery/          # Interactive image gallery
│   ├── layout.tsx        # Root layout with Navbar & Footer
│   ├── page.tsx          # Homepage
│   ├── robots.ts         # Robots.txt generator
│   └── sitemap.ts        # Dynamic XML Sitemap
├── components/           # Reusable UI components
├── lib/                  # Utility functions & Supabase client integration
├── public/               # Static assets & images
└── README.md             # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js**: v18+ 
- **npm** / **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nirupam-art/stans-school.git
   cd stans-school
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Database Schema (Supabase)

To enable admissions and announcements in Supabase, execute the SQL migration script in your Supabase SQL Editor. The complete schema definition is located in [`lib/supabase.ts`](file:///Users/vedantsachinmalode/Desktop/Nirupam/stans-school/lib/supabase.ts).

Key tables:
- `public.admissions`: Stores student application submissions and review status.
- `public.announcements`: Stores site-wide notices and hero popups.

---

## 💻 Available Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the application for production.
- `npm run start` - Runs the built production server.
- `npm run lint` - Runs ESLint to check for code quality issues.

---

## 📄 License

This project is created for **St. An's Secondary School, Jalore**. All rights reserved.
