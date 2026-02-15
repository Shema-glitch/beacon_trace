# Ghost Finder Marketing Website - Design Specification

## Overview
**Objective:** Create a high-trust, engineer-grade marketing site for Ghost Finder, an offline-first Bluetooth device tracking application.
**Core Values:** Privacy, Utility, minimalism, Reliability.
**Target Audience:** Privacy-conscious users, tech enthusiasts, people who value offline capabilities.
**Design Philosophy:** "Form follows function." No decorative fluff. Every element must serve a purpose.

---

## 1. Visual Language & Typography

### Color Palette (High Contrast, Technical)
*   **Background (Canvas):** `#0A0A0A` (Near Black) - Reduces eye strain, feels premium/technical.
*   **Surface (Cards/Sections):** `#171717` (Dark Grey) - Subtle separation from canvas.
*   **Text (Primary):** `#EDEDED` (Off-White) - High readability against dark backgrounds.
*   **Text (Secondary):** `#A1A1AA` (Neutral Grey) - For supporting copy and metadata.
*   **Accent (Primary Brand):** `#22C55E` (Emerald 500) - Represents "Signal", "Found", "Safe", "Online". Used sparingly for CTAs and status indicators.
*   **Border/Divider:** `#262626` (Neutral 800) - Fine lines for structure.

### Typography
*   **Headings:** `Inter` (Variable, Tight tracking) or `Geist Sans`. Font Weight: 500-600.
    *   *Rationale:* Clean, modern, highly legible.
*   **Body:** `Inter` or `Roboto`. Font Weight: 400.
    *   *Rationale:* Standard for readability.
*   **Monospace (Technical Accents):** `JetBrains Mono` or `Fira Code`.
    *   *Usage:* Version numbers, technical specs, signal strength values, data privacy snippets.

### Spacing & Grid
*   **Grid:** 12-column grid.
*   **Container Width:** `max-w-5xl` (1024px) for main content to maintain readability.
*   **Vertical Rhythm:** Multiples of 4px. Sections separated by `py-20` (80px) or `py-24` (96px).
*   **Cards:** Minimal padding (`p-6`), thin borders (`1px`), sharp or slightly rounded corners (`rounded-lg`).

---

## 2. Animation & Interaction
*   **Principles:** fast, immediate, purposeful.
*   **Transitions:** `duration-200 ease-out`.
*   **Allowed Effects:**
    *   Simple fade-in for section content on scroll.
    *   Subtle color shift on hover for interactive elements.
    *   No parallax, no blur, no bounce.

---

## 3. Section Breakdown & Copy

### A. Hero Section
**Goal:** Immediate understanding of the value proposition. Zero confusion.
*   **Layout:** Centered or Left-aligned text with a minimal product visual on the right.
*   **Headline (H1):** `Locate Devices. Completely Cloudless.`
*   **Subheadline:** `The open-source, privacy-first alternative for Android device tracking. Works offline using peer-to-peer Bluetooth. No servers. No accounts.`
*   **CTAs:**
    1.  `[Primary Button] Download APK (v1.0-beta)` - Solid Accent Color.
    2.  `[Secondary Link] View Source Code` - Simple text link with arrow.
*   **Visual:** A schematic-style line drawing or high-contrast screenshot of the "Signal Strength" meter from the app.

### B. How It Works (Technical Breakdown)
**Goal:** Explain the "Offline" magic without marketing jargon.
**Layout:** 3 Horizontal columns (Desktop) / Vertical stack (Mobile). Icons should be Lucide/Heroicons (outline style).

1.  **Step 1: The Bond**
    *   *Icon:* `Link` or `Bluetooth`
    *   *Copy:* "Securely pair devices using local ECDH key exchange. No central server mediates the connection."
2.  **Step 2: The Scan**
    *   *Icon:* `Radar` or `Activity`
    *   *Copy:* "Passive background scanning logs proximity strength without draining battery. Data stays on-device."
3.  **Step 3: The Find**
    *   *Icon:* `MapPin` or `Navigation`
    *   *Copy:* "Follow the signal strength indicator to target location. Visual and haptic feedback guides you."

### C. Key Features (The Specs)
**Goal:** Highlight utility.
**Layout:** 2x2 Grid of cards.

*   **Feature 1: Zero Telemetry**
    *   "We don't know who you are. The app has no internet permission request in its manifest."
*   **Feature 2: Battery Conscious**
    *   "Optimized BLE scanning intervals ensure all-day battery life."
*   **Feature 3: Crypographically Secure**
    *   "Rolling IDs prevent third-party tracking. Keys never leave your hardware."
*   **Feature 4: Open Source**
    *   "Audit the code yourself. Built for community trust."

### D. Privacy & Data Handling (The Promise)
**Goal:** Absolute transparency.
**Layout:** A simple textual list or a "Terminal" like block displaying permissions.

*   *Heading:* "Privacy by Architecture"
*   *Content:*
    *   `[ ] Internet Access: DENIED`
    *   `[x] Bluetooth: LOCAL Only`
    *   `[x] Storage: ENCRYPTED`

### E. Roadmap (Status)
**Goal:** Show active development.
**Layout:** Simple timeline or checklist.

*   **Q1 2024:** Core Bluetooth Tracking (Done)
*   **Q2 2024:** WearOS Support (In Progress)
*   **Q3 2024:** Encrypted Mesh Networking (Planned)

### D. FAQ
**Goal:** Address immediate technical concerns.
*   **Q:** "Does this work if the other phone is off?"
    *   **A:** "No. Bluetooth requires power. However, the app logs the last known location before battery death."
*   **Q:** "Is there an iOS version?"
    *   **A:** "Not yet. Apple's strict background limitations make this specific protocol difficult to implement without their proprietary network."

### F. Footer
**Goal:** Navigation and Credibility.
*   *Links:* GitHub, Documentation, License (MIT).
*   *Copyright:* "© 2024 Ghost Finder Project. Open Source Software."
*   *Social:* Minimal icons for GitHub/Discord.

---

## 4. Layout Rules & CSS Variables (Draft)

```css
:root {
  --bg-primary: #0A0A0A;
  --bg-secondary: #171717;
  --text-primary: #EDEDED;
  --text-secondary: #A1A1AA;
  --accent: #22C55E;
  --border: #262626;
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```
