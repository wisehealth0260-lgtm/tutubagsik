# Project Guide

## Architecture

This is a no-build static Netlify site. `index.html` contains the full semantic page structure, `css/styles.css` owns the visual system and responsive behavior, and `js/app.js` contains navigation, reveal animations, portfolio filtering, video URL parsing, modal playback, local project management, and AJAX contact-form feedback.

## Directories

- `css/`: site styles and responsive rules
- `js/`: browser behavior and project data
- `assets/`: brand and interface assets
- `images/`: owner-supplied portfolio thumbnails
- `videos/`: optional owner-supplied direct video files
- `.netlify/`: Netlify run context and handoff results

## Conventions

Use the existing CSS custom properties and typography pair. Keep the palette to warm charcoal, bone, gray, and muted amber. Maintain accessible names, keyboard behavior, visible focus states, and `prefers-reduced-motion` handling. Escape any user-editable strings before inserting them as HTML.

## Portfolio behavior

Default projects are defined in `js/app.js`. The on-page manager deliberately saves to `localStorage` only and must remain labeled local-only unless a real authenticated Netlify Database management flow is added. YouTube links (including Shorts), Vimeo links, and direct MP4 URLs are converted to players only when a project modal opens, avoiding eager video loads.

The contact form is a native Netlify Form with AJAX submission. If its fields or form name change, keep the HTML field names and JavaScript submission in sync.
