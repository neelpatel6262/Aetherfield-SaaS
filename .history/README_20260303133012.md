# Aetherfield – Modern Sustainability SaaS Marketing Site

Clean, modern React marketing website for a sustainability-focused SaaS platform — built from scratch with scroll animations, responsive design, dynamic routing, and polished UX.

**Live Demo:** https://aetherfield.vercel.app (replace with your actual link)

---

## 1. Project Title

**Aetherfield – Sustainability SaaS Dashboard & Marketing Site**

---

## 2. Description

Aetherfield is a full marketing website for a fictional SaaS platform that helps companies track emissions, model sustainability goals, generate ESG reports, and take climate action.

Built **100% from scratch** in React + Vite + Tailwind CSS + Motion, inspired by a random professional SaaS template from Figma Community.

**No starter code or tutorials were followed** — the goal was to train real-world frontend engineering skills.

---

## 3. Reason Behind Creation & Why This Random Figma Design

In early 2025, I wanted to **break out of tutorial hell** and prove I could build production-level frontend applications independently.

I went to **Figma Community**, searched “SaaS”, scrolled randomly, and picked this design:

**Modern & Clean SaaS Company Website**  
https://www.figma.com/community/file/1279784479680263543/modern-clean-saas-company-website  
(Direct link to file used: https://www.figma.com/site/sOi2AKPLAJ3n1l3Z0EIKVT/Modern--Clean-SaaS-Company--Community-?node-id=0-1&t=HAcLWOSkiWz0NRZi-1)

**Why this random one?**
- It had large typography, subtle gradients, card layouts, scroll animation potential, professional structure
- It looked challenging but achievable
- It wasn’t overly complex (no dashboards with 50 charts)
- I wanted to train **Figma-to-code conversion** skill — one of the most valuable skills for frontend developers in 2025–2026

I rebuilt it **line by line** without copying any code — only looking at the visual design.

---

## 4. Features

- Responsive navbar (desktop + full-screen mobile overlay)
- Scroll-triggered fade + slide animations (via custom hook)
- Reusable `useScrollAnimation` hook for consistent effects
- Dynamic routes (`/journal/:slug`, `/careers/:jobId`)
- Signup form with:
  - Real-time validation
  - Password strength meter
  - Show/hide toggle (fixed event propagation bug)
  - Terms checkbox
  - LocalStorage save + console.log user object
- Beautiful 404 page with stylized “4 ✳ 4”
- Clean typography scale (heading, subheading, btn)
- Gradient backgrounds & modern color palette
- Staggered animations for cards/lists

---

## 5. Technologies

- React 18
- Vite (build tool)
- Tailwind CSS 3.4
- React Router v6
- Motion (scroll animations)
- Lucide React (icons)
- LocalStorage (demo auth)

---

## 6. Getting Started

### Prerequisites

- Node.js ≥ 18
- npm / yarn / pnpm

### Installation

## ```bash
git clone https://github.com/your-username/aetherfield-saas.git
cd aetherfield-saas
npm install


Development
Bashnpm run dev
# Opens http://localhost:5173
Build for Production
Bashnpm run build

---


7. Usage

Homepage: /
About: /about
Journal list: /journal
Single article: /journal/your-slug
Careers list: /careers
Single job: /careers/your-job-id
Signup: /signup
404: any invalid URL

---



8. Keyboard Shortcuts

Esc — Close mobile menu (if open)
Enter — Submit forms (signup)

---


9. Project Structure
textsrc/
├── assets/                 → images, logos
├── components/
│   ├── layout/             → Navbar, Footer, Layout
│   ├── sections/           → Hero, Features, ValueSection...
│   └── ui/                 → small reusable components
├── data/                   → static JSON-like data
├── hooks/                  → useScrollAnimation.js
├── pages/                  → Home, About, Journal...
├── styles/                 → index.css
├── App.jsx                 → routing
└── main.jsx                → ReactDOM root


---


10. Development Process

Picked random SaaS template from Figma Community
Created Vite + React + Tailwind project
Built layout wrapper (Navbar + Outlet + Footer)
Implemented routing early (nested routes)
Created custom useScrollAnimation hook
Built marketing sections one by one (Hero → CTA)
Added dynamic routes & data files
Designed & fixed signup form UX
Polished mobile menu (full-screen overlay)
Refactored for consistency & performance
Wrote professional README & documented growth


---


11. What I Learned

Convert complex Figma designs into real React code
Build reusable animation systems (custom hook)
Master React Router (nested layouts, params, 404)
Fix common bugs (event propagation in password toggle)
Write maintainable, scalable folder structure
Create consistent typography & design tokens
Simulate auth flow with localStorage
Build full-screen mobile menus with backdrop
Think about UX polish (hover states, stagger, timing)

---


12. Overall Growth – Before vs After
Before this project

Relied on tutorials & starter kits
Basic routing (flat routes only)
Manual animation props everywhere
Poor mobile menu UX
Inconsistent typography & spacing


---


After


Confident building production-ready React apps from Figma
Reusable systems (animations, layouts, data)
Smooth mobile + desktop experience
Clean component architecture
Professional README & storytelling skills

This project was the turning point from “learning React” to “building real products”.


---


13. Future Enhancements

Real backend authentication (Supabase / Firebase)
Protected user dashboard after signup
Dark mode toggle
Markdown support for journal articles
Job application form with file upload
Infinite scroll / pagination
SEO (meta tags, sitemap, Open Graph)
Analytics (Google Analytics / Vercel)
TypeScript migration

---


14. Known Issues

Password stored in plain text in localStorage (demo only)
No real API / backend yet
No auth guard / protected routes
No loading skeletons / error boundaries
No dark mode yet


---

15. Contributing
This is currently a personal learning project.
If you’d like to contribute:

Fork the repo
Create feature branch
Submit pull request

All feedback welcome!

---

16. License
MIT License
Feel free to use, modify, distribute.

---


17. Contact
Neel
Location: Parbhani, Maharashtra, India
GitHub: https://github.com/your-username
Email: (add your email if public)
LinkedIn: (add if public)


---

18. Acknowledgments

Figma Community → for the random SaaS inspiration
https://www.figma.com/community/file/1279784479680263543/modern-clean-saas-company-website
Motion.dev → best scroll animation library
Tailwind CSS → fastest styling workflow
Vite → lightning-fast dev experience
Lucide React → clean icons
React Router team → excellent documentation