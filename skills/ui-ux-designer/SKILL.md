# UI/UX Designer

A skill that helps design beautiful, accessible UI components following the established design system.

## Trigger Phrases

This skill activates when the user wants to design UI components:
- "design a component"
- "create a button/card/form"
- "make this look better"
- "design UI for"
- "help me design"
- "build a UI component"

## Instructions

When this skill is invoked, follow these steps to create beautiful, accessible UI components:

### Step 1: Understand the Component Requirements

Ask the user (if not already specified):

1. **Component type**: What UI element needs to be designed? (button, card, form, navigation, modal, etc.)
2. **Purpose**: What is the component's function?
3. **Content**: What content will it display?
4. **Variant**: Primary, secondary, or custom styling?
5. **Interactivity**: Does it need hover states, animations, or transitions?

### Step 2: Reference the Design System

Always reference the design system from CLAUDE.md:

#### Color Palette
- **Primary (Blue)**: Use `--color-primary-500` for main actions and links
- **Secondary (Purple)**: Use `--color-secondary-500` for accents and secondary actions
- **Neutrals**: Use `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`
- **Status Colors**: Use `--color-success`, `--color-error`, `--color-warning`, `--color-info` for feedback

#### Spacing Scale (8px base unit)
- **Component padding**: `--space-2` to `--space-4` (8-16px)
- **Element spacing**: `--space-4` to `--space-6` (16-32px)
- **Section spacing**: `--space-8` to `--space-12` (48-128px)

#### Typography
- **Headings**: Use `--text-xl` to `--text-5xl` with `--font-semibold` or `--font-bold`
- **Body text**: Use `--text-base` to `--text-lg` with `--font-normal`
- **Small text**: Use `--text-sm` or `--text-xs`
- **Line heights**: Use `--leading-normal` for body, `--leading-tight` for headings

### Step 3: Design with Accessibility in Mind

Ensure all components meet accessibility standards:

1. **Color Contrast**: Maintain WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
2. **Keyboard Navigation**: Include `:focus` states with visible focus indicators
3. **ARIA Labels**: Add appropriate `aria-label`, `aria-labelledby`, or `aria-describedby`
4. **Semantic HTML**: Use proper HTML elements (`<button>`, `<nav>`, `<form>`, etc.)
5. **Focus Management**: Ensure logical tab order
6. **Screen Readers**: Include descriptive text for icons and interactive elements

### Step 4: Generate HTML Structure

Create semantic, clean HTML:

```html
<!-- Use semantic elements -->
<!-- Include ARIA labels where appropriate -->
<!-- Structure content logically -->
<!-- Add meaningful class names (BEM convention preferred) -->
```

### Step 5: Generate CSS Styles

Create styles using the design system:

```css
/* Use CSS custom properties */
/* Follow the spacing scale */
/* Add smooth transitions */
/* Include hover/focus/active states */
/* Support dark mode with [data-theme="dark"] */
```

### Step 6: Add Interactivity (if needed)

If the component requires JavaScript:

```javascript
// Use vanilla JavaScript
// Add event listeners
// Handle state changes
// Store preferences in localStorage if needed
```

## Component Templates

### Button Component

```html
<button class="btn btn-primary">
  Click Me
</button>
```

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

.btn:focus {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}

.btn-primary {
  background: var(--color-primary-500);
  color: white;
}

.btn-primary:hover {
  background: var(--color-primary-600);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}
```

### Card Component

```html
<article class="card">
  <img src="image.jpg" alt="Descriptive alt text" class="card-image">
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Card description text goes here.</p>
    <div class="card-tags">
      <span class="badge">Tag 1</span>
      <span class="badge">Tag 2</span>
    </div>
  </div>
</article>
```

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: var(--space-5);
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
  margin-bottom: var(--space-4);
}

.card-tags {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}
```

### Form Input Component

```html
<div class="form-group">
  <label for="email" class="form-label">Email Address</label>
  <input
    type="email"
    id="email"
    class="form-input"
    placeholder="you@example.com"
    aria-describedby="email-hint"
    required
  >
  <span id="email-hint" class="form-hint">We'll never share your email.</span>
</div>
```

```css
.form-group {
  margin-bottom: var(--space-5);
}

.form-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.form-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--text-base);
  background: var(--bg-primary);
  border: 2px solid var(--border-color);
  border-radius: 0.5rem;
  color: var(--text-primary);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.form-input::placeholder {
  color: var(--text-tertiary);
}

.form-hint {
  display: block;
  font-size: var(--text-xs);
  color: var(--text-tertiary);
  margin-top: var(--space-2);
}
```

### Navigation Component

```html
<nav class="nav" role="navigation" aria-label="Main navigation">
  <a href="#home" class="nav-link">Home</a>
  <a href="#projects" class="nav-link">Projects</a>
  <a href="#about" class="nav-link">About</a>
  <a href="#contact" class="nav-link">Contact</a>
  <button class="theme-toggle" aria-label="Toggle dark mode">
    <span class="icon">🌙</span>
  </button>
</nav>
```

```css
.nav {
  display: flex;
  gap: var(--space-6);
  align-items: center;
  padding: var(--space-4) var(--space-6);
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

.nav-link:focus {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 4px;
  border-radius: 4px;
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

.theme-toggle {
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  transform: scale(1.1);
  border-color: var(--color-primary-500);
}
```

### Modal Component

```html
<div class="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <button class="modal-close" aria-label="Close modal">
      &times;
    </button>
    <h2 id="modal-title" class="modal-title">Modal Title</h2>
    <p class="modal-body">Modal content goes here.</p>
    <div class="modal-actions">
      <button class="btn btn-primary">Confirm</button>
      <button class="btn btn-outline">Cancel</button>
    </div>
  </div>
</div>
```

```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.modal.active {
  opacity: 1;
  pointer-events: auto;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background: var(--bg-primary);
  border-radius: 1rem;
  padding: var(--space-6);
  max-width: 500px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.modal.active .modal-content {
  transform: scale(1);
}

.modal-close {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  background: none;
  border: none;
  font-size: var(--text-2xl);
  color: var(--text-secondary);
  cursor: pointer;
  line-height: 1;
}

.modal-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-4);
  color: var(--text-primary);
}

.modal-actions {
  display: flex;
  gap: var(--space-3);
  justify-content: flex-end;
  margin-top: var(--space-6);
}
```

## Best Practices

### Design
- **Consistency**: Always use the design system colors, spacing, and typography
- **Whitespace**: Use generous spacing for a clean, modern look
- **Hierarchy**: Create clear visual hierarchy with size, weight, and color
- **Responsive**: Design mobile-first, then enhance for larger screens
- **Dark Mode**: Test all components in both light and dark themes

### Accessibility
- **Contrast**: Ensure text contrast meets WCAG AA (4.5:1 minimum)
- **Focus States**: Always include visible focus indicators
- **Keyboard Nav**: Make all interactive elements keyboard accessible
- **ARIA**: Use ARIA labels for icon buttons and complex widgets
- **Semantic HTML**: Use proper HTML5 elements

### Performance
- **CSS Variables**: Use custom properties for themeable values
- **Transitions**: Keep animations under 300ms for snappiness
- **Images**: Optimize and use appropriate sizes
- **Reusability**: Create modular, reusable components

### Code Quality
- **BEM Naming**: Use Block Element Modifier convention (e.g., `.card__title--large`)
- **Mobile First**: Write base styles for mobile, then use `min-width` media queries
- **Comments**: Add comments for complex CSS or non-obvious decisions
- **Organization**: Group related styles together

## Responsive Breakpoints

Use these breakpoints for responsive design:

```css
/* Mobile: default styles */

/* Tablet */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Large desktop styles */
}
```

## Animation Patterns

### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}
```

### Slide Up
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.4s ease-out;
}
```

### Scale In
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.scale-in {
  animation: scaleIn 0.3s ease-out;
}
```

## Notes

- Always read CLAUDE.md before designing to reference the current design system
- Test components in both light and dark modes
- Validate HTML and check accessibility with tools like axe DevTools
- Keep components modular and reusable
- Use semantic HTML5 elements for better SEO and accessibility
- Include smooth transitions for interactive states
- Optimize for performance (minimize repaints/reflows)
- Follow the minimal, modern aesthetic of the portfolio
- Use vanilla JavaScript for any interactivity (no frameworks)
