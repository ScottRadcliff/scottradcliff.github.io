# Design Update

Perfect. Jekyll makes this even cleaner.

Below is:

1. A **Jekyll-ready `main.scss`**
2. Proper file placement
3. Updated README specifically for Jekyll
4. Layout + post examples that match Jekyll conventions

This assumes a standard Jekyll structure.

---

# 📁 File Structure

```
_assets/
  css/
    main.scss

_layouts/
  default.html
  post.html

_includes/
  head.html

index.html
```

---

# ✅ `/assets/css/main.scss`

Jekyll supports Sass out of the box. This will compile automatically.

```scss
---
---

/* =========================================
   Scott Radcliff — Jekyll Typography System
   ========================================= */

/* ---- 1. Variables ---- */

$color-bg: #ffffff;
$color-text: #111111;
$color-muted: #6b7280;
$color-accent: #2563eb;
$color-border: #e5e7eb;

$font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
$font-mono: "JetBrains Mono", Menlo, monospace;

$max-width: 720px;

/* ---- 2. Base ---- */

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: $color-bg;
  color: $color-text;
  font-family: $font-sans;
  font-size: 18px;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* ---- 3. Layout ---- */

.container {
  max-width: $max-width;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

/* ---- 4. Typography ---- */

h1, h2, h3, h4 {
  font-weight: 600;
  line-height: 1.25;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

h1 { font-size: 2.75rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

p {
  margin: 1.25rem 0;
}

.meta {
  color: $color-muted;
  font-size: 0.9rem;
}

a {
  color: $color-accent;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

ul, ol {
  margin: 1.25rem 0;
  padding-left: 1.5rem;
}

/* ---- 5. Code ---- */

code {
  font-family: $font-mono;
  background: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
}

pre {
  font-family: $font-mono;
  background: #f9fafb;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid $color-border;
}

/* ---- 6. Post List ---- */

.post-preview {
  padding: 2rem 0;
  border-bottom: 1px solid $color-border;

  h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0.5rem 0;
    color: $color-muted;
  }
}

/* ---- 7. Footer ---- */

footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid $color-border;
  font-size: 0.9rem;
  color: $color-muted;
}
```

---

# ✅ `_layouts/default.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    {% include head.html %}
  </head>
  <body>
    <div class="container">
      {{ content }}
      <footer>
        © {{ site.time | date: "%Y" }} Scott Radcliff
      </footer>
    </div>
  </body>
</html>
```

---

# ✅ `_includes/head.html`

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>{{ page.title }} | {{ site.title }}</title>

<link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=JetBrains+Mono&display=swap" rel="stylesheet">
```

---

# ✅ `_layouts/post.html`

```html
---
layout: default
---

<article>
  <h1>{{ page.title }}</h1>
  <p class="meta">
    {{ page.date | date: "%B %d, %Y" }}
  </p>

  {{ content }}
</article>
```

---

# ✅ `index.html`

```html
---
layout: default
title: Home
---

<h1>Scott Radcliff</h1>
<p class="meta">Software Engineer</p>

{% for post in site.posts %}
  <div class="post-preview">
    <h2>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
    </h2>
    <p class="meta">
      {{ post.date | date: "%B %d, %Y" }}
    </p>
    <p>
      {{ post.excerpt | strip_html | truncate: 160 }}
    </p>
  </div>
{% endfor %}
```

---

# 📘 README.md (Jekyll Version)

````markdown
# Scott Radcliff — Jekyll Theme

A minimal, typography-first Jekyll design focused on clarity and long-form writing.

## Philosophy

- 720px reading width
- Strong typographic hierarchy
- Generous spacing
- Minimal visual noise
- Developer-focused aesthetic

Content first. Always.

---

## Features

- Clean blog layout
- Sass support
- Code-friendly typography
- Subtle accent color
- Responsive design
- Easy to extend

---

## Installation

1. Place `main.scss` inside `/assets/css/`
2. Add layouts and includes
3. Run:

   bundle exec jekyll serve

---

## Customization

Edit variables at the top of `main.scss`:

```scss
$color-accent: #2563eb;
$max-width: 720px;
````

---

## Next Improvements

* Dark mode toggle
* Tags page
* Reading time
* RSS improvements
* SEO enhancements

```

---

If you’d like, I can now:

- Add a **dark mode toggle**
- Make it feel more like **Vercel / Linear**
- Make it feel more like **Apple editorial**
- Add a **projects section**
- Or tune it specifically to your actual content on scottradcliff.com**

Which direction feels most “you”?
```

