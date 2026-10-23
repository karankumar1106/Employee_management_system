// localStorage.clear();
const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e1@e.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard UI",
        taskDescription: "Create a responsive sidebar and header for the admin portal.",
        taskDate: "2026-10-22",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Auth Context",
        taskDescription: "Configure global state management for application context.",
        taskDate: "2026-10-20",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "e2@e.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 0, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Fix API Auth Bugs",
        taskDescription: "Resolve local storage persistence glitches on page reload.",
        taskDate: "2026-10-23",
        category: "Backend"
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "e3@e.com",
    password: "123",
    taskCounts: { active: 1, newTask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Database Queries",
        taskDescription: "Improve MongoDB query performance for bulk employee fetching.",
        taskDate: "2026-10-24",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write API Documentation",
        taskDescription: "Document endpoints for login and token refresh.",
        taskDate: "2026-10-18",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    firstName: "Priya",
    email: "e4@e.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 0, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Onboarding Form",
        taskDescription: "Build multi-step registration flow using Formik & Yup validation.",
        taskDate: "2026-10-25",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Integrate Payment Gateway",
        taskDescription: "Sandbox credentials expired before finishing integration testing.",
        taskDate: "2026-10-15",
        category: "Payment"
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "e5@e.com",
    password: "123",
    taskCounts: { active: 0, newTask: 0, completed: 2, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup CI/CD Pipeline",
        taskDescription: "Configure GitHub Actions workflow for automatic deployment.",
        taskDate: "2026-10-19",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Unit Testing",
        taskDescription: "Write Jest test cases for login validation functions.",
        taskDate: "2026-10-21",
        category: "Testing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};