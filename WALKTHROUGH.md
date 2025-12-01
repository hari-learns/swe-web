# Swetha K - Portfolio Website Walkthrough

## Project Overview
This is a modern, responsive portfolio website built for Swetha K, a Chartered Accountant. It features a clean, professional design with interactive elements, animations, and a focus on showcasing financial expertise and AI capabilities.

## Technology Stack
- **Framework**: React 19.2 + TypeScript
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Variables, Flexbox/Grid, CSS Animations)
- **Routing**: Single Page Application (SPA) with smooth scroll navigation

## Project Structure
```
src/
├── components/        # Reusable UI components
│   ├── AnimatedCounter/ # Scroll-triggered number counters
│   ├── Badge/          # Skill and role tags
│   ├── Button/         # Interactive buttons
│   ├── Card/           # Content containers
│   └── Timeline/       # Experience timeline
├── hooks/             # Custom React hooks
│   ├── useCounter.ts  # Animation logic for numbers
│   └── useScrollAnimation.ts # Intersection Observer logic
├── sections/          # Page sections
│   ├── Hero/          # Landing area
│   ├── About/         # Bio and metrics
│   ├── Experience/    # Work history
│   ├── Projects/      # Financial analysis showcase
│   ├── Skills/        # Competencies and certifications
│   ├── Accomplishments/# Awards and recognition
│   ├── Education/     # Academic background
│   └── Contact/       # Contact form and info
├── styles/            # Global styling
│   ├── design-system.css # Variables, colors, typography
│   └── global.css     # Resets and base styles
├── App.tsx            # Main application component
└── main.tsx           # Entry point
```

## Customization Guide

### Colors & Typography
Edit `src/styles/design-system.css` to change the color palette or fonts.
- Primary Colors: `--color-accent-green-dark`, `--color-accent-green-light`
- Fonts: Defined in `--font-heading`, `--font-body`

### Content
Each section has its own folder in `src/sections/`. Modify the `.tsx` files to update text, links, and data.
- **Experience**: Update `src/sections/Experience/Experience.tsx`
- **Projects**: Update the `projects` array in `src/sections/Projects/Projects.tsx`
- **Skills**: Update arrays in `src/sections/Skills/Skills.tsx`

### Images & Assets
- **Profile Photo**: Replace `public/profile-placeholder.png` with the actual professional headshot.
- **Resume**: Replace `public/resume.pdf` with the actual PDF file.

## Running Locally
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`

## Deployment
The project is ready for deployment on platforms like Vercel, Netlify, or GitHub Pages.
Run `npm run build` to generate the `dist` folder, which contains the static files to be served.
