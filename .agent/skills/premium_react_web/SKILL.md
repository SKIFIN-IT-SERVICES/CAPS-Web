---
name: Premium React Web Development
description: Guidelines and best practices for building high-end, animated React websites using Vite and CSS.
---

# Premium React Web Development Skill

This skill outlines the process for creating "Premium" React applications that focus on aesthetics, smooth animations, and clean architecture.

## 1. Stack Selection
- **Core**: React (latest) via Vite.
- **Routing**: `react-router-dom` v6+.
- **Animation**: `framer-motion` (Standard for complex animations) or `aos` (Animate On Scroll) for simpler needs.
- **Styling**: Vanilla CSS with CSS Variables (`:root`) or CSS Modules. Avoid Tailwind unless requested, to ensure unique, non-generic designs.

## 2. Design Principals
- **Glassmorphism**: Use `backdrop-filter: blur(10px)` with semi-transparent backgrounds (`rgba(255, 255, 255, 0.1)`).
- **Typography**: Large, bold headings (Montserrat/Poppins) vs clean body text (Inter/Roboto).
- **Spacing**: Generous whitespace. Use `gap`, `padding`, and `margin` liberally to let content breathe.
- **Interactivity**: 
    - Buttons should scale (`transform: scale(1.05)`) on hover.
    - Cards should lift (`transform: translateY(-5px)`) and cast deeper shadows.

## 3. Component Architecture
- **Layout**: `Navbar` (Sticky/Floating), `Footer` (Rich content), `Layout` wrapper.
- **Hero**: Always include a `HeroSection` that is distinct per page.
    - Must have: Title, Subtitle, CTA.
    - Background: Image, Video, or 3D Element.
- **Cards**: Reusable `Card` component for consistent elevation and hover states.

## 4. Animation Guidelines (Framer Motion)
- **Entrance**: Use `initial={{ opacity: 0, y: 20 }}` and `animate={{ opacity: 1, y: 0 }}` with `transition={{ duration: 0.6 }}`.
- **Stagger**: Use `variants` to stagger children lists.
- **Scroll**: Use `whileInView` for scroll-triggered reveals.

## 5. Development Workflow
1.  **Setup**: `npm create vite@latest .`
2.  **Clean**: Remove default Vite CSS. Reset strict mode if interferes with animations.
3.  **Variables**: Define colors in `index.css`.
    ```css
    :root {
        --primary: #0A2342;
        --accent: #00A8E8;
        --bg: #F5F7FA;
        --text: #333;
    }
    ```
4.  **Scaffold**: Create `src/components` and `src/pages`.

## 6. Verification
- **Lighthouse**: Target >90 Performance and Accessibility.
- **Mobile**: Test on mobile viewports for stacked grids vs desktop flexible grids.

## 7. Contact & Forms
- **Layout**: Split screen design for Contact pages (Info Sidebar + Form).
- **Styling**: 
    - Use floating labels or inside-input icons for a modern look.
    - Forms should be enclosed in a glassmorphism container (`backdrop-filter`) to stand out from background.
- **Feedback**: 
    - Interactive submit buttons (scale on hover/tap).
    - Clear success/error states (toast notifications).
- **Info Cards**: Use icons + text pairings for contact details to improve scanability.
