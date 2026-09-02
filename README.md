# Personal Portfolio Website (Internship Platform)

A modern, minimal, and high-performance personal portfolio website designed as an internship application landing page: **Personal Brand + Portfolio + Technical Proof + Landing Page**.

## Tech Stack

* **Framework**: Next.js (App Router)
* **Library**: React 19
* **Language**: TypeScript (Strict Mode)
* **Styling**: Tailwind CSS v4
* **Tooling & Linting**: ESLint, PostCSS

## Getting Started

### Prerequisites
* Node.js (v18.18+ or v20+ recommended)
* npm

### Installation
```bash
npm install
```

### Development Server
Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Type Checking
```bash
npm run typecheck
```

### Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
```

## Project Structure

```
├── docs/               # Project planning, discovery, and architecture docs
├── public/             # Static public assets (images, icons, documents)
│   ├── documents/      # Resume / CV files
│   ├── icons/          # SVGs and logos
│   └── images/         # Project screenshots and illustrations
├── src/
│   ├── app/            # Next.js App Router (layouts, pages, global styles)
│   ├── components/     # Reusable UI primitives and section components
│   ├── data/           # Strongly-typed portfolio content & data contracts
│   ├── lib/            # Shared utilities and helper functions
│   └── types/          # TypeScript definitions & data models
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
