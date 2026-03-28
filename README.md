# 🌿 Aetherfield

> A clean, modern React marketing website for a sustainability-focused SaaS platform — built from scratch with scroll animations, responsive design, dynamic routing, and polished UX.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://aetherfield-saa-s-hafm.vercel.app/)

**Live Demo:** [aetherfield-saa-s-hafm.vercel.app](https://aetherfield-saa-s-hafm.vercel.app/)

---

## 🖥️ Live Preview

![Aetherfield Preview](https://github.com/neelpatel6262/Aetherfield-SaaS/blob/5f0be6a29158a8ce6b915a75ddae1c9e21b38ac8/Aetherfield%20SaaS.jpg)

---

## 🎨 Figma Design Reference

> All pages designed in Figma before a single line of code was written — Home, /journal, /about, /careers, and more.

![Aetherfield Figma Design](https://raw.githubusercontent.com/neelpatel6262/Aetherfield-SaaS/main/Screenshot%202026-03-25%20173510.png)

---

## 1. Project Title

**Aetherfield** — Sustainability SaaS Marketing Site

A full marketing website for a fictional SaaS platform that helps companies track emissions, model sustainability goals, generate ESG reports, and take meaningful climate action. Built 100% from scratch in React + Vite + Tailwind CSS, using a Figma Community design as the only visual reference — no starter code, no tutorials.

---

## 2. Description

Aetherfield is a production-grade React marketing site built as a personal challenge to escape tutorial hell and prove independent, real-world frontend capability.

The design reference was a randomly picked SaaS template from [Figma Community](https://www.figma.com/community/file/1573023525218599861) — rebuilt line by line from the visual only. No code was copied. Every component, animation, route, and interaction was written from scratch.

The result: a fully responsive, animated, multi-page marketing site with dynamic routing, a multi-step signup flow, and a scalable component architecture — with all animation logic centralized in a single reusable `useScrollAnimation` hook.

---

## 3. Features

**Navigation & Layout**
- 🧭 **Responsive Navbar** – Desktop nav links + mobile drawer with mount slide-down and staggered link animations via `useScrollAnimation`.
- 📜 **ScrollToTop** – Automatically scrolls to the top on every route change.
- 🔀 **Page transitions** – Route-level fade + slide animation in `Layout.jsx` using `useLocation`.

**Animations**
- 🎞️ **Centralized animation system** – Custom `useScrollAnimation` hook exposes `ref`, `inView`, `initial`, `animate`, and `transition` — no manual `whileInView` props scattered across components.
- 🃏 **Staggered animations** – Cards and list items animate with delay offsets using Framer Motion `variants` + `staggerChildren`.
- 📱 **Mobile menu** – Smooth open/close via `AnimatePresence` with `height: 0 → auto`.

**Routing**
- 🔀 **Dynamic routing** – `/journal/:slug` and `/careers/:jobId` powered by real local data files.
- 🚫 **404 page** – Stylized `4 ✳ 4` layout with fluid `clamp()` typography, no Navbar/Footer.

**Signup Form**
- ✅ Real-time per-field validation with inline error messages.
- 🔐 Password strength meter (Weak / Fair / Good / Strong).
- 👁️ Show/hide password toggle.
- ☑️ Terms checkbox with custom styling.
- 📧 Step 2 email verification confirmation screen.
- 🔒 Password stripped before `localStorage` — only safe user data stored.

**Design System**
- 🖋️ **Custom font stack** – `heading` (Source Serif 4), `subheading` (Radio Canada Big), `btn` (Geist Mono) applied consistently.
- 🎨 **Color tokens** – Site-wide gradient (`#C5DCF0 → #E0C9A8`), yellow footer (`#FFF546`), warm section bg (`#EDE8DC`).
- 🔵 **Blue tint overlay** – `#93C5FD` at `mixBlendMode: multiply, opacity: 0.7` on all grayscale images.
- 📐 **Fluid typography** – `clamp()` across Hero, Features, and NotFound for truly responsive headings.

---

## 4. Technologies

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| React Router v6 | Client-side routing |
| Framer Motion (`motion/react`) | Scroll + mount animations |
| Lucide React | Icons |
| Vercel | Deployment |

---

## 5. Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18.0.0** or higher
- npm / yarn / pnpm

Verify:

```bash
node -v
npm -v
```

---

## 6. Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/neelpatel6262/Aetherfield-SaaS.git
   cd Aetherfield-SaaS
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

---

## 7. Usage

- Start the dev server with `npm run dev` — opens at `http://localhost:5173`.
- Navigate through all pages using the Navbar links.
- Explore the Journal and Careers pages to see dynamic routing in action.
- Fill out the Signup form to test multi-step validation flow.
- Resize the browser to test responsive behavior and mobile menu.

### Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/about` | About — mission, values, team |
| `/journal` | Journal article list |
| `/journal/:slug` | Single article |
| `/careers` | Careers listing |
| `/careers/:jobId` | Single job listing |
| `/signup` | Multi-step signup form |
| `*` | 404 — No Navbar/Footer |

---

## 8. Keyboard Shortcuts

This is a marketing site and does not currently include custom keyboard shortcuts. If interactive sections are added in the future, shortcuts will be documented here.

---

## 9. Project Structure

```text
src/
├── assets/
│   └── images/                # All image and brand assets
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx         # Sticky nav with animated mobile drawer
│   │   ├── Footer.jsx         # Yellow footer with texture + logo
│   │   └── Layout.jsx         # Outlet wrapper with route transitions
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── ValueSection.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── Testimonial.jsx
│   │   ├── JournalPreview.jsx
│   │   └── CTABanner.jsx
│   └── ui/
│       └── ScrollToTop.jsx
├── data/
│   ├── articles.js            # 6 journal articles
│   ├── jobs.js                # 4 job listings
│   └── testimonials.js        # 1 testimonial
├── hooks/
│   └── useScrollAnimation.js  # Centralized scroll animation hook
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Journal.jsx
│   ├── Article.jsx
│   ├── Careers.jsx
│   ├── JobListing.jsx
│   ├── SignUp.jsx
│   └── NotFound.jsx
├── styles/
│   └── index.css              # Tailwind entry + @font-face declarations
├── App.jsx                    # Route definitions
└── main.jsx                   # ReactDOM root
```

---

## 10. Development Process

1. Picked a SaaS template from Figma Community as the visual reference only.
2. **Designed all pages in Figma first** — Home, /journal, /about, /careers — before writing any code.
3. Set up Vite + React + Tailwind from scratch.
4. Built the `Layout` wrapper — Navbar + `<Outlet>` + Footer with route-level transitions.
5. Implemented routing early — nested layouts, dynamic params, and 404 handling.
6. Built all marketing sections one by one — Hero through CTABanner.
7. Added dynamic routes and local data files for journal articles and job listings.
8. Designed and debugged the multi-step signup form (validation, password meter, step 2).
9. Created the `useScrollAnimation` custom hook — refactored all `whileInView` props into a single centralized system driven by `inView` state.
10. Polished the Navbar — slide-down mount animation + staggered desktop links + `AnimatePresence` mobile drawer.
11. Fixed production bugs — `useLocation` missing in `Layout.jsx`, hardcoded `ArticleImage`, font casing inconsistency, password in `localStorage`.
12. Deployed to Vercel and wrote project documentation.

---

## 11. What I Learned

- Converting complex Figma designs into real, working React component code.
- Building a reusable animation system with a custom hook instead of scattering `whileInView` props everywhere.
- The difference between mount animations (`animate`) and scroll-triggered animations (`useInView`) — and when to use each.
- Mastering React Router v6 — nested layouts, dynamic params, `useLocation`, and 404 handling.
- How Framer Motion `variants` + `staggerChildren` drives staggered list animations cleanly.
- `mixBlendMode: multiply` with color overlays for the consistent blue-tinted grayscale image effect.
- Fluid typography with `clamp()` for truly responsive headings without media query hacks.
- Simulating a multi-step auth flow using local React state.
- Debugging Vite build errors — case-sensitive imports, JSX in `.js` files, missing imports.
- Security basics — never store passwords in `localStorage`.

---

## 12. Overall Growth

| Aspect | Before | After |
|---|---|---|
| Workflow | Relied on tutorials and starter kits | Confident building from Figma independently |
| Routing | Basic flat routes only | Nested layouts, dynamic params, 404 |
| Animations | Manual `whileInView` props everywhere | Centralized `useScrollAnimation` hook |
| Mobile UX | Basic toggle | `AnimatePresence` drawer with staggered links |
| Typography | Inconsistent sizing | Consistent `clamp()` scale across all pages |
| Architecture | Random file structure | Scalable, organized, predictable |
| Debugging | Googled every error | Traced Vite errors, React lifecycle issues independently |

> This project was the turning point from "learning React" to "building real products."

---

## 13. Future Enhancements

- [ ] 🔐 Real backend authentication — Supabase Auth.
- [ ] 🛡️ Protected dashboard route after signup.
- [ ] 🌙 Dark mode toggle.
- [ ] 📝 Markdown support for journal articles.
- [ ] 📎 Job application form with file upload.
- [ ] 📄 Pagination / infinite scroll for the journal list.
- [ ] 🔍 SEO — meta tags, sitemap, Open Graph.
- [ ] 📊 Analytics — Vercel Analytics integration.
- [ ] 🟦 TypeScript migration.
- [ ] 🏗️ Build out the `/product` page (currently a 404 placeholder).

---

## 14. Known Issues / Limitations

- `/login` route linked from SignUp has no page — redirects to 404.
- `/product` is intentionally a 404 placeholder.
- No real API or backend — demo/static data only.
- No auth guard or protected routes yet.
- No loading skeletons or error boundaries.
- No dark mode support at this time.

---

## 15. Contributing

This is a personal learning project — contributions are welcome!

1. **Fork** the repository.
2. **Create** a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit** your changes and push:

   ```bash
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request** describing what you changed.

All feedback welcome.

---

## 16. License

This project is open source under the [MIT License](https://opensource.org/licenses/MIT) — free to use, modify, and distribute.

---

## 17. Contact

- **Name:** Neel Patel
- **Email:** patelneel392003@gmail.com
- **GitHub:** [github.com/neelpatel6262](https://github.com/neelpatel6262)
- **LinkedIn:** [linkedin.com/in/uxui-designer-devloper](https://www.linkedin.com/in/uxui-designer-devloper/)

---

## 18. Acknowledgments

- [Figma Community](https://www.figma.com/community/file/1573023525218599861) – Visual design reference / inspiration.
- [Motion.dev](https://motion.dev) – Best scroll animation library for React.
- [Tailwind CSS](https://tailwindcss.com) – Fastest styling workflow available.
- [Vite](https://vitejs.dev) – Lightning-fast dev experience.
- [Lucide React](https://lucide.dev) – Clean, consistent icon set.
- [React Router](https://reactrouter.com) – Excellent routing library with great docs.

---

## 19. Footer

| Field | Info |
|---|---|
| Project Status | ✅ Active / Portfolio-ready |
| Version | 1.0.0 |
| Last Updated | March 2026 |
| Deployment | Vercel |

---

## 20. Checklist

- [x] Vite + React 18 + Tailwind CSS v4 project setup
- [x] Figma design completed for all pages before development
- [x] Responsive Navbar with `AnimatePresence` mobile drawer + stagger animations
- [x] Custom `useScrollAnimation` hook — centralized animation system
- [x] All marketing sections (Hero → CTABanner)
- [x] Dynamic routing — `/journal/:slug`, `/careers/:jobId`
- [x] Local data files — articles, jobs, testimonials
- [x] Multi-step signup form with validation + password strength meter
- [x] Password stripped from `localStorage` before storing
- [x] 404 page with fluid `clamp()` typography
- [x] `ScrollToTop` on route change
- [x] Consistent font stack + gradient design tokens across all pages
- [x] Fixed `useLocation` bug in `Layout.jsx`
- [x] Fixed hardcoded article image bug in `Article.jsx`
- [x] Deployed to Vercel
- [ ] Real backend / Supabase auth
- [ ] Protected routes / dashboard
- [ ] Dark mode
- [ ] Markdown journal articles
- [ ] TypeScript migration
- [ ] SEO (meta tags, Open Graph, sitemap)
