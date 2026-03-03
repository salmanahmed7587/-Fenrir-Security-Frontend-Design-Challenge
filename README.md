# Fenrir Security — Frontend Design Challenge

This project was built as part of the Fenrir Security frontend challenge. I focused on recreating a modern cybersecurity dashboard UI with realistic workflows and smooth user interaction.

During this challenge, I focused on component reusability, clean state management, and maintaining a scalable folder structure. I also ensured the UI remained responsive and accessible across different screen sizes.

## 🔗 Live Links

- **Live Demo:** [Fenrir Security Dashboard](https://vercel.com/salman-ahmeds-projects-ec0c7470/fenrir-security-frontend-design-challenge)
- **GitHub Repo:** [Source Code](https://github.com/salmanahmed7587/-Fenrir-Security-Frontend-Design-Challenge)

## Tech Stack

| Tool                | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| **React 18**        | UI library                                     |
| **Vite**            | Build tool & dev server                        |
| **Tailwind CSS v3** | Utility-first styling with `darkMode: 'class'` |
| **React Router v6** | Client-side navigation                         |
| **Lucide React**    | Icon set                                       |
| **react-hot-toast** | Toast notifications                            |

## Screens

| Screen             | Route        | Description                                    |
| ------------------ | ------------ | ---------------------------------------------- |
| Login / Sign-up    | `/`          | Split-layout with feature panel + sign-up form |
| Dashboard          | `/dashboard` | Org stats, scan table with search & filter     |
| Active Scan Detail | `/scan/:id`  | Live console, step tracker, finding log        |

## Setup

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- **Dark & Light Mode** — Togglable globally via the sun/moon icon in the sidebar. Persists in `localStorage`. Defaults to system preference.
- **Navigation** — Login → Dashboard (on form submit). Dashboard row click → Scan Detail. Back button → Dashboard.
- **Search** — Filters the scan table in real time by name, type, or status.
- **Live Console** — Simulates streaming log output with color-coded entries. Two tabs: Activity Log and Verification Loops.
- **Interactivity** — New Scan, Stop Scan, Export Report, Filter, Columns all trigger visible feedback (toasts / state changes).
- **Responsive** — Sidebar collapses to a drawer on mobile (375px). Tables scroll horizontally. Login stacks vertically.
- **Mock Data** — All data lives in `src/data/mockData.js`. Realistic scan entries, log lines, and vulnerability findings.

## Project Structure

```
src/
  components/
    common/         # Shared: Sidebar, SeverityBadge, StatusChip, Button, ThemeToggle
    login/          # LoginPage
    dashboard/      # Dashboard, StatsBar, ScanTable
    scan-detail/    # ScanDetail, CircularProgress, StepTracker, LiveConsole, FindingLog, StatusBar
  context/          # ThemeContext (dark/light mode)
  data/             # mockData.js
  App.jsx           # Router
  main.jsx          # Entry point
```

## Known Limitations

- No real backend — all data is hardcoded mock data
- Social login buttons (Apple, Google, Meta) navigate directly to dashboard (no OAuth)
- The live console simulates streaming; it does not connect to a real scan engine
- Filter and Columns panel UI is a toast placeholder (not fully implemented)
