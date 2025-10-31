# Development Prompt & Architecture

## Complete Development Prompt

This document contains the comprehensive prompt to recreate this professional moving company website using modern, elegant open-source tools.

### Project Overview

Build a modern, responsive single-page application for S&F Moving, a professional moving company in the Bay Area. The website should showcase their services, build trust through testimonials and guarantees, and convert visitors into customers through strategic CTAs.

### Technology Stack (Open Source)

**Core Framework:**
- **React 18.3+** - Modern UI library with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling (faster than Webpack)

**Styling & UI:**
- **Tailwind CSS 3+** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful, consistent icon library

**State & Data Management:**
- **TanStack Query (React Query)** - Powerful asynchronous state management
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation

**Routing & Navigation:**
- **React Router DOM v6** - Declarative routing for React

**Additional Libraries:**
- **date-fns** - Modern date utility library
- **clsx + tailwind-merge** - Conditional className handling
- **Mapbox GL** - Interactive map integration
- **Recharts** - Composable charting library

### Design System

**Color Palette:**
```css
/* Primary Brand Colors */
--gold: 45 93% 58%        /* Main brand color */
--gold-dark: 38 85% 45%   /* Darker shade for contrast */
--gold-light: 48 95% 70%  /* Lighter accent */

/* UI Colors (HSL values) */
--background: 0 0% 100%   /* White background */
--foreground: 240 10% 4%  /* Near black text */
--muted: 240 5% 96%       /* Subtle backgrounds */
--accent: 240 5% 96%      /* Accent elements */
```

**Typography:**
- Headings: Playfair Display (serif, elegant)
- Body: Inter (sans-serif, readable)

**Spacing & Layout:**
- Container max-width: 1400px
- Mobile-first responsive design
- 8px base spacing unit

### Page Structure & Sections

#### 1. Special Offer Banner (Top)
- Dismissible banner with promotional offer
- Phone number CTA
- Golden gradient background with animation
- Icons: Sparkles, X (close)

#### 2. Header/Navigation
- Sticky navigation bar
- Logo (S&F Moving)
- Navigation links: Home, Services, About, Contact
- Phone number and "Get Quote" CTA button
- Mobile hamburger menu

#### 3. Hero Section
- Full-width background image (moving truck/professional movers)
- Overlay gradient for text readability
- Main headline: "Professional Moving Services in the Bay Area"
- Subheadline describing services
- Two CTAs: "Get Free Quote" and "Call Now"
- Trust badges row (Licensed & Insured, Professional Team, etc.)

#### 4. Stats Section
- 4-column grid (2x2 on mobile)
- Metrics: 500+ Successful Moves, 10+ Years Experience, 100% Satisfaction, Licensed & Insured
- Icons for each stat
- Gold accent colors
- Animated fade-up on scroll

#### 5. Services Section
- Section title and description
- Grid of service cards (3 columns, responsive)
- Services:
  - Residential Moving
  - Commercial Moving
  - Long Distance Moving
  - Packing Services
  - Storage Solutions
  - Furniture Assembly
- Each card: Icon, title, description, "Book this Service" button
- Icons from Lucide: Home, Building2, MapPin, Package, Warehouse, Wrench

#### 6. Process Timeline
- Visual timeline of moving process
- Steps: Initial Consultation, Custom Quote, Schedule Move, Pack & Prepare, Moving Day, Final Walkthrough
- Step-by-step cards with numbers and descriptions
- Connected with visual line/dots

#### 7. Gallery Section
- Section title: "See Our Work"
- Grid layout (3 columns, responsive)
- Professional photos:
  - Branded moving trucks (3 images with S&F Moving logo)
  - Professional team in action
  - Professional equipment
  - Loaded truck showing secure packing
- Hover effects on images
- Alt text for accessibility

#### 8. Guarantees Section
- Trust-building guarantees grid
- 6 guarantee cards:
  - Damage-Free Guarantee (Shield icon)
  - On-Time Delivery (Clock icon)
  - Transparent Pricing (DollarSign icon)
  - Professional Team (Users icon)
  - Full Insurance (FileCheck icon)
  - 24/7 Support (Phone icon)
- Each card: Icon, title, description
- CTA button: "Get Your Quote"

#### 9. Trust Badges
- Section showcasing credibility
- 4 badges:
  - Licensed & Insured (Shield icon)
  - BBB Accredited (Award icon)
  - Eco-Friendly (Leaf icon)
  - Family Owned (Heart icon)
- Card-based layout with icons and descriptions

#### 10. Testimonials Section
- Customer review cards
- 3-column grid (responsive)
- Each testimonial: Quote icon, review text, author name, location
- Animated fade-up entrance
- Real customer feedback

#### 11. Reviews Section
- Overall rating display (5.0 stars)
- Number of reviews
- Recommendation percentage (100%)
- Successful moves counter
- Links to Google and Yelp reviews
- External link icons

#### 12. Comparison Table
- "Why Choose Us" section
- Table comparing S&F Moving vs Competitors
- Features comparison (Licensed & Insured, Professional Training, Transparent Pricing, etc.)
- Checkmarks and X marks for visual clarity

#### 13. Service Area Map
- Interactive Mapbox map
- Coverage area visualization
- Cities served list
- Clickable markers for key locations

#### 14. Cost Calculator
- Interactive pricing estimator
- Form inputs:
  - Move type (Residential/Commercial/Long Distance)
  - Number of rooms/size
  - Packing services needed
  - Distance/floors
- Real-time price estimation
- "Get Accurate Quote" CTA

#### 15. FAQ Section
- Accordion-style expandable questions
- Categories: General, Pricing, Services, Insurance
- Common questions about moving process
- Smooth expand/collapse animations

#### 16. Resources Section
- Blog or resources area (optional)
- Moving tips and guides
- Downloadable checklists
- Educational content for SEO

#### 17. About Section
- Company story
- Years in business
- Team photo
- Mission statement
- Values and commitment

#### 18. Contact Section
- Contact form with validation
- Fields: Name, Email, Phone, Move Date, Message
- Form submission with React Hook Form + Zod
- Contact information display:
  - Phone: +1 (510) 703-7904
  - Email
  - Address
- Business hours
- Map integration

#### 19. Footer
- Multi-column layout
- Company info column
- Quick links column
- Services column
- Contact info column
- Social media icons
- Copyright notice
- Privacy policy & terms links

### Key Features & Functionality

**Responsive Design:**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Hamburger menu for mobile navigation
- Stacked layouts on small screens

**Animations:**
- Fade-up on scroll for sections
- Hover effects on cards and buttons
- Smooth scrolling between sections
- Loading states for forms
- Pulse animations for special offers

**SEO Optimization:**
- Semantic HTML5 elements
- Meta tags in index.html
- Alt text on all images
- Heading hierarchy (H1 > H2 > H3)
- Descriptive page title
- robots.txt file

**Accessibility:**
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast ratios (WCAG AA)
- Screen reader friendly
- Semantic HTML structure

**Performance:**
- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size with Vite
- Asset optimization
- Fast initial load time

**Forms & Validation:**
- Client-side validation with Zod schemas
- Real-time error messages
- Accessible error states
- Toast notifications for submissions
- Phone number formatting

**CTAs & Conversion:**
- Multiple "Get Quote" CTAs throughout page
- Sticky header with phone number
- Click-to-call phone links
- Smooth scroll to contact form
- Trust signals near CTAs

### Component Architecture

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── accordion.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   └── ... (other UI primitives)
│   ├── Header.tsx             # Navigation bar
│   ├── Hero.tsx               # Hero section
│   ├── SpecialOffer.tsx       # Top banner
│   ├── Stats.tsx              # Statistics section
│   ├── Services.tsx           # Services grid
│   ├── ProcessTimeline.tsx    # Step-by-step process
│   ├── Gallery.tsx            # Photo gallery
│   ├── Guarantees.tsx         # Guarantee cards
│   ├── TrustBadges.tsx        # Trust indicators
│   ├── Testimonials.tsx       # Customer reviews
│   ├── Reviews.tsx            # Review statistics
│   ├── ComparisonTable.tsx    # Comparison table
│   ├── ServiceAreaMap.tsx     # Interactive map
│   ├── CostCalculator.tsx     # Price estimator
│   ├── FAQ.tsx                # Questions accordion
│   ├── Resources.tsx          # Resources section
│   ├── About.tsx              # About company
│   ├── Contact.tsx            # Contact form
│   └── Footer.tsx             # Footer section
├── pages/
│   ├── Index.tsx              # Main landing page
│   └── NotFound.tsx           # 404 page
├── hooks/
│   ├── use-mobile.tsx         # Mobile detection hook
│   └── use-toast.ts           # Toast notifications
├── lib/
│   └── utils.ts               # Utility functions
├── assets/                    # Images and static files
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
└── index.css                  # Global styles + design tokens
```

### Implementation Steps

**Phase 1: Setup & Configuration**
1. Initialize Vite + React + TypeScript project
2. Install dependencies (see package.json)
3. Configure Tailwind CSS with custom config
4. Set up shadcn/ui components
5. Create design system in index.css
6. Configure routing with React Router

**Phase 2: Layout & Structure**
1. Create Header component with navigation
2. Build Footer component
3. Set up Index page layout
4. Implement responsive container system

**Phase 3: Hero & Above Fold**
1. Create SpecialOffer banner
2. Build Hero section with CTAs
3. Implement Stats section
4. Add smooth scroll functionality

**Phase 4: Services & Features**
1. Build Services grid
2. Create ProcessTimeline component
3. Implement Gallery with images
4. Add Guarantees section

**Phase 5: Trust & Social Proof**
1. Create TrustBadges component
2. Build Testimonials section
3. Add Reviews display
4. Implement ComparisonTable

**Phase 6: Interactive Features**
1. Integrate ServiceAreaMap with Mapbox
2. Build CostCalculator with form logic
3. Create FAQ accordion
4. Add Resources section

**Phase 7: Contact & Conversion**
1. Build Contact form with validation
2. Implement form submission
3. Add toast notifications
4. Test all CTAs

**Phase 8: Polish & Optimization**
1. Add animations and transitions
2. Optimize images
3. Test responsive design
4. Accessibility audit
5. SEO optimization
6. Performance testing

### Environment Setup

```bash
# Required environment variables (create .env.local)
VITE_MAPBOX_TOKEN=your_mapbox_token_here
```

### Build Configuration

**vite.config.ts:**
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Content Requirements

**Copy & Messaging:**
- Professional, trustworthy tone
- Benefits-focused (not just features)
- Clear value propositions
- Strong CTAs throughout
- Social proof and testimonials
- Specific, measurable claims (500+ moves, 10+ years)

**Images Needed:**
- Hero background: Professional movers or branded truck
- Gallery: 8+ high-quality photos
  - 3 branded truck photos with logo
  - Team photos
  - Equipment photos
  - Loaded truck photos
- Service icons (from Lucide)
- Manager/team photo for About section

**SEO Keywords:**
- Bay Area moving company
- Professional movers
- Residential moving services
- Commercial moving
- Long distance movers
- San Francisco movers
- Licensed and insured movers

### Testing Checklist

- [ ] All sections render correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] Forms validate properly
- [ ] Smooth scrolling works
- [ ] All links functional
- [ ] Images load and have alt text
- [ ] Animations perform well
- [ ] Accessibility compliance
- [ ] Cross-browser testing
- [ ] Performance (Lighthouse score 90+)

### Future Enhancements

- Online booking system integration
- Customer portal for tracking moves
- Live chat support
- Multi-language support
- Blog with CMS
- Customer testimonial submission form
- Integration with CRM system
- Email marketing integration
