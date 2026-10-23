# Employee Management System (EMS)

A React-based employee task management dashboard with separate admin and employee experiences. The app includes role-based login, task summaries, task status views, and demo data persisted in the browser.

## Features

- Role-based authentication for admins and employees
- Admin dashboard for creating tasks and reviewing employee workload
- Employee dashboard with task counts and status-specific task cards
- Session persistence across page refreshes
- Seeded demo accounts and task data
- Responsive UI built with Tailwind CSS

## Demo Accounts

| Role | Email | Password |
| --- | --- | --- |
| Admin | `admin@me.com` | `123` |
| Employee | `e1@e.com` | `123` |

Additional employee accounts are available with emails `e2@e.com` through `e5@e.com` and the same password, `123`.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Context API
- Browser `localStorage`

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/karankumar1106/Employee_management_system.git
cd EMS
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project Structure

```text
src/
├── components/
│   ├── Auth/              # Login interface
│   ├── Dashboard/         # Admin and employee dashboards
│   ├── others/            # Headers, task creation, and summaries
│   └── TaskList/          # New, active, completed, and failed task cards
├── context/
│   └── AuthProvider.jsx   # Application authentication context
├── utils/
│   └── LocalStorage.jsx   # Seed data and browser storage helpers
├── App.jsx                # Login routing and session handling
└── main.jsx               # Application entry point
```

## Data Storage

The app initializes sample employees and an admin account in `localStorage` under the `employees` and `admin` keys. The active session is stored under `loggedInUser`.

To restore the original demo data, remove these keys in the browser developer tools and refresh the page:

```js
localStorage.removeItem("employees");
localStorage.removeItem("admin");
localStorage.removeItem("loggedInUser");
```

The seed data is defined in `src/utils/LocalStorage.jsx`.

## Notes

This project is a frontend prototype. Credentials are stored only for demonstration purposes, authentication is handled in the browser, and data is not shared across devices. Do not use production passwords or sensitive employee information with this implementation.

## License

No license has been specified for this project.
