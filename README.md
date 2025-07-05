# JustApt Scratch

A modern front-end boilerplate built with **Next.js 15**, **React 19**, **MUI 6**, and **Chart.js 4**. Designed to rapidly prototype and build sleek, interactive UIs using cutting-edge libraries and developer tooling.

## 🔧 Tech Stack

- **Next.js 15** with Turbopack
- **React 19**
- **MUI 6** (Material UI)
- **Chart.js 4** with `react-chartjs-2`
- **Emotion** for CSS-in-JS
- **React Router DOM 7** (for internal routing logic as needed)
- **TypeScript**
- **Prettier + ESLint** for code quality

### Prerequisites

- Node.js (v18+ recommended)
- pnpm / npm / yarn (your preference)


### Installation

```bash
pnpm install
# or
npm install
# or
yarn install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Build for Production
```bash
pnpm build
# or
npm run build
```

## Code Formatting
```bash
pnpm format
# or
npm run format
```

## 🧱 Project Structure

/
├── pages/           # Next.js routing system
├── components/      # Shared and reusable components
├── styles/          # Global and Emotion styles
├── public/          # Static assets
├── utils/           # Utility functions
├── types/           # TypeScript type declarations
└── ...

## 📊 Features

- 🔥 **Next.js 15** with Turbopack for ultra-fast dev builds
- 🎨 **Material UI 6** for clean and accessible UI
- 💅 **Emotion** support for scoped styling
- 📈 **Chart.js 4** integration with `react-chartjs-2` for data visualizations
- ✨ **Inter font** from Google Fonts via `@fontsource`
- 🛠️ Strong linting and formatting with **ESLint + Prettier**

---

### Why This Stack?

#### ✅ **Next.js 15 + Turbopack**
- Offers fast development builds and excellent React SSR/ISR support.
- Turbopack replaces Webpack for faster incremental builds.

#### ✅ **React 19**
- Experimental concurrent features.
- Future-facing API and enhanced rendering capabilities.

#### ✅ **Material UI 6**
- Provides a responsive, themeable component library with accessibility out-of-the-box.
- Latest version includes refined support for React 18+ and Emotion styling.

#### ✅ **Chart.js + react-chartjs-2**
- Great for building visually engaging charts.
- The wrapper makes Chart.js integration smoother in React.

#### ✅ **Emotion**
- Efficient CSS-in-JS styling, used natively by MUI.

#### ✅ **Prettier + ESLint**
- Enforces consistent code style.
- TypeScript linting ensures robustness in large codebases.

---

### Customization Tips

- 💡 Want a dark/light toggle? Use `@mui/material`'s `ThemeProvider` with a toggle state.
- 📊 Need dynamic chart updates? Use state or SWR to feed `react-chartjs-2` components.
- 🔌 Want API routes? Use `pages/api/` for backend logic.

---