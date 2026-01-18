# SEO Optimization

A skill that helps optimize the portfolio website for search engines, ensuring better visibility, ranking, and performance.

## Trigger Phrases

This skill activates when the user wants to optimize for SEO:
- "optimize SEO"
- "add meta tags"
- "improve search ranking"
- "check SEO"
- "make it SEO friendly"
- "optimize for Google"

## Instructions

When this skill is invoked, follow these steps to optimize the portfolio website for search engines:

### Step 1: Audit Current SEO Status

Before making changes, review the current state:

1. **Check meta tags**: Does the HTML have proper `<title>` and meta descriptions?
2. **Review HTML structure**: Is semantic HTML being used?
3. **Analyze performance**: Are images optimized? Is there lazy loading?
4. **Verify accessibility**: Screen reader friendly = search engine friendly

### Step 2: Optimize Meta Tags

Generate and add comprehensive meta tags to the `<head>` section:

#### Essential Meta Tags

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary Meta Tags -->
  <title>Your Name - Web Developer Portfolio</title>
  <meta name="title" content="Your Name - Web Developer Portfolio">
  <meta name="description" content="Portfolio showcasing modern web development projects with expertise in HTML, CSS, and JavaScript. View my latest work and get in touch.">
  <meta name="keywords" content="web developer, portfolio, HTML, CSS, JavaScript, frontend developer">
  <meta name="author" content="Your Name">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://yourdomain.com/">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yourdomain.com/">
  <meta property="og:title" content="Your Name - Web Developer Portfolio">
  <meta property="og:description" content="Portfolio showcasing modern web development projects with expertise in HTML, CSS, and JavaScript.">
  <meta property="og:image" content="https://yourdomain.com/assets/images/og-image.jpg">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yourdomain.com/">
  <meta property="twitter:title" content="Your Name - Web Developer Portfolio">
  <meta property="twitter:description" content="Portfolio showcasing modern web development projects with expertise in HTML, CSS, and JavaScript.">
  <meta property="twitter:image" content="https://yourdomain.com/assets/images/twitter-image.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

  <!-- Theme Color -->
  <meta name="theme-color" content="#0066cc">
</head>
```

#### Guidelines for Meta Tags

- **Title**: 50-60 characters, include name and keywords
- **Description**: 150-160 characters, compelling and descriptive
- **Keywords**: 5-10 relevant keywords (less important now, but still useful)
- **Open Graph image**: 1200x630px for best display on social media
- **Twitter image**: 1200x675px recommended

### Step 3: Ensure Semantic HTML Structure

Use proper HTML5 semantic elements for better crawlability:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags here -->
</head>
<body>
  <!-- Skip to main content for accessibility -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <!-- Header with navigation -->
  <header role="banner">
    <nav role="navigation" aria-label="Main navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main content -->
  <main id="main-content" role="main">
    <!-- Hero section -->
    <section id="home" aria-labelledby="hero-title">
      <h1 id="hero-title">Your Name - Web Developer</h1>
      <p>Crafting beautiful, accessible web experiences</p>
    </section>

    <!-- Projects section -->
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Featured Projects</h2>
      <div class="projects-grid">
        <article class="project-card">
          <h3>Project Title</h3>
          <p>Project description...</p>
        </article>
      </div>
    </section>

    <!-- About section -->
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title">About Me</h2>
      <p>Your bio and skills...</p>
    </section>

    <!-- Contact section -->
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Get In Touch</h2>
      <form>
        <!-- Contact form -->
      </form>
    </section>
  </main>

  <!-- Footer -->
  <footer role="contentinfo">
    <p>&copy; 2026 Your Name. All rights reserved.</p>
    <nav aria-label="Social media links">
      <a href="https://github.com/yourusername" aria-label="GitHub profile">GitHub</a>
      <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn profile">LinkedIn</a>
    </nav>
  </footer>
</body>
</html>
```

#### Semantic HTML Best Practices

- **Use heading hierarchy**: H1 → H2 → H3 (never skip levels)
- **One H1 per page**: Should be the main page title
- **Semantic elements**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- **ARIA labels**: Add `aria-label` or `aria-labelledby` to sections
- **Alt text**: Every image must have descriptive alt text
- **Link text**: Use descriptive text, not "click here"

### Step 4: Optimize Performance

Implement performance optimizations for better Core Web Vitals:

#### Image Optimization

```html
<!-- Use modern formats with fallbacks -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Descriptive alt text" loading="lazy" width="800" height="600">
</picture>

<!-- Lazy loading for below-the-fold images -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- Responsive images -->
<img
  srcset="image-320w.jpg 320w,
          image-640w.jpg 640w,
          image-1280w.jpg 1280w"
  sizes="(max-width: 640px) 100vw, 640px"
  src="image-640w.jpg"
  alt="Description"
  loading="lazy"
>
```

#### CSS Optimization

```html
<!-- Inline critical CSS -->
<style>
  /* Critical above-the-fold CSS here */
  body { margin: 0; font-family: sans-serif; }
  .hero { min-height: 100vh; }
</style>

<!-- Load non-critical CSS asynchronously -->
<link rel="preload" href="css/styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="css/styles.css"></noscript>
```

#### JavaScript Optimization

```html
<!-- Defer non-critical JavaScript -->
<script src="js/main.js" defer></script>

<!-- Or use async for independent scripts -->
<script src="js/analytics.js" async></script>
```

#### Font Optimization

```html
<!-- Preload important fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Use font-display: swap to prevent invisible text -->
<style>
  @font-face {
    font-family: 'CustomFont';
    src: url('/fonts/custom-font.woff2') format('woff2');
    font-display: swap;
  }
</style>
```

### Step 5: Add Structured Data (Optional but Recommended)

Add JSON-LD structured data for rich snippets:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yourdomain.com",
  "image": "https://yourdomain.com/assets/images/profile.jpg",
  "jobTitle": "Web Developer",
  "description": "Web developer specializing in modern, accessible web applications",
  "sameAs": [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername",
    "https://twitter.com/yourusername"
  ],
  "knowsAbout": ["HTML", "CSS", "JavaScript", "Web Development", "Frontend Development"]
}
</script>
```

For portfolio projects:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Project Name",
  "description": "Project description",
  "url": "https://yourdomain.com/project-demo",
  "image": "https://yourdomain.com/assets/images/project-screenshot.jpg",
  "author": {
    "@type": "Person",
    "name": "Your Name"
  },
  "dateCreated": "2026-01-01"
}
</script>
```

### Step 6: Create a Sitemap

Generate a sitemap.xml file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/#projects</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/#about</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/#contact</loc>
    <lastmod>2026-01-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

### Step 7: Create a robots.txt File

```txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## SEO Checklist

Use this checklist to ensure comprehensive SEO optimization:

### Technical SEO
- [ ] Valid HTML5 with no errors
- [ ] HTTPS enabled (SSL certificate)
- [ ] Mobile-responsive design
- [ ] Fast loading time (< 3 seconds)
- [ ] Proper URL structure (clean, descriptive URLs)
- [ ] Canonical tags implemented
- [ ] 404 error page exists
- [ ] Robots.txt file present
- [ ] Sitemap.xml created and submitted

### On-Page SEO
- [ ] Unique, descriptive page title (50-60 chars)
- [ ] Compelling meta description (150-160 chars)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Only one H1 per page
- [ ] Descriptive alt text on all images
- [ ] Internal links with descriptive anchor text
- [ ] External links open in new tab with rel="noopener"
- [ ] Content is original and valuable
- [ ] Keywords used naturally in content

### Performance SEO
- [ ] Images optimized (WebP format, proper sizing)
- [ ] Lazy loading implemented for images
- [ ] CSS minified and optimized
- [ ] JavaScript minified and deferred
- [ ] Fonts optimized with font-display: swap
- [ ] No render-blocking resources
- [ ] Good Core Web Vitals scores
- [ ] Gzip/Brotli compression enabled

### Semantic & Accessibility SEO
- [ ] Semantic HTML5 elements used
- [ ] ARIA labels where appropriate
- [ ] Skip to main content link
- [ ] Proper language attribute (lang="en")
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Screen reader tested

### Social & Structured Data
- [ ] Open Graph tags for Facebook
- [ ] Twitter Card tags
- [ ] Favicon set
- [ ] Apple touch icon included
- [ ] JSON-LD structured data added
- [ ] Social media profiles linked

## Tools for Testing

Recommend using these tools to validate SEO:

1. **Google Search Console**: Submit sitemap, monitor indexing
2. **Google PageSpeed Insights**: Test Core Web Vitals
3. **Lighthouse (Chrome DevTools)**: Comprehensive audit
4. **Schema.org Validator**: Test structured data
5. **Mobile-Friendly Test**: Ensure mobile responsiveness
6. **WebPageTest**: Detailed performance analysis
7. **Screaming Frog**: Crawl site for SEO issues (for larger sites)

## Best Practices

### Content Strategy
- Write unique, valuable content for your target audience
- Use keywords naturally in headings and body text
- Keep content updated and fresh
- Include portfolio projects with detailed descriptions
- Showcase skills and expertise clearly

### Link Building
- Link to your GitHub repositories
- Include links to live project demos
- Add social media profiles
- Consider guest blogging or open source contributions
- Get listed in developer directories

### Local SEO (if applicable)
- Add location information if relevant
- Create Google Business Profile if doing freelance work
- Include contact information clearly

### Ongoing Optimization
- Monitor Google Search Console regularly
- Update content periodically
- Add new projects to keep site fresh
- Fix any crawl errors promptly
- Keep up with Core Web Vitals metrics

## Common SEO Mistakes to Avoid

1. **Missing or duplicate meta descriptions**: Every page should have unique meta descriptions
2. **Poor heading hierarchy**: Don't skip heading levels (H1 → H3 skips H2)
3. **Slow loading times**: Optimize images and minimize code
4. **Not mobile-friendly**: Test on actual mobile devices
5. **Missing alt text**: Every image needs descriptive alt text
6. **Broken links**: Check for and fix 404 errors
7. **Thin content**: Provide substantial, valuable content
8. **Keyword stuffing**: Use keywords naturally
9. **No HTTPS**: Always use secure connections
10. **Ignoring Core Web Vitals**: Monitor and optimize LCP, FID, CLS

## Portfolio-Specific SEO Tips

For a web developer portfolio:

1. **Project descriptions**: Write detailed case studies for each project
2. **Technical keywords**: Include technologies used (HTML, CSS, JavaScript, etc.)
3. **Process documentation**: Explain your development approach
4. **Results/metrics**: Show impact of your work (performance improvements, etc.)
5. **Open source**: Link to GitHub repos for credibility
6. **Skills showcase**: List technologies and tools you're proficient in
7. **Contact information**: Make it easy to get in touch
8. **Blog (optional)**: Write about web development topics

## Notes

- SEO is an ongoing process, not a one-time task
- Focus on user experience first; SEO follows naturally
- Quality content is the most important ranking factor
- Mobile-first indexing means mobile optimization is critical
- Page speed directly impacts rankings
- Accessibility improvements benefit both users and SEO
- Regularly monitor performance with Google Search Console
- Keep learning as search algorithms evolve
