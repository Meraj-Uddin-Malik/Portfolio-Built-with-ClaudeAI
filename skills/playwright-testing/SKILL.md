# Playwright Testing

A skill that uses the browsing-with-playwright skill to visually test the portfolio website, take screenshots, check responsive design, and verify UI across different devices and viewports.

## Trigger Phrases

This skill activates when the user wants to test the website visually:
- "test the website"
- "take screenshots"
- "check responsive design"
- "test on mobile/desktop"
- "test responsive layout"
- "visual regression test"
- "check UI on different devices"

## Instructions

When this skill is invoked, use the browsing-with-playwright skill to perform visual testing:

### Step 1: Determine Test Scope

Ask the user (if not already specified):

1. **URL to test**: Local file path (file:///...) or deployed URL
2. **Test type**:
   - Full site test (all pages/sections)
   - Specific component test
   - Responsive design test
   - Screenshot capture only
3. **Viewports**: Which devices to test (mobile, tablet, desktop, all)
4. **What to verify**: Layout, colors, typography, spacing, dark mode, etc.

### Step 2: Set Up Common Viewports

Use these standard viewport sizes for responsive testing:

#### Mobile Devices
- **iPhone SE**: 375x667 (small mobile)
- **iPhone 12/13**: 390x844 (standard mobile)
- **iPhone 14 Pro Max**: 430x932 (large mobile)
- **Samsung Galaxy S21**: 360x800 (Android mobile)
- **Mobile (generic)**: 375x667

#### Tablets
- **iPad Mini**: 768x1024 (small tablet)
- **iPad Air**: 820x1180 (standard tablet)
- **iPad Pro**: 1024x1366 (large tablet)
- **Tablet (generic)**: 768x1024

#### Desktop
- **Laptop**: 1366x768 (small desktop)
- **Desktop**: 1920x1080 (standard desktop)
- **Large Desktop**: 2560x1440 (large desktop)
- **Ultra-wide**: 3440x1440 (ultra-wide monitor)

### Step 3: Test Checklist

For comprehensive visual testing, check these aspects:

#### Layout & Structure
- [ ] Header/navigation displays correctly
- [ ] Hero section is properly positioned
- [ ] Content sections have proper spacing
- [ ] Project grid aligns correctly
- [ ] Footer is positioned at bottom
- [ ] No content overflow or horizontal scrolling
- [ ] Elements don't overlap

#### Responsive Design
- [ ] Mobile: Stacked layout, hamburger menu
- [ ] Tablet: Adjusted grid, optimized spacing
- [ ] Desktop: Full layout with proper margins
- [ ] Text is readable at all viewport sizes
- [ ] Images scale appropriately
- [ ] Touch targets are 44x44px minimum on mobile
- [ ] No text cut-off or truncation

#### Colors & Theme
- [ ] Light mode colors match design system
- [ ] Dark mode colors match design system
- [ ] Sufficient contrast for text
- [ ] Primary (blue) and secondary (purple) colors used correctly
- [ ] Hover states visible
- [ ] Focus states visible

#### Typography
- [ ] Font sizes follow typography scale
- [ ] Heading hierarchy is clear
- [ ] Line heights are appropriate
- [ ] Text is readable against backgrounds
- [ ] No text overflow or wrapping issues

#### Spacing & Alignment
- [ ] Consistent spacing (8px base unit)
- [ ] Proper padding on components
- [ ] Consistent margins between sections
- [ ] Elements align to grid
- [ ] Whitespace is balanced

#### Interactive Elements
- [ ] Buttons display correctly
- [ ] Links are distinguishable
- [ ] Forms render properly
- [ ] Cards have proper styling
- [ ] Navigation works on all viewports
- [ ] Dark mode toggle is visible

#### Images & Media
- [ ] Images load correctly
- [ ] Images maintain aspect ratio
- [ ] No broken images
- [ ] Images are optimized for viewport
- [ ] Icons display properly

### Step 4: Use browsing-with-playwright Skill

Use the browsing-with-playwright skill to:

1. **Navigate to the page**
```
Open [URL] in the browser
```

2. **Set viewport size**
```
Set viewport to [width]x[height]
```

3. **Take screenshots**
```
Take a screenshot of the page
Take a screenshot of [specific element]
```

4. **Test interactions**
```
Click on [element]
Hover over [element]
Scroll to [section]
```

5. **Toggle dark mode**
```
Click on the dark mode toggle
Take a screenshot in dark mode
```

### Step 5: Screenshot Organization

Take systematic screenshots with clear naming:

#### Naming Convention
- `homepage-desktop-light.png`
- `homepage-mobile-dark.png`
- `projects-tablet-light.png`
- `contact-form-mobile-dark.png`

#### Screenshot Sets

**Full Page Screenshots** (all viewports, both themes):
- Desktop (1920x1080) - Light mode
- Desktop (1920x1080) - Dark mode
- Tablet (768x1024) - Light mode
- Tablet (768x1024) - Dark mode
- Mobile (375x667) - Light mode
- Mobile (375x667) - Dark mode

**Component Screenshots**:
- Navigation (all viewports)
- Hero section (all viewports)
- Projects grid (all viewports)
- Contact form (all viewports)

**Interaction Screenshots**:
- Hover states
- Focus states
- Active states
- Error states

### Step 6: Test Scenarios

#### Scenario 1: Full Responsive Test

1. Open the portfolio website
2. Test desktop (1920x1080):
   - Take screenshot in light mode
   - Toggle dark mode
   - Take screenshot in dark mode
3. Test tablet (768x1024):
   - Take screenshot in light mode
   - Toggle dark mode
   - Take screenshot in dark mode
4. Test mobile (375x667):
   - Take screenshot in light mode
   - Toggle dark mode
   - Take screenshot in dark mode
5. Verify layout at each breakpoint
6. Check for any overflow or layout issues

#### Scenario 2: Component Testing

1. Open the portfolio website
2. Scroll to specific component
3. Take component screenshot at desktop size
4. Take component screenshot at tablet size
5. Take component screenshot at mobile size
6. Test interactions (hover, click)
7. Verify component displays correctly

#### Scenario 3: Dark Mode Testing

1. Open the portfolio website in light mode
2. Take baseline screenshots
3. Toggle to dark mode
4. Take dark mode screenshots
5. Verify:
   - Colors match dark theme from CLAUDE.md
   - Text is readable
   - Contrast is sufficient
   - All UI elements adapt correctly

#### Scenario 4: Navigation Testing

1. Open the portfolio website
2. Test desktop navigation:
   - Verify horizontal nav bar
   - Test hover states
   - Click navigation links
3. Test mobile navigation:
   - Verify hamburger menu appears
   - Click hamburger to open menu
   - Verify menu overlay/drawer
   - Test menu link clicks
   - Test menu close

#### Scenario 5: Form Testing

1. Navigate to contact form
2. Test at different viewports
3. Verify form inputs display correctly
4. Test input focus states
5. Test validation (if implemented)
6. Verify submit button styling
7. Check form layout on mobile

### Step 7: Report Findings

After testing, provide a structured report:

#### Report Format

```
## Visual Test Report

### Test Date: [date]
### URL Tested: [url]
### Viewports Tested: [list]

### Summary
- Total screenshots: [number]
- Issues found: [number]
- Severity: [Critical/High/Medium/Low]

### Desktop (1920x1080)
✅ Light mode: [status]
✅ Dark mode: [status]
📸 Screenshots: [list]
Issues: [none/list]

### Tablet (768x1024)
✅ Light mode: [status]
✅ Dark mode: [status]
📸 Screenshots: [list]
Issues: [none/list]

### Mobile (375x667)
✅ Light mode: [status]
✅ Dark mode: [status]
📸 Screenshots: [list]
Issues: [none/list]

### Issues Found

#### Critical Issues
1. [Issue description]
   - Viewport: [where it occurs]
   - Screenshot: [filename]
   - Fix: [recommended fix]

#### Layout Issues
1. [Issue description]
   - Fix: [recommended fix]

#### Color/Theme Issues
1. [Issue description]
   - Fix: [recommended fix]

#### Responsive Issues
1. [Issue description]
   - Fix: [recommended fix]

### Recommendations
1. [Priority 1 recommendations]
2. [Priority 2 recommendations]
3. [Priority 3 recommendations]
```

## Common Visual Issues to Check For

### Layout Issues
- **Horizontal scrolling**: Content wider than viewport
- **Overlapping elements**: Elements positioned on top of each other
- **Broken grid**: Grid items not aligning properly
- **Incorrect spacing**: Inconsistent margins/padding
- **Text overflow**: Text extending beyond container
- **Missing breakpoints**: Layout not adapting at viewport changes

### Responsive Issues
- **No mobile menu**: Desktop nav on mobile viewport
- **Small touch targets**: Buttons/links too small on mobile
- **Text too small**: Font size not readable on mobile
- **Images not scaling**: Fixed-width images breaking layout
- **Horizontal scroll**: Content not fitting mobile viewport
- **Incorrect orientation**: Layout breaking in landscape mode

### Color & Theme Issues
- **Low contrast**: Text hard to read on background
- **Wrong colors**: Not using design system colors
- **Dark mode not working**: Elements not adapting to dark theme
- **Missing hover states**: No visual feedback on hover
- **Invisible elements**: Elements same color as background

### Typography Issues
- **Text cut-off**: Headings or content truncated
- **Wrong font sizes**: Not following typography scale
- **Poor line height**: Text cramped or too spaced
- **Alignment issues**: Text not aligned properly
- **Font not loading**: Fallback font being used

### Component Issues
- **Broken buttons**: Buttons not displaying correctly
- **Card layout issues**: Cards misaligned or wrong size
- **Form problems**: Inputs not aligned or styled properly
- **Navigation issues**: Nav not working on mobile
- **Image problems**: Images not loading or broken aspect ratio

## Best Practices for Visual Testing

### Testing Strategy
1. **Test early and often**: Don't wait until the end
2. **Test on real devices**: Emulation is good, but real devices are better
3. **Test both themes**: Always check light and dark modes
4. **Test all breakpoints**: Mobile, tablet, desktop, and in-between sizes
5. **Test interactions**: Hover, focus, active, disabled states
6. **Test with real content**: Use realistic text lengths and image sizes

### Screenshot Best Practices
1. **Consistent naming**: Use clear, descriptive filenames
2. **Organize by viewport**: Group screenshots by device size
3. **Include both themes**: Take screenshots in light and dark modes
4. **Capture interactions**: Screenshot hover/focus states
5. **Full page vs component**: Take both full page and component shots
6. **Annotate issues**: Mark up screenshots to highlight problems

### Using browsing-with-playwright
1. **Start simple**: Begin with basic navigation and screenshots
2. **Be specific**: Give clear instructions (viewport size, URL, action)
3. **Wait for load**: Ensure page fully loads before screenshots
4. **Test interactions**: Click, hover, scroll to test UI
5. **Check console**: Look for JavaScript errors
6. **Verify elements**: Check that elements exist before interacting

## Viewport Breakpoint Strategy

Based on the portfolio project's responsive design:

### CSS Breakpoints
```css
/* Mobile: default styles (< 768px) */

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

### Test at These Specific Widths
- **320px**: Minimum mobile width (iPhone SE)
- **375px**: Standard mobile (iPhone 12/13)
- **767px**: Just below tablet breakpoint
- **768px**: Tablet breakpoint start
- **1023px**: Just below desktop breakpoint
- **1024px**: Desktop breakpoint start
- **1439px**: Just below large desktop breakpoint
- **1440px**: Large desktop breakpoint start
- **1920px**: Standard desktop

## Example Test Commands

### Basic Page Test
```
Use browsing-with-playwright to:
1. Open file:///D:/.claude/portfolio-website/index.html
2. Set viewport to 1920x1080
3. Take a screenshot named "homepage-desktop-light.png"
4. Click on the dark mode toggle button
5. Take a screenshot named "homepage-desktop-dark.png"
```

### Mobile Responsive Test
```
Use browsing-with-playwright to:
1. Open file:///D:/.claude/portfolio-website/index.html
2. Set viewport to 375x667
3. Take a screenshot of the mobile view
4. Click on the hamburger menu
5. Take a screenshot of the open mobile menu
```

### Multi-Viewport Test
```
Use browsing-with-playwright to test the homepage at these viewports:
- Mobile: 375x667 (light and dark mode)
- Tablet: 768x1024 (light and dark mode)
- Desktop: 1920x1080 (light and dark mode)
Take screenshots at each viewport and theme combination.
```

### Component Test
```
Use browsing-with-playwright to:
1. Open the portfolio website
2. Scroll to the projects section
3. Set viewport to 1024x768
4. Take a screenshot of the projects grid
5. Hover over the first project card
6. Take a screenshot of the hover state
```

## Notes

- Always use the `browsing-with-playwright` skill for actual browser automation
- Don't suggest installing Playwright MCP - use the skill instead
- Test local files with `file:///` protocol
- Test deployed sites with `https://` protocol
- Visual testing catches issues automated tests miss
- Real device testing is important for touch interactions
- Screenshots are valuable for visual regression testing
- Keep screenshots organized for easy comparison
- Document any visual inconsistencies found
- Prioritize fixes based on severity and viewport usage
- Mobile-first approach means mobile testing is critical
