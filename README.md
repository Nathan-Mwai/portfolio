# Portfolio Development Journal

This repository serves as a long-term project focused on high-performance, cross-platform speed, and a premium responsive user experience. Built with React 19 and GSAP, it leverages cutting-edge web technologies to deliver a desktop-class interface in the browser.

### Current Status
The project has successfully transitioned to a multi-component architecture utilizing React 19's performance features. A fully functional mobile navigation system inspired by Apple's design language is now live. While the UI is largely complete, the application currently relies on dummy/placeholder data across all windows and components.

### Known Issues
- **Placeholder Data:** Content across the Terminal, Safari, Finder, and Contact components is currently hardcoded or sourced from `data/mock.json`.
- **GSAP Hydration:** Occasional minor layout shifts during GSAP initialization on slow client connections.
- **Mobile Interaction:** Some desktop-style draggable elements require further optimization for touch interactions.

### Next Steps
1.  **Responsiveness Sweep:** Finalizing breakpoints for tablet and ultra-wide displays.
2.  **API Integration:** Replacing placeholder JSON with a real-time backend or CMS integration.
3.  **Performance Profiling:** Fine-tuning GSAP timelines and React Activity blocks for sub-second TTI (Time to Interactive).
4.  **Touch Support:** Implementing better touch gestures for the `Draggable` window components.

---

### Journal / Progress Log

#### 2026-01-01
**Title: Finalized Mobile Navbar and Stability Fixes**
**Summary:** Implemented the mobile-specific navigation bar and addressed environment-specific performance issues dubbed "React2Shell".
**Details:**
- **Files changed:** `components/mobile/Navbar.tsx`, `app/page.tsx`, `package.json`; commit `777aa6e`.
- **Code-level changes:** Added `MobileNavbar` component featuring a "Dynamic Island" style layout with real-time clock via `dayjs`, Wi-Fi, and battery icons. Updated `next` to `16.0.10` for better stability.
- **Visual/UX changes:** Created a responsive design that hides the desktop Navbar and displays the Apple-like mobile status bar on screens below the `sm` breakpoint.
- **Remaining tasks:** Optimization of touch-based dragging for windows.
**Status:** Done

#### 2025-12-20
**Title: Mobile Navbar Implementation**
**Summary:** Scaffolding and initial styling of the mobile-first navigation experience.
**Details:**
- **Files changed:** `components/mobile/Navbar.tsx`; commit `1e1ed86`.
- **Code-level changes:** Initialized the mobile navbar component with basic layout and icon integration from `lucide-react`.
- **Visual/UX changes:** Integrated `dayjs` for the status bar clock and centered a "pill" shaped div to emulate the iPhone Dynamic Island.
**Status:** Done

#### 2025-12-07
**Title: Integrated React Activity for Performance Optimization**
**Summary:** Leveraged React 19's `Activity` (Offscreen) component to manage background rendering of complex UI elements, preventing frame drops during GSAP animations.
**Details:**
- **Files changed:** `app/page.tsx`, `components/Dock.tsx`, `components/Home.tsx`, `hoc/WindowWrapper.tsx`; commit `5d7783f`.
- **Code-level changes:** Wrapped heavy components like `Terminal`, `Safari`, and `Finder` in `<Activity>`. This allows the browser to prioritize the immediate visual feedback of GSAP animations (like the Dock's magnification effect) while pre-rendering hidden window contents.
- **Rationale:** Given the heavy use of client-side rendering and GSAP, `Activity` ensures that background windows don't consume main-thread resources until they are active, significantly improving the snappiness of the desktop shell.
- **Visual/UX changes:** Eliminated "flashing" of content during window transitions by pre-calculating styles in `WindowWrapper.tsx`.
- **Remaining tasks:** Replace dummy data in `data/mock.json` with API integration.
**Status:** Done

#### 2025-11-25
**Title: Core Feature Set Completion**
**Summary:** Finalized the primary windows and location-based state management.
**Details:**
- **Files changed:** `windows/Finder.tsx`, `store/location.ts`, `windows/Contact.tsx`; commits `b03a073` to `d033fe3`.
- **Code-level changes:** Implemented a centralized location store to manage the "filesystem" state across the Finder and Desktop. Created window wrappers for Contact and Resume components.
**Status:** Done

#### 2025-11-10
**Title: Initial Shell and State Management**
**Summary:** Established the project's foundation with Zustand for state and GSAP for the core animation engine.
**Details:**
- **Files changed:** `store/window.ts`, `components/Navbar.tsx`, `components/Dock.tsx`; commits `ac67eca` to `c8164c2`.
- **Code-level changes:** Created the `useWindowStore` to track open/minimized/focused windows. Set up the basic MacOS-inspired grid layout and navigation.
**Status:** Done


### Update: 2026-01-31


* I integrated Google's Gemini AI to help automate my project documentation.
* I wrote a new script that analyzes my git diffs to generate journal entries automatically.
* I set up a GitHub Action workflow to trigger these updates whenever I push new code.
* I added the generative-ai dependency to the project.
* It’s exciting to have a portfolio that can now help document its own evolution!

### Update: 2026-01-31

* I automated my project documentation by integrating Google's Gemini AI.
* I created a new script that analyzes my git diffs to generate journal entries.
* I set up a GitHub Action to trigger these updates automatically whenever I push code.
* I added the generative AI dependency to the project.
* It’s pretty cool to have a portfolio that handles its own updates now!

### Update: 2026-02-02

* I built out the mobile version of the Safari window to make the portfolio more responsive.
* I added a new blog section within the Safari view, complete with post previews and links.
* I designed a mobile-friendly browser UI, including a functional-looking search bar and navigation footer.
* I integrated the new Safari component into the main page and added all the necessary styles to keep the mobile experience consistent.

### Update: 2026-02-02

* I built a new mobile-specific resume component to ensure my CV looks great on smaller screens.
* I added dark mode support to the resume viewer, including a color inversion filter for the PDF itself.
* I integrated the mobile resume into the main page and updated my global CSS for better responsive handling.
* I implemented a resize observer to make sure the PDF document scales perfectly to the device width.

### Update: 2026-02-02

* I updated my journal automation script to allow for slightly longer, more descriptive entries.
* I built a new mobile-specific Finder component to make sure the file explorer feels natural on smaller screens.
* I added all the necessary CSS for the mobile file browser, including a touch-friendly grid and breadcrumb navigation.
* I integrated the new MobileFinder into the main page layout so it's ready to use.
* I implemented the folder navigation logic, allowing me to browse directories and open various file types directly from the mobile UI.

### Update: 2026-02-02

* I started working on the mobile experience for text files by creating a new `MobileText` component.
* I added some specific global CSS for the mobile text view to make sure it looks right on smaller screens, including full-screen behavior and proper spacing.
* I integrated the new mobile window into the main page layout so it's ready to be used alongside the desktop version.
* I also made sure the text content, including subtitles and descriptions, renders correctly within the mobile wrapper.

### Update: 2026-02-02

- I updated my journal script to ensure these automated entries now include descriptive titles.
- I created a new mobile image viewer component to handle file previews on smaller screens.
- I added some custom CSS to style the mobile image previewer, making sure it covers the screen and handles image scaling correctly.
- I integrated the new mobile image component into the main page layout so it’s functional within the app's windowing system.

### Update: 2026-02-02 - Improving Journaling and Mobile Previews 

- I updated my automated journaling script to support and require descriptive titles for every entry moving forward.
- I created a new `MobileImage` component to provide a dedicated preview experience for images on smaller screens.
- I added some global CSS to ensure mobile image previews are full-screen and handle scaling properly.
- I hooked the new mobile image viewer into the main page layout so it’s fully integrated into the app's windowing system.

### Update: 2026-02-03 - Adding Mobile Contact Component 

* I built a new `MobileContact` component to give mobile users a dedicated way to find my social links.
* I added a bunch of new styles to the global CSS to handle the mobile contact layout, including nice hover effects for the link cards.
* I integrated the new component into the main page structure so it's officially part of the app's mobile workflow.
* I included my profile picture and a brief call-to-action to make the mobile "Let's Connect" section feel more personal.

### Update: 2026-02-03 - Launching Mobile Contact Section 

* I built a new `MobileContact` component to give mobile users a dedicated place to find my social links.
* I added a bunch of global CSS to handle the mobile contact layout, including some smooth hover effects for the link cards.
* I integrated the new component into the main page layout so it's officially part of the mobile windowing system.
* I refactored how I load GSAP and react-pdf by switching to dynamic imports to help optimize the app's performance.
* I updated the resume viewer to handle client-side loading more gracefully.

### Update: 2026-02-03 - Added Mobile Home Screen Navigation 

* I implemented a new `MobileHome` component to provide a dedicated navigation interface for smaller screens.
* I added clickable app icons for the Resume and Terminal, hooking them up to the window management system.
* I updated the global CSS to include specific styling and hover effects for these mobile icons.
* I tweaked the welcome screen layout to ensure it doesn't interfere with touch events on mobile devices.
* I integrated the mobile home view into the main page layout.

### April 25, 2026 - Implementation of core portfolio windowing system and profile personalization

- **Changes:** Integrated a functional PDF viewer with pagination controls, added "Coming Soon" states for the Safari blog component, and updated all constants, images, and the resume to reflect Nathan Mwaniki's professional profile.
- **Rationale:** These changes transition the application from a generic template to a personalized professional portfolio while enhancing the interactivity of the document viewing experience.
- **Impact:** Establishes a branded user interface with functional window management and document navigation, providing a polished foundation for future content updates and the "Building in Public" initiative.

### April 25, 2026 - SEO and Metadata Optimization

- **Changes:** Expanded the root layout's metadata configuration to include comprehensive SEO tags, OpenGraph properties, Twitter card support, and canonical links. Integrated the `baseline-browser-mapping` dependency into the project.
- **Rationale:** To enhance search engine discoverability and ensure professional, consistent branding across social media platforms through rich link previews.
- **Impact:** Improves the application's SEO ranking and social presence while providing a robust metadata template for page-specific overrides.

### April 25, 2026 - Root Layout and Deployment Configuration Initialization

- **Changes:** Updated the root layout to include a base URL for metadata and enabled static site generation by setting the output mode to 'export' in the Next.js configuration.
- **Rationale:** These modifications establish a consistent foundation for SEO metadata resolution and prepare the application for static hosting.
- **Impact:** Ensures correct metadata pathing for search engines and allows the project to be deployed as a static site.