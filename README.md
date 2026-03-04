# Aetherfield — Sustainability SaaS Marketing Site

> A clean, modern React marketing website for a sustainability-focused SaaS platform — built from scratch with scroll animations, responsive design, dynamic routing, and polished UX.

---


![image alt](https://github.com/neelpatel6262/Aetherfield-SaaS/blob/5f0be6a29158a8ce6b915a75ddae1c9e21b38ac8/Aetherfield%20SaaS.jpg)


## Live Demo

🔗 [aetherfield.vercel.app](https://aetherfield-saa-s-hafm.vercel.app/)

---

## What Is This?

Aetherfield is a full marketing website for a fictional SaaS platform that helps companies track emissions, model sustainability goals, generate ESG reports, and take meaningful climate action.

Built 100% from scratch in **React + Vite + Tailwind CSS**, inspired by a randomly picked professional SaaS template from Figma Community — with no starter code or tutorials followed.

---

## Why I Built This

In early 2025, I wanted to break out of tutorial hell and prove I could build production-level frontend applications independently.

I went to Figma Community, searched "SaaS", scrolled randomly, and landed on this design:

**Modern & Clean SaaS Company Website**
→ [Figma Community File](https://www.figma.com/community/file/1573023525218599861)

**Why this one?**

- Large typography, subtle gradients, card layouts — scroll animation potential
- Challenging but achievable — no dashboards with 50 charts
- Trained real Figma-to-code conversion skill — one of the most valuable frontend skills in 2025–2026
- Rebuilt line by line without copying any code — only the visual design as reference

---

## Features

- **Responsive Navbar** — desktop links + full-screen mobile overlay with hamburger animation
- **Scroll-triggered animations** — fade + slide via custom `useScrollAnimation` hook
- **Dynamic routing** — `/journal/:slug`, `/careers/:jobId` with real data files
- **Signup form** with:
  - Real-time field validation
  - Password strength meter
  - Show/hide toggle (fixed event propagation bug)
  - Terms checkbox with custom styling
  - Step 2 email verification screen
- **404 page** — stylized `4 ✳ 4` with fluid `clamp()` typography
- **ScrollToTop** — auto scrolls to top on every route change
- **Clean typography scale** — `heading`, `subheading`, `btn` font families
- **Gradient backgrounds** — consistent site-wide color system
- **Staggered animations** — cards and lists with delay offsets

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS 3.4 | Styling |
| React Router v6 | Client-side routing |
| Motion | Scroll animations |
| Lucide React | Icons |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/your-username/aetherfield-saas.git
cd aetherfield-saas
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/about` | About — mission, values, team |
| `/journal` | Journal list |
| `/journal/:slug` | Single article |
| `/careers` | Careers list |
| `/careers/:jobId` | Single job listing |
| `/signup` | Signup form |
| `*` | 404 — No Navbar/Footer |

---

## Project Structure

```
src/
├── assets/           → images, logos
├── components/
│   ├── layout/       → Navbar, Footer, Layout
│   ├── sections/     → Hero, Features, ValueSection...
│   └── ui/           → ScrollToTop, small reusables
├── data/             → article.js, jobs.js, testimonials.js
├── hooks/            → useScrollAnimation.js
├── pages/            → Home, About, Journal, Article...
├── styles/           → index.css
├── App.jsx           → routing
└── main.jsx          → ReactDOM root
```

---

## Development Process

1. Picked random SaaS template from Figma Community
2. Set up Vite + React + Tailwind project
3. Built Layout wrapper — Navbar + Outlet + Footer
4. Implemented routing early — nested routes + 404
5. Created `useScrollAnimation` custom hook
6. Built all marketing sections one by one — Hero → CTABanner
7. Added dynamic routes + data files for articles and jobs
8. Designed and debugged signup form UX
9. Polished mobile menu — hamburger animation + dropdown
10. Refactored for typography consistency and spacing
11. Wrote professional README and documented growth

---

## What I Learned

- Convert complex Figma designs into real React component code
- Build reusable animation systems with a custom hook
- Master React Router — nested layouts, dynamic params, 404 handling
- Fix common bugs — event propagation in password visibility toggle
- Write maintainable, scalable folder structure from day one
- Create consistent typography and design tokens across components
- Simulate multi-step auth flow with form state
- Build full-screen mobile menus with smooth transitions
- Think about UX polish — hover states, stagger timing, scroll reset

---

## Before vs After

| | Before | After |
|---|---|---|
| Workflow | Relied on tutorials and starter kits | Confident building from Figma independently |
| Routing | Basic flat routes only | Nested layouts, dynamic params, 404 |
| Animations | Manual props everywhere | Reusable hook system |
| Mobile UX | Basic toggle | Full-screen overlay with staggered links |
| Typography | Inconsistent sizing | Consistent scale across all sections |
| Architecture | Random file structure | Scalable, organized, predictable |

> This project was the turning point from "learning React" to "building real products."

---

## Future Enhancements

- Real backend authentication — Supabase / Firebase
- Protected dashboard after signup
- Dark mode toggle
- Markdown support for journal articles
- Job application form with file upload
- Infinite scroll / pagination for journal
- SEO — meta tags, sitemap, Open Graph
- Analytics — Vercel / Google Analytics
- TypeScript migration

---

## Known Issues

- No real API or backend — demo only
- No auth guard or protected routes
- No loading skeletons or error boundaries
- No dark mode yet

---

## Contributing

This is a personal learning project. Contributions are welcome.

```bash
# Fork the repo
# Create a feature branch
git checkout -b feature/your-feature

# Submit a pull request
```

All feedback welcome.

---

## License

MIT License — free to use, modify, and distribute.

---

## Contact

**Neel**
🐙 [GitHub](https://github.com/neelpatel6262)
✉️ patelneel392003@gmail.com
💼 [LinkedIn](https://www.linkedin.com/in/uxui-designer-devloper/)

---

## Acknowledgments

- [Figma Community](https://www.figma.com/community/file/1573023525218599861) — random SaaS inspiration
- [Motion.dev](https://motion.dev) — best scroll animation library
- [Tailwind CSS](https://tailwindcss.com) — fastest styling workflow
- [Vite](https://vitejs.dev) — lightning-fast dev experience
- [Lucide React](https://lucide.dev) — clean, consistent icons
- [React Router](https://reactrouter.com) — excellent documentation
