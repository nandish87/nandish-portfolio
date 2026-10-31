# Nandish — Personal Portfolio

Modern, high-performance personal portfolio landing page for **Y Nandish**, Web Developer at **Monolith Agency** ([getmonolith.in](https://getmonolith.in)).

## Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3 with fluid typography (`clamp()`) and custom dark theme (`#0C0C0C`)
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **Typography**: Google Fonts Kanit (300-900)

## Features & Sections
1. **Hero Section**: Massive fluid heading (`"Hi, i'm nandish"`), physics-based magnetic 3D portrait, and responsive navbar.
2. **Dual-Row Marquee**: 21 scroll-driven motion preview cards showcasing production projects from Monolith and Glocal Research Hub.
3. **About Me**: Character-by-character scroll reveal text with floating iridescent 3D decorations and role bullet chips.
4. **My Daily Stack**: Interactive showcase of daily engineering tools (Next.js, Three.js, Python, Cursor, Claude Code, Google Antigravity, Figma, Node.js, Tailwind CSS).
5. **Services**: High-contrast white section highlighting web development, agentic AI, and UI engineering capabilities.
6. **Sticky Stacking Projects**:
   - `01` **Monolith** (Agency Platform & Autonomous Commerce)
   - `02` **Personal Portfolio** (Interactive 3D Web & AI Showcase)
   - `03` **Glocal Research Hub** (Client Strategic Advisory & Global Intelligence)
7. **Contact**: Quick-connect buttons, direct email, phone, and social links.

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```

---

## Deploying to Cloudflare Pages

### Step 1: Connect Repository
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Compute (Workers) > Workers & Pages** and click **Create application > Pages**.
3. Select **Connect to Git** and choose the `nandish87/nandish-portfolio` repository.

### Step 2: Build Configuration
Configure the build settings as follows:

| Field | Value |
|---|---|
| **Framework preset** | `Vite` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (leave empty) |

### Step 3: Environment Variables (Optional)
- `NODE_VERSION`: `20` (also specified in `.nvmrc`)

Click **Save and Deploy**. Cloudflare Pages will build the site in seconds and provide a global CDN URL!
