# 🌿 Aetherfield

> A clean, modern React marketing website for a sustainability-focused SaaS platform — built from scratch with scroll animations, responsive design, dynamic routing, and polished UX.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://aetherfield-saa-s-hafm.vercel.app/)

**Live Demo:** [aetherfield.vercel.app](https://aetherfield-saa-s-hafm.vercel.app/)

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

The result: a fully responsive, animated, multi-page marketing site with dynamic routing, a multi-step signup flow, and a scalable component architecture.

---

## 3. Features

**Navigation & Layout**
- 🧭 **Responsive Navbar** – Desktop nav links + full-screen mobile overlay with hamburger toggle animation.
- 📜 **ScrollToTop** – Automatically scrolls to the top on every route change.

**Animations**
- 🎞️ **Scroll-triggered animations** – Fade + slide effects via a custom `useScrollAnimation` hook.
- 🃏 **Staggered animations** – Cards and list items animate with delay offsets for a polished feel.

**Routing**
- 🔀 **Dynamic routing** – `/journal/:slug` and `/careers/:jobId` powered by real local data files.
- 🚫 **404 page** – Stylized `4 ✳ 4` layout with fluid `clamp()` typography, no Navbar/Footer.

**Signup Form**
- ✅ Real-time field validation.
- 🔐 Password strength meter.
- 👁️ Show/hide password toggle (event propagation bug fixed).
- ☑️ Terms checkbox with custom styling.
- 📧 Step 2 email verification screen.

**Design System**
- 🖋️ **Clean typography scale** – `heading`, `subheading`, `btn` font families applied consistently.
- 🎨 **Gradient backgrounds** – Consistent site-wide color system across all sections.

---

## 4. Technologies

| Tool              | Purpose                    |
|-------------------|----------------------------|
| React 18          | UI framework               |
| Vite              | Build tool                 |
| Tailwind CSS 3.4  | Styling                    |
| React Router v6   | Client-side routing        |
| Motion            | Scroll animations          |
| Lucide React      | Icons                      |

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
   git clone https://github.com/neelpatel6262/aetherfield-saas.git
   cd aetherfield-saas
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

| Path                | Page                              |
|---------------------|-----------------------------------|
| `/`                 | Homepage                          |
| `/about`            | About — mission, values, team     |
| `/journal`          | Journal article list              |
| `/journal/:slug`    | Single article                    |
| `/careers`          | Careers listing                   |
| `/careers/:jobId`   | Single job listing                |
| `/signup`           | Multi-step signup form            |
| `*`                 | 404 — No Navbar/Footer            |

---

## 8. Keyboard Shortcuts

This is a marketing site and does not currently include custom keyboard shortcuts. If interactive sections (modals, carousels) are added in the future, shortcuts will be documented here.

---

## 9. Project Structure

```text
src/
├── assets/             # Images, logos, brand assets
├── components/
│   ├── layout/         # Navbar, Footer, Layout wrapper
│   ├── sections/       # Hero, Features, ValueSection, CTABanner...
│   └── ui/             # ScrollToTop, small reusable components
├── data/               # articles.js, jobs.js, testimonials.js
├── hooks/              # useScrollAnimation.js
├── pages/              # Home, About, Journal, Article, Careers, Signup...
├── styles/             # index.css (global styles + Tailwind entry)
├── App.jsx             # Route definitions
└── main.jsx            # ReactDOM root
```

---

## 10. Development Process

1. Picked a random SaaS template from Figma Community as the visual reference only.
2. **Designed all pages in Figma first** — Home, /journal, /about, /careers, and more — before writing any code. *(See Figma Design Reference above.)*
3. Set up Vite + React + Tailwind project from scratch.
4. Built the `Layout` wrapper — Navbar + `<Outlet>` + Footer.
5. Implemented routing early — nested layouts, dynamic params, and 404 page.
6. Created the `useScrollAnimation` custom hook for reusable scroll-triggered animations.
7. Built all marketing sections one by one — Hero through CTABanner.
8. Added dynamic routes and local data files for journal articles and job listings.
9. Designed and debugged the multi-step signup form UX (validation, password meter, step 2).
10. Polished the mobile menu — hamburger toggle animation + full-screen overlay.
11. Refactored for typography consistency, spacing uniformity, and component cleanup.
12. Deployed to Vercel and wrote project documentation.

---

## 11. What I Learned

- Converting complex Figma designs into real, working React component code.
- Building a reusable animation system with a custom hook instead of scattering props everywhere.
- Mastering React Router v6 — nested layouts, dynamic params, and 404 handling.
- Fixing real bugs — event propagation in password visibility toggles.
- Writing a maintainable, scalable folder structure from day one.
- Creating consistent typography and design tokens across an entire site.
- Simulating a multi-step auth flow using local React state.
- Building full-screen mobile menus with smooth CSS transitions.
- Thinking about UX polish — hover states, stagger timing, and scroll reset.

---

## 12. Overall Growth

| Aspect        | Before                              | After                                      |
|---------------|-------------------------------------|--------------------------------------------|
| Workflow      | Relied on tutorials and starter kits | Confident building from Figma independently |
| Routing       | Basic flat routes only              | Nested layouts, dynamic params, 404        |
| Animations    | Manual props everywhere             | Reusable hook system                       |
| Mobile UX     | Basic toggle                        | Full-screen overlay with staggered links   |
| Typography    | Inconsistent sizing                 | Consistent scale across all sections       |
| Architecture  | Random file structure               | Scalable, organized, predictable           |

> This project was the turning point from "learning React" to "building real products."

---

## 13. Future Enhancements

- [ ] 🔐 Real backend authentication — Supabase or Firebase.
- [ ] 🛡️ Protected dashboard route after signup.
- [ ] 🌙 Dark mode toggle.
- [ ] 📝 Markdown support for journal articles.
- [ ] 📎 Job application form with file upload.
- [ ] 📄 Infinite scroll / pagination for the journal list.
- [ ] 🔍 SEO — meta tags, sitemap, Open Graph.
- [ ] 📊 Analytics — Vercel or Google Analytics integration.
- [ ] 🟦 TypeScript migration.

---

## 14. Known Issues / Limitations

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

| Field          | Info                      |
|----------------|---------------------------|
| Project Status | Active / Portfolio-ready  |
| Version        | 1.0.0                     |
| Deployment     | Vercel                    |

---

## 20. Checklist

- [x] Vite + React 18 + Tailwind CSS 3.4 project setup
- [x] Figma design completed for all pages before development
- [x] Responsive Navbar with full-screen mobile overlay
- [x] Custom `useScrollAnimation` hook
- [x] All marketing sections (Hero → CTABanner)
- [x] Dynamic routing — `/journal/:slug`, `/careers/:jobId`
- [x] Local data files — articles, jobs, testimonials
- [x] Multi-step signup form with validation + password meter
- [x] 404 page with fluid typography
- [x] ScrollToTop on route change
- [x] Consistent typography scale + gradient design system
- [x] Deployed to Vercel
- [ ] Real backend / Supabase auth
- [ ] Protected routes / dashboard
- [ ] Dark mode
- [ ] Markdown journal articles
- [ ] TypeScript migration
- [ ] SEO (meta tags, Open Graph, sitemap)
