# Accessibility Checker

A skill that audits and improves web accessibility (a11y) to ensure the portfolio website is usable by everyone, including people with disabilities.

## Trigger Phrases

This skill activates when the user wants to check or improve accessibility:
- "check accessibility"
- "audit a11y"
- "fix accessibility issues"
- "make it accessible"
- "accessibility audit"
- "check WCAG compliance"

## Instructions

When this skill is invoked, perform a comprehensive accessibility audit covering these key areas:

### Step 1: Review the File to Audit

If the user specifies a file, read it first. Otherwise, ask which file or component needs to be audited.

### Step 2: Color Contrast Audit (WCAG)

Check that all text meets WCAG color contrast requirements:

#### WCAG Standards
- **WCAG AA (Minimum)**:
  - Normal text (< 18pt): 4.5:1 contrast ratio
  - Large text (≥ 18pt or ≥ 14pt bold): 3:1 contrast ratio
  - UI components and graphics: 3:1 contrast ratio

- **WCAG AAA (Enhanced)**:
  - Normal text: 7:1 contrast ratio
  - Large text: 4.5:1 contrast ratio

#### What to Check

1. **Text on backgrounds**: Body text, headings, links, buttons
2. **Interactive elements**: Button text, form labels, input text
3. **Dark mode**: Ensure dark theme also meets contrast standards
4. **Disabled states**: Even disabled elements should be distinguishable
5. **Icons and graphics**: Non-decorative icons need sufficient contrast

#### Common Issues

```css
/* ❌ BAD - Insufficient contrast */
.text {
  color: #999999; /* Light gray */
  background: #ffffff; /* White - only 2.8:1 contrast */
}

/* ✅ GOOD - Meets WCAG AA */
.text {
  color: #525252; /* Dark gray */
  background: #ffffff; /* White - 7.5:1 contrast */
}

/* ❌ BAD - Primary color might not have enough contrast */
.button {
  color: #ffffff;
  background: #4d94ff; /* Only 3.1:1 with white text */
}

/* ✅ GOOD - Use darker primary for better contrast */
.button {
  color: #ffffff;
  background: var(--color-primary-600); /* Better contrast */
}
```

#### Color Contrast Fixes

Provide specific fixes for any contrast issues:

1. **Darken light text** or **lighten dark backgrounds**
2. **Use design system colors** that meet standards
3. **Test in both light and dark modes**
4. **Add text shadows** for text over images (use with caution)
5. **Avoid pure gray (#808080)** - use darker or lighter shades

### Step 3: Keyboard Navigation Audit

Ensure all interactive elements are keyboard accessible:

#### What to Check

1. **Tab order**: Logical flow through interactive elements
2. **Focus indicators**: Visible focus states on all interactive elements
3. **Skip links**: "Skip to main content" link for navigation bypass
4. **Trapped focus**: Modals/dialogs trap and restore focus properly
5. **No keyboard traps**: Users can navigate away from all elements
6. **Keyboard shortcuts**: All mouse actions have keyboard equivalents

#### Common Issues

```html
<!-- ❌ BAD - div used as button, not keyboard accessible -->
<div onclick="handleClick()">Click me</div>

<!-- ✅ GOOD - Semantic button, keyboard accessible -->
<button onclick="handleClick()">Click me</button>

<!-- ❌ BAD - No visible focus state -->
<style>
  button:focus {
    outline: none; /* Never do this! */
  }
</style>

<!-- ✅ GOOD - Clear focus indicator -->
<style>
  button:focus {
    outline: 2px solid var(--color-primary-500);
    outline-offset: 2px;
  }
</style>

<!-- ❌ BAD - Missing skip link -->
<body>
  <nav>...</nav>
  <main>...</main>
</body>

<!-- ✅ GOOD - Skip link included -->
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <nav>...</nav>
  <main id="main-content">...</main>
</body>
```

#### Keyboard Navigation Fixes

1. **Add skip links** for bypassing navigation
2. **Ensure visible focus states** with proper outline or border
3. **Use semantic HTML** (`<button>`, `<a>`, `<input>`, etc.)
4. **Test tab order** - should be logical and sequential
5. **Handle modal focus** - trap focus within modals, restore on close
6. **Add keyboard event handlers** where needed

```javascript
// ✅ GOOD - Handle both click and keyboard events
button.addEventListener('click', handleAction);
button.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleAction();
  }
});
```

#### Skip Link Implementation

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: var(--space-2) var(--space-4);
  text-decoration: none;
  border-radius: 0 0 4px 0;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
</style>
```

### Step 4: ARIA Labels & Semantic HTML Audit

Check for proper ARIA attributes and semantic markup:

#### What to Check

1. **Semantic HTML**: Using proper HTML5 elements
2. **ARIA labels**: Buttons, links, and icons have descriptive labels
3. **ARIA roles**: Correct roles for custom widgets
4. **ARIA states**: `aria-expanded`, `aria-hidden`, `aria-current`, etc.
5. **Landmark regions**: Main, navigation, complementary, contentinfo
6. **Heading hierarchy**: Proper H1 → H2 → H3 structure
7. **Form labels**: All inputs have associated labels

#### Common Issues

```html
<!-- ❌ BAD - Generic div without semantic meaning -->
<div class="navigation">
  <div class="link">Home</div>
</div>

<!-- ✅ GOOD - Semantic HTML with proper roles -->
<nav role="navigation" aria-label="Main navigation">
  <a href="#home">Home</a>
</nav>

<!-- ❌ BAD - Icon button without label -->
<button class="theme-toggle">
  🌙
</button>

<!-- ✅ GOOD - Icon button with aria-label -->
<button class="theme-toggle" aria-label="Toggle dark mode">
  <span aria-hidden="true">🌙</span>
</button>

<!-- ❌ BAD - Improper heading hierarchy -->
<h1>Page Title</h1>
<h3>Section Title</h3> <!-- Skipped H2! -->

<!-- ✅ GOOD - Proper heading hierarchy -->
<h1>Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- ❌ BAD - Input without label -->
<input type="email" placeholder="Email">

<!-- ✅ GOOD - Input with proper label -->
<label for="email">Email Address</label>
<input type="email" id="email" placeholder="you@example.com">

<!-- ❌ BAD - Decorative image with alt text -->
<img src="decorative-pattern.svg" alt="Decorative pattern">

<!-- ✅ GOOD - Decorative image with empty alt -->
<img src="decorative-pattern.svg" alt="">
<!-- OR use aria-hidden for purely decorative images -->
<img src="decorative-pattern.svg" aria-hidden="true" alt="">
```

#### ARIA Best Practices

1. **Use semantic HTML first**: Don't use ARIA if HTML element exists
2. **Don't override semantics**: `<button role="heading">` is wrong
3. **Required attributes**: Some ARIA roles require specific attributes
4. **Dynamic content**: Update ARIA states when content changes
5. **Landmark labels**: Give unique labels to multiple landmarks

```html
<!-- ✅ GOOD - Proper landmark structure -->
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">...</nav>
</header>

<main role="main" id="main-content">
  <section aria-labelledby="projects-title">
    <h2 id="projects-title">Projects</h2>
    ...
  </section>
</main>

<aside role="complementary" aria-label="Related links">...</aside>

<footer role="contentinfo">...</footer>
```

#### Form Accessibility

```html
<!-- ✅ GOOD - Accessible form with all necessary attributes -->
<form>
  <div class="form-group">
    <label for="name">
      Name <span aria-label="required">*</span>
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      aria-required="true"
      aria-describedby="name-hint"
    >
    <span id="name-hint" class="form-hint">Enter your full name</span>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      aria-describedby="email-error"
      aria-invalid="false"
    >
    <span id="email-error" class="error" role="alert"></span>
  </div>

  <fieldset>
    <legend>Preferred Contact Method</legend>
    <label>
      <input type="radio" name="contact" value="email"> Email
    </label>
    <label>
      <input type="radio" name="contact" value="phone"> Phone
    </label>
  </fieldset>

  <button type="submit">Send Message</button>
</form>
```

### Step 5: Screen Reader Support Audit

Ensure the site works well with screen readers:

#### What to Check

1. **Alt text**: All images have descriptive alt text (or empty for decorative)
2. **Link text**: Links have descriptive text (not "click here")
3. **Button labels**: Buttons describe their action
4. **Form labels**: All inputs have associated labels
5. **Reading order**: Content flows logically in DOM order
6. **Hidden content**: Use `aria-hidden` for decorative elements
7. **Live regions**: Use `aria-live` for dynamic content
8. **Language**: HTML `lang` attribute is set

#### Common Issues

```html
<!-- ❌ BAD - Non-descriptive link text -->
<a href="/project1">Click here</a>

<!-- ✅ GOOD - Descriptive link text -->
<a href="/project1">View E-commerce Platform project</a>

<!-- ❌ BAD - Image without alt text -->
<img src="project-screenshot.jpg">

<!-- ✅ GOOD - Descriptive alt text -->
<img src="project-screenshot.jpg" alt="E-commerce platform homepage showing product grid and navigation">

<!-- ❌ BAD - Icon used for meaning without label -->
<button>
  <svg>...</svg>
</button>

<!-- ✅ GOOD - Icon with descriptive label -->
<button aria-label="Open menu">
  <svg aria-hidden="true">...</svg>
</button>

<!-- ❌ BAD - No language attribute -->
<html>

<!-- ✅ GOOD - Language specified -->
<html lang="en">

<!-- ❌ BAD - Dynamic content without announcement -->
<div id="notifications"></div>

<!-- ✅ GOOD - Dynamic content with live region -->
<div id="notifications" role="status" aria-live="polite" aria-atomic="true"></div>
```

#### Screen Reader Best Practices

1. **Meaningful alt text**: Describe what the image conveys, not what it is
2. **Empty alt for decorative**: Use `alt=""` for purely decorative images
3. **Descriptive links**: Link text should make sense out of context
4. **Button vs link**: Use `<button>` for actions, `<a>` for navigation
5. **Form feedback**: Announce errors and success messages
6. **Loading states**: Announce when content is loading
7. **Reading order**: Ensure visual order matches DOM order

```javascript
// ✅ GOOD - Announce dynamic content to screen readers
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.setAttribute('role', 'status');
  notification.setAttribute('aria-live', 'polite');
}

// ✅ GOOD - Announce form errors
function showError(inputId, errorMessage) {
  const input = document.getElementById(inputId);
  const errorSpan = document.getElementById(`${inputId}-error`);

  input.setAttribute('aria-invalid', 'true');
  errorSpan.textContent = errorMessage;
  errorSpan.setAttribute('role', 'alert');

  // Focus the input for keyboard users
  input.focus();
}
```

### Step 6: Generate Accessibility Report

After auditing, provide a structured report:

#### Report Format

```
## Accessibility Audit Report

### Summary
- Issues found: [number]
- WCAG Level: [AA/AAA]
- Severity: [Critical/High/Medium/Low]

### Color Contrast Issues
1. [Component] - [Issue description]
   - Current: [current values]
   - Fix: [recommended fix]

### Keyboard Navigation Issues
1. [Component] - [Issue description]
   - Fix: [recommended fix]

### ARIA & Semantic HTML Issues
1. [Component] - [Issue description]
   - Fix: [recommended fix]

### Screen Reader Issues
1. [Component] - [Issue description]
   - Fix: [recommended fix]

### Recommended Actions
1. [Priority 1 - Critical fixes]
2. [Priority 2 - Important fixes]
3. [Priority 3 - Nice-to-have improvements]
```

### Step 7: Provide Fixes

For each issue found, provide the specific code fixes:

1. **Show the current problematic code**
2. **Explain why it's an issue**
3. **Provide the corrected code**
4. **Explain the improvement**

## Accessibility Checklist

Use this comprehensive checklist for audits:

### Structure & Semantics
- [ ] Valid, semantic HTML5
- [ ] Proper heading hierarchy (H1 → H2 → H3, no skips)
- [ ] Only one H1 per page
- [ ] Landmark regions used (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] Unique landmark labels if multiple of same type
- [ ] Language attribute set (`<html lang="en">`)
- [ ] Page has a descriptive title

### Color & Contrast
- [ ] Text contrast meets WCAG AA (4.5:1 for normal, 3:1 for large)
- [ ] Interactive element contrast meets WCAG AA (3:1)
- [ ] Dark mode colors also meet contrast standards
- [ ] Color is not the only means of conveying information
- [ ] Link text is distinguishable from surrounding text

### Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical and sequential
- [ ] Focus indicators are clearly visible
- [ ] Skip to main content link provided
- [ ] No keyboard traps
- [ ] Modal focus is properly managed (trapped and restored)
- [ ] Dropdowns and menus are keyboard accessible
- [ ] Custom widgets have proper keyboard support

### Images & Media
- [ ] All images have alt text (or alt="" for decorative)
- [ ] Alt text is descriptive and meaningful
- [ ] Decorative images use alt="" or aria-hidden="true"
- [ ] Icons have labels or are marked as decorative
- [ ] Complex images have longer descriptions
- [ ] Image-based links/buttons have descriptive alt text

### Forms
- [ ] All inputs have associated labels
- [ ] Labels use `<label>` element with `for` attribute
- [ ] Required fields are marked (visually and with aria-required)
- [ ] Error messages are associated with inputs (aria-describedby)
- [ ] Error messages use role="alert"
- [ ] Fieldsets and legends used for grouped inputs
- [ ] Placeholder text is not used as the only label
- [ ] Form validation is accessible

### Links & Buttons
- [ ] Link text is descriptive (not "click here")
- [ ] Links and buttons are distinguishable
- [ ] Icon buttons have aria-label
- [ ] Links that open new windows are indicated
- [ ] External links are indicated (visually or with aria-label)
- [ ] Current page is indicated in navigation (aria-current)

### ARIA
- [ ] ARIA used appropriately (HTML semantics preferred)
- [ ] ARIA roles are correct
- [ ] Required ARIA attributes are present
- [ ] ARIA states updated when content changes
- [ ] `aria-label` or `aria-labelledby` used appropriately
- [ ] `aria-describedby` used for additional context
- [ ] `aria-hidden` used for decorative content
- [ ] `aria-live` used for dynamic content

### Dynamic Content
- [ ] Loading states are announced
- [ ] Error messages are announced (role="alert")
- [ ] Success messages are announced
- [ ] Content changes are announced (aria-live)
- [ ] Dynamically added content is accessible

### Responsive & Mobile
- [ ] Text can be resized to 200% without loss of content
- [ ] Site works in landscape and portrait orientations
- [ ] No horizontal scrolling at 320px width
- [ ] Touch targets are at least 44x44px
- [ ] Mobile menu is keyboard accessible

## Testing Tools

Recommend using these tools for accessibility testing:

### Automated Testing
1. **Lighthouse (Chrome DevTools)**: Built-in accessibility audit
2. **axe DevTools**: Browser extension for accessibility testing
3. **WAVE**: Web accessibility evaluation tool
4. **Pa11y**: Command-line accessibility testing
5. **HTML Validator**: Check for valid HTML

### Manual Testing
1. **Keyboard navigation**: Tab through entire page
2. **Screen reader**: Test with NVDA (Windows), JAWS (Windows), or VoiceOver (Mac/iOS)
3. **Zoom**: Test at 200% zoom
4. **Color contrast**: Use Color Contrast Analyzer tool
5. **Mobile testing**: Test on actual devices

### Contrast Checkers
1. **WebAIM Contrast Checker**: https://webaim.org/resources/contrastchecker/
2. **Contrast Ratio**: https://contrast-ratio.com/
3. **Color Contrast Analyzer**: Desktop app

## Common Accessibility Patterns

### Accessible Modal

```html
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal-overlay"></div>
  <div class="modal-content">
    <h2 id="modal-title">Modal Title</h2>
    <button class="modal-close" aria-label="Close modal">×</button>
    <p>Modal content...</p>
    <button>Confirm</button>
    <button>Cancel</button>
  </div>
</div>

<script>
// Trap focus within modal
function trapFocus(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }

    if (e.key === 'Escape') {
      closeModal();
    }
  });
}
</script>
```

### Accessible Dropdown Menu

```html
<nav>
  <button
    aria-expanded="false"
    aria-controls="dropdown-menu"
    aria-haspopup="true"
  >
    Menu
  </button>
  <ul id="dropdown-menu" role="menu" hidden>
    <li role="none">
      <a href="#" role="menuitem">Item 1</a>
    </li>
    <li role="none">
      <a href="#" role="menuitem">Item 2</a>
    </li>
  </ul>
</nav>

<script>
button.addEventListener('click', () => {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isExpanded);
  menu.hidden = isExpanded;
});
</script>
```

### Accessible Tabs

```html
<div class="tabs">
  <div role="tablist" aria-label="Project categories">
    <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1">
      All
    </button>
    <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" tabindex="-1">
      Web Apps
    </button>
    <button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" tabindex="-1">
      Mobile
    </button>
  </div>

  <div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
    Content for All...
  </div>
  <div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>
    Content for Web Apps...
  </div>
  <div role="tabpanel" id="panel-3" aria-labelledby="tab-3" hidden>
    Content for Mobile...
  </div>
</div>
```

## Notes

- Accessibility is not optional - it's a legal requirement in many countries
- Good accessibility improves usability for everyone
- Test with real screen readers, not just automated tools
- Involve people with disabilities in testing when possible
- Accessibility should be considered from the start, not added at the end
- WCAG AA is the standard most organizations aim for
- Keep up with WCAG updates and best practices
- Document accessibility features and testing procedures
