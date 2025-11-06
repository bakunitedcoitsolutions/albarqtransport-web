# Albarq Transport - Next.js 16

This is the Next.js 16 conversion of the Albarq Transport React website.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router pages (converted from React Router pages)
- `src/components/` - React components (layouts, sections, elements)
- `public/` - Static assets (images, favicon, etc.)
- `src/css/` - CSS stylesheets
- `src/scss/` - SCSS source files

## Key Changes from React to Next.js

1. **Routing**: Converted from React Router to Next.js App Router

   - Pages are now in `app/[route]/page.js` format
   - React Router `<Link to="...">` converted to Next.js `<Link href="...">`

2. **Client Components**: Added `"use client"` directive to components that use:

   - React hooks (useState, useEffect, etc.)
   - Browser APIs (window, document)
   - Event handlers

3. **Image Paths**: Updated image paths to use Next.js public folder structure

   - `assets/img/...` → `/assets/img/...`
   - `img/...` → `/img/...`

4. **Imports**: Updated import paths to work with Next.js structure

## Build for Production

```bash
npm run build
npm start
```

## Pages

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/faq` - FAQ page
- `/news` - News listing
- `/news-grid` - News grid view
- `/news-details` - News details
- `/service` - Services listing
- `/service-details` - Service details
- `/project` - Projects listing
- `/project-details` - Project details
- `/team` - Team listing
- `/team-details` - Team member details
- `/pricing` - Pricing page
- `/index-2` - Alternative home page
- `/index-one` - One page layout
- `/index-two` - Alternative one page layout
- `/not-found` - 404 page
