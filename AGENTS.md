# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

A high-performance, desktop-class portfolio website built with React 19 and GSAP animations, featuring a macOS-inspired interface. The project emphasizes cross-platform speed, responsive design, and premium user experience with interactive window management, draggable components, and mobile-optimized views.

## Tech Stack

- **Framework**: Next.js 16.0.10 with React 19.2.0
- **Animation**: GSAP 3.13.0 with @gsap/react for desktop-class interactions
- **State Management**: Zustand 5.0.8 with Immer middleware
- **Styling**: Tailwind CSS 4 (via @tailwindcss/postcss)
- **Type Safety**: TypeScript 5 with strict mode enabled
- **Additional Libraries**: 
  - `react-pdf` for resume viewing
  - `dayjs` for mobile status bar clock
  - `lucide-react` for icons

## Development Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint check
npm run lint
```

**Note**: There are no test scripts configured. Do not assume any test framework exists.

## Architecture

### State Management

The application uses **two primary Zustand stores** located in `store/`:

1. **`useWindowStore`** (`store/window.ts`): Manages window lifecycle
   - Opens/closes/focuses windows (Terminal, Safari, Finder, Resume, Contact, etc.)
   - Tracks z-index for window stacking
   - Stores window-specific data payloads
   - Uses immer for immutable state updates

2. **`useLocationStore`** (`store/location.ts`): Manages filesystem navigation
   - Tracks the active folder/location displayed in Finder
   - Defaults to `locations.work` from constants
   - Used for the file browser experience

### Window System

Windows are defined by `WindowKey` type in `type.d.ts`:
```typescript
type WindowKey = "finder" | "contact" | "resume" | "safari" | "photos" | "terminal" | "txtfile" | "imgfile"
```

Each window has two implementations:
- **Desktop**: Wrapped with `WindowWrapper` HOC in `hoc/WindowWrapper.tsx`
- **Mobile**: Separate mobile components in `windows/mobile/` and `components/mobile/`

**`WindowWrapper` HOC** (desktop only):
- Adds GSAP entrance animations (scale + opacity fade)
- Implements drag functionality via GSAP's `Draggable`
- Manages z-index and display state
- Automatically hides on mobile (<640px breakpoint)

### Component Organization

```
app/
  page.tsx         # Main composition, wraps heavy components in React 19's <Activity>
  layout.tsx       # Root layout with fonts (Georama, Roboto Mono)
  
components/
  Navbar.tsx       # Desktop top menu bar
  Dock.tsx         # Desktop dock with GSAP magnification effect
  Home.tsx         # Desktop background/wallpaper
  Welcome.tsx      # Initial landing screen with GSAP intro
  mobile/          # Mobile-specific UI components
    Navbar.tsx     # Mobile status bar (Dynamic Island style)
    
windows/
  Finder.tsx       # File browser (uses useLocationStore)
  Safari.tsx       # Browser window with blog posts
  Terminal.tsx     # Skills/tech stack display
  Resume.tsx       # PDF viewer
  Contact.tsx      # Contact form/info
  Text.tsx         # Text file viewer
  Image.tsx        # Image viewer
  mobile/          # Mobile window variants
    
store/
  window.ts        # Window state management
  location.ts      # Filesystem navigation state
  
constants/
  index.ts         # All static data: locations, projects, blog posts, dock apps, social links
  
type.d.ts          # TypeScript type definitions
```

### Data Structure

All content is defined in `constants/index.ts` as TypeScript constants:

- **`locations`**: Filesystem structure (work projects, about, resume, trash)
  - Each location is a `FolderNode` with nested `children`
  - File types: `txt`, `url`, `img`, `fig`, `pdf`
  - Positions are Tailwind classes (e.g., `"top-10 left-5"`)

- **`dockApps`**: Dock icon configuration (6 apps)
  - Maps to `WindowKey` via `id` field
  - Includes mobile visibility flag (`showOnMobile`)

- **`WINDOW_CONFIG`**: Initial window states (z-index: 1000)

- **`blogPosts`**: Articles displayed in Safari
- **`techStack`**: Skills shown in Terminal
- **`socials`**: Contact links
- **`gallery`** / **`photosLinks`**: Photo viewer content

**Important**: Content is NOT loaded from `data/mock.json` despite README mentions. All data lives in `constants/index.ts`.

### GSAP Animation Patterns

1. **Dock Magnification** (`components/Dock.tsx`):
   - Uses exponential decay formula: `intensity = exp(-(distance^2.5) / DISTANCE_DECAY)`
   - `DISTANCE_DECAY = 20000` (constant in `constants/index.ts`)
   - Scales icons up to 1.25x and translates Y by -15px on hover

2. **Window Entrance** (`hoc/WindowWrapper.tsx`):
   - Animates from `{scale: 0.8, opacity: 0, y: 40}` to `{scale: 1, opacity: 1, y: 0}`
   - Duration: 0.4s with `power3.out` easing

3. **Component Preloading**:
   - Heavy components wrapped in `<Activity>` (React 19's Offscreen API) in `app/page.tsx`
   - Prevents frame drops during GSAP animations by pre-rendering inactive windows

### Responsive Design

- **Breakpoint**: `640px` (Tailwind's `sm` breakpoint)
- Desktop components conditionally render based on `window.innerWidth >= 640`
- Mobile has separate navbar (Dynamic Island style), window headers, and full-screen layouts
- Mobile windows do NOT use WindowWrapper or drag functionality

## Path Aliases

TypeScript configured with:
```json
"paths": { "@/*": ["./*"] }
```

All imports use `@/` prefix for absolute paths from project root.

## CI/CD

GitHub Actions workflow: `.github/workflows/update_readme.yml`
- Triggers on PRs to `2025-portfolio` branch
- Uses Google Gemini AI (via `.github/scripts/update_journal.mjs`) to auto-generate README journal entries from git diffs
- Requires `GEMINI_API_KEY` secret

## Code Style

- **ESLint**: Uses Next.js config (`eslint-config-next/core-web-vitals` + `typescript`)
- **TypeScript**: Strict mode enabled, target ES2017
- **React 19 Features**: Uses `<Activity>` component for performance optimization
- **State Updates**: Always use Zustand's immer middleware for immutability

## Common Patterns

### Opening a Window
```typescript
const { openWindow } = useWindowStore()
openWindow("finder", optionalData)
```

### Navigating Finder Locations
```typescript
const { setActiveLocation } = useLocationStore()
setActiveLocation(locations.work)
```

### Adding New Windows
1. Define `WindowKey` in `type.d.ts`
2. Add state to `WINDOW_CONFIG` in `constants/index.ts`
3. Create component in `windows/` (and `windows/mobile/` if needed)
4. Wrap desktop version with `WindowWrapper(Component, windowKey)`
5. Add to `app/page.tsx` (inside `<Activity>` if heavy)
6. Optionally add dock icon to `dockApps` in `constants/index.ts`

### GSAP Registration
Always register plugins before use:
```typescript
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)
```

## Known Issues

- **GSAP Hydration**: Occasional layout shifts during GSAP initialization on slow connections
- **Touch Interactions**: Desktop drag elements need optimization for touch (not currently implemented)
- **Placeholder Content**: Some content in `constants/index.ts` is marked with TODO comments for updates

## Performance Considerations

- Use `<Activity>` wrapper for computationally expensive components
- WindowWrapper pre-calculates styles at render time to avoid flash of content
- Images use Next.js `<Image>` component with lazy loading
- GSAP instances are properly cleaned up in useEffect/useGSAP return functions

## Font Loading

Two Google Fonts loaded via `next/font`:
- **Georama**: Primary UI font (CSS var: `--font-georama`)
- **Roboto Mono**: Monospace font (CSS var: `--font-roboto`)

Applied globally in `app/layout.tsx`.
