# S&F Moving - Professional Moving Services Website

## Project Overview

A modern, responsive single-page application for S&F Moving, a professional moving company serving the Bay Area. This website showcases their comprehensive moving services, builds trust through social proof, and converts visitors into customers through strategic calls-to-action.

### Live Demo

**URL**: https://example.com/your-project (replace with your deployed URL)

### Key Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Interactive Components**: Cost calculator, service area map, FAQ accordion
- **SEO Optimized**: Semantic HTML, meta tags, and proper heading structure
- **Accessibility**: WCAG AA compliant with proper ARIA labels
- **Performance**: Fast loading times with optimized assets and code splitting
- **Professional Design**: Gold accent color scheme with elegant typography

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in your configured hosting environment (if you have automatic deploys set up).

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Development guide & local environment

This repository includes a detailed development prompt and architecture document at `DEV.md` which describes the project structure, components, features, and implementation plan. Follow that file for component-level guidance and implementation notes.

For local environment variables, copy the example file and add any secrets or API keys you need (for example Mapbox):

```bash
cp .env.local.example .env.local
# then edit .env.local and add your tokens
```

The `.env.local.example` contains a placeholder for `VITE_MAPBOX_TOKEN` used by the map component. Do not commit your real tokens.


**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Technology Stack

### Core Technologies

- **React 18.3.1** - Modern UI library with hooks and concurrent features
- **TypeScript** - Type-safe development for better code quality
- **Vite** - Next-generation frontend build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **React Router DOM v6** - Client-side routing

### UI Components & Design

- **shadcn/ui** - High-quality, customizable React components
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful, consistent icon library
- **class-variance-authority** - Dynamic class name variants
- **tailwindcss-animate** - Animation utilities

### State & Data Management

- **TanStack Query (React Query)** - Powerful asynchronous state management
- **React Hook Form** - Performant form validation and handling
- **Zod** - TypeScript-first schema validation

### Additional Libraries

- **Mapbox GL** - Interactive maps for service area visualization
- **date-fns** - Modern JavaScript date utility library
- **Recharts** - Composable charting library
- **Sonner** - Toast notifications

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui primitive components
│   ├── About.tsx       # About company section
│   ├── ComparisonTable.tsx  # Competitor comparison
│   ├── Contact.tsx     # Contact form
│   ├── CostCalculator.tsx   # Price estimator
│   ├── FAQ.tsx         # Frequently asked questions
│   ├── Footer.tsx      # Footer section
│   ├── Gallery.tsx     # Photo gallery
│   ├── Guarantees.tsx  # Service guarantees
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── ProcessTimeline.tsx  # Moving process steps
│   ├── Resources.tsx   # Resources section
│   ├── Reviews.tsx     # Review statistics
│   ├── ServiceAreaMap.tsx   # Interactive map
│   ├── Services.tsx    # Services grid
│   ├── SpecialOffer.tsx     # Promotional banner
│   ├── Stats.tsx       # Statistics section
│   ├── Testimonials.tsx     # Customer testimonials
│   └── TrustBadges.tsx # Trust indicators
├── pages/
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Images and static files
├── App.tsx             # Root component
├── main.tsx            # Application entry point
└── index.css           # Global styles and design tokens
```

## Website Sections

### 1. Header & Navigation
- Sticky navigation bar with logo
- Mobile-responsive hamburger menu
- Quick access to phone number
- "Get Quote" CTA button

### 2. Hero Section
- Full-width background with professional moving imagery
- Compelling headline and value proposition
- Primary CTAs for quote and phone call
- Trust badges (Licensed & Insured, Professional Team, etc.)

### 3. Statistics
- 500+ Successful Moves
- 10+ Years Experience
- 100% Satisfaction Rate
- Licensed & Insured certification

### 4. Services
- Residential Moving
- Commercial Moving
- Long Distance Moving
- Packing Services
- Storage Solutions
- Furniture Assembly

### 5. Process Timeline
- Step-by-step moving process visualization
- From initial consultation to final walkthrough

### 6. Photo Gallery
- Professional photos of branded trucks
- Team in action
- Equipment showcase
- Secure loading practices

### 7. Trust Building
- Service guarantees (Damage-Free, On-Time, Transparent Pricing)
- Trust badges (BBB Accredited, Licensed & Insured)
- Customer testimonials
- Review statistics with external links

### 8. Interactive Tools
- Cost calculator for instant estimates
- Service area map with coverage visualization
- FAQ accordion for common questions

### 9. About Section
- Company story and mission
- Team introduction
- Years in business and expertise

### 10. Contact Section
- Contact form with validation
- Business contact information
- Phone: +1 (510) 703-7904
- Business hours

### 11. Footer
- Company information
- Quick links to all sections
- Service directory
- Social media links
- Legal links (Privacy Policy, Terms of Service)

## How can I deploy this project?

Deploy to any static hosting provider that supports single-page apps (Vite-built output). Common choices are Vercel, Netlify, or traditional hosting.

To deploy:

- Build the site: `npm run build`
- Upload the contents of the `dist/` folder to your host, or use your provider's CLI (Vercel/Netlify) to publish directly.

## Can I connect a custom domain to my project?

Yes. This project includes a GitHub Actions deploy workflow that can publish the site to GitHub Pages and set a custom domain. If you want to use GitHub Pages with the included workflow:

- Ensure your repository is hosted at GitHub and your default branch is `main`.
- Add a DNS CNAME record for `www` pointing to `mehdozz007-stack.github.io`.
- Push to `main` — the workflow (`.github/workflows/deploy.yml`) will build and publish the site to the `gh-pages` branch and set `www.sf-moving.com` as the CNAME.

See `DEPLOYMENT.md` for full instructions and DNS examples.
