# Portfolio Website

A modern, minimal portfolio website built with vanilla web technologies to showcase web development projects.

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **JavaScript**: Vanilla JS (no frameworks)
- **Design**: Modern, minimal aesthetic with dark mode support

## Project Purpose

This portfolio website serves as a showcase for web development projects, demonstrating:
- Clean, semantic HTML structure
- Modern CSS techniques and responsive design
- Interactive features with vanilla JavaScript
- Accessibility best practices
- Performance optimization

## Current Goals

1. **Build responsive navigation** - Create a mobile-friendly nav with hamburger menu and smooth scrolling
2. **Create animated hero section** - Design an eye-catching hero with animations and call-to-action
3. **Add projects grid** - Build a responsive grid to showcase portfolio projects
4. **Build contact form** - Implement a functional contact form with validation
5. **Implement dark mode** - Add theme toggle with localStorage persistence

## Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   ├── styles.css      # Main styles
│   ├── theme.css       # Theme variables (light/dark mode)
│   └── responsive.css  # Media queries
├── js/
│   ├── main.js         # Main JavaScript
│   ├── theme.js        # Dark mode toggle
│   └── projects.js     # Project data and rendering
├── assets/
│   ├── images/         # Project screenshots, profile image
│   └── icons/          # SVG icons
└── CLAUDE.md          # This file
```

## Key Features

### Core Functionality
- Responsive layout that works on all device sizes
- Dark/light mode toggle with user preference persistence
- Smooth scrolling navigation
- Project showcase with filtering/categorization
- Contact form or contact information section

### Design Principles
- **Minimal**: Clean layout, plenty of whitespace, focused content
- **Modern**: Contemporary design patterns, subtle animations
- **Accessible**: Semantic HTML, keyboard navigation, ARIA labels
- **Performant**: Optimized assets, minimal dependencies

## Development Guidelines

### HTML
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Include proper meta tags for SEO and social sharing
- Ensure accessibility with ARIA labels where needed
- Keep structure clean and readable

### CSS
- Use CSS custom properties for theme values (colors, spacing, typography)
- Mobile-first responsive design approach
- BEM or similar naming convention for classes
- Organize styles logically (base → layout → components → utilities)
- Smooth transitions for interactive elements
- Support both light and dark themes

### JavaScript
- Write clean, modular vanilla JavaScript
- Use ES6+ features (const/let, arrow functions, template literals, etc.)
- Store theme preference in localStorage
- Add smooth scrolling and intersection observers for animations
- Keep code organized in separate files by functionality
- Comment complex logic

## Theme Implementation

### CSS Variables (example structure)
```css
:root {
  /* Light mode (default) */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --accent: #0066cc;
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2a2a2a;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --accent: #4d94ff;
}
```

## Design System

### Color Palette

#### Primary Colors (Blue)
```css
:root {
  /* Light Mode */
  --color-primary-50: #e6f2ff;
  --color-primary-100: #baddff;
  --color-primary-200: #8dc8ff;
  --color-primary-300: #5bb3ff;
  --color-primary-400: #2e9eff;
  --color-primary-500: #0066cc;  /* Main primary */
  --color-primary-600: #0052a3;
  --color-primary-700: #003d7a;
  --color-primary-800: #002952;
  --color-primary-900: #001529;
}

[data-theme="dark"] {
  /* Dark Mode - adjust for better visibility */
  --color-primary-50: #001529;
  --color-primary-100: #002952;
  --color-primary-200: #003d7a;
  --color-primary-300: #0052a3;
  --color-primary-400: #0066cc;
  --color-primary-500: #4d94ff;  /* Main primary for dark */
  --color-primary-600: #70a9ff;
  --color-primary-700: #94bfff;
  --color-primary-800: #b8d4ff;
  --color-primary-900: #dceaff;
}
```

#### Secondary Colors (Purple)
```css
:root {
  /* Light Mode */
  --color-secondary-50: #f3e8ff;
  --color-secondary-100: #dfc2ff;
  --color-secondary-200: #cb9bff;
  --color-secondary-300: #b775ff;
  --color-secondary-400: #a34eff;
  --color-secondary-500: #8b28ff;  /* Main secondary */
  --color-secondary-600: #7020cc;
  --color-secondary-700: #541899;
  --color-secondary-800: #391066;
  --color-secondary-900: #1d0833;
}

[data-theme="dark"] {
  /* Dark Mode */
  --color-secondary-50: #1d0833;
  --color-secondary-100: #391066;
  --color-secondary-200: #541899;
  --color-secondary-300: #7020cc;
  --color-secondary-400: #8b28ff;
  --color-secondary-500: #a366ff;  /* Main secondary for dark */
  --color-secondary-600: #b585ff;
  --color-secondary-700: #c7a3ff;
  --color-secondary-800: #d9c2ff;
  --color-secondary-900: #ebe0ff;
}
```

#### Neutral Colors
```css
:root {
  /* Light Mode */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;

  /* Semantic colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #171717;
  --text-secondary: #525252;
  --text-tertiary: #737373;
  --border-color: #e5e5e5;
}

[data-theme="dark"] {
  --color-neutral-50: #171717;
  --color-neutral-100: #262626;
  --color-neutral-200: #404040;
  --color-neutral-300: #525252;
  --color-neutral-400: #737373;
  --color-neutral-500: #a3a3a3;
  --color-neutral-600: #d4d4d4;
  --color-neutral-700: #e5e5e5;
  --color-neutral-800: #f5f5f5;
  --color-neutral-900: #fafafa;

  /* Semantic colors */
  --bg-primary: #0a0a0a;
  --bg-secondary: #171717;
  --text-primary: #fafafa;
  --text-secondary: #d4d4d4;
  --text-tertiary: #a3a3a3;
  --border-color: #404040;
}
```

#### Accent & Status Colors
```css
:root {
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;
}

[data-theme="dark"] {
  --color-success: #34d399;
  --color-warning: #fbbf24;
  --color-error: #f87171;
  --color-info: #60a5fa;
}
```

### Spacing Scale

Based on 8px unit system for consistent rhythm:

```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px - base unit */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-7: 2.5rem;   /* 40px */
  --space-8: 3rem;     /* 48px */
  --space-9: 4rem;     /* 64px */
  --space-10: 5rem;    /* 80px */
  --space-11: 6rem;    /* 96px */
  --space-12: 8rem;    /* 128px */
}
```

**Usage Guidelines:**
- Use `--space-2` to `--space-4` for component padding
- Use `--space-4` to `--space-6` for spacing between elements
- Use `--space-8` to `--space-12` for section spacing
- Always use multiples of 8px for visual consistency

### Typography Scale

```css
:root {
  /* Font Families */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;

  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */

  /* Font Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

**Typography Hierarchy:**
- **H1**: `--text-5xl` to `--text-6xl`, `--font-bold`, `--leading-tight`
- **H2**: `--text-3xl` to `--text-4xl`, `--font-bold`, `--leading-tight`
- **H3**: `--text-2xl` to `--text-3xl`, `--font-semibold`, `--leading-snug`
- **H4**: `--text-xl`, `--font-semibold`, `--leading-snug`
- **Body**: `--text-base` to `--text-lg`, `--font-normal`, `--leading-normal`
- **Small**: `--text-sm`, `--font-normal`, `--leading-normal`
- **Caption**: `--text-xs`, `--font-normal`, `--leading-normal`

### Component Patterns

#### Buttons

```css
.btn {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-primary-500);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-600);
  transform: translateY(-1px);
}

.btn-secondary {
  background: var(--color-secondary-500);
  color: white;
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--color-primary-500);
  color: var(--color-primary-500);
}
```

#### Cards

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  padding: var(--space-6);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-3);
  color: var(--text-primary);
}

.card-description {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}
```

#### Badges/Tags

```css
.badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  border-radius: 9999px;
  background: var(--color-primary-100);
  color: var(--color-primary-700);
}

[data-theme="dark"] .badge {
  background: var(--color-primary-900);
  color: var(--color-primary-300);
}
```

#### Navigation

```css
.nav {
  display: flex;
  gap: var(--space-6);
  align-items: center;
}

.nav-link {
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary-500);
  transition: width 0.2s ease;
}

.nav-link:hover::after {
  width: 100%;
}
```

#### Input Fields

```css
.input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 0.5rem;
  color: var(--text-primary);
  transition: border-color 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary-500);
}

.input::placeholder {
  color: var(--text-tertiary);
}
```

#### Sections

```css
.section {
  padding: var(--space-10) 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.section-title {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-8);
  text-align: center;
  color: var(--text-primary);
}
```

#### Animations

```css
/* Fade in on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Smooth transitions */
.transition-all {
  transition: all 0.2s ease;
}

.transition-colors {
  transition: background-color 0.2s ease, color 0.2s ease;
}
```

## Best Practices

1. **Performance**
   - Optimize images (use WebP where supported)
   - Minify CSS/JS for production
   - Lazy load images below the fold
   - Use efficient selectors

2. **Accessibility**
   - Maintain color contrast ratios (WCAG AA minimum)
   - Include focus states for keyboard navigation
   - Add alt text to all images
   - Test with screen readers

3. **Code Quality**
   - Keep functions small and focused
   - Use meaningful variable and function names
   - Comment non-obvious code
   - Maintain consistent formatting

4. **Browser Support**
   - Test in modern browsers (Chrome, Firefox, Safari, Edge)
   - Use fallbacks for CSS Grid if supporting older browsers
   - Consider progressive enhancement

## Common Tasks

### Adding a new project
- Add project data to `js/projects.js`
- Include: title, description, technologies, image, links (demo/repo)

### Modifying theme colors
- Update CSS custom properties in `css/theme.css`
- Ensure contrast ratios remain accessible

### Adding new sections
- Use semantic HTML structure
- Add corresponding styles in `css/styles.css`
- Update navigation if needed

## Notes for AI Assistants

- Prioritize vanilla JavaScript solutions over external libraries
- Maintain the minimal, modern aesthetic in all additions
- Ensure dark mode support for any new UI elements
- Keep accessibility in mind for all interactive features
- Follow the established file structure and naming conventions
