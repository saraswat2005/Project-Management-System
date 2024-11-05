// localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    tasksCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Complete project report",
        description: "Prepare the final project report for submission.",
        date: "2024-10-21",
        category: "Documentation",
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      {
        title: "Team meeting",
        description: "Discuss milestones for next sprint.",
        date: "2024-10-20",
        category: "Meetings",
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0,
      },
      {
        title: "Client call",
        description: "Update client on project progress.",
        date: "2024-10-19",
        category: "Communication",
        active: 0,
        newTask: 0,
        completed: 1,
        failed: 1,
      },
    ],
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasksCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Fix login issue",
        description: "Resolve the login bug on the main page.",
        date: "2024-10-22",
        category: "Development",
        active: 1,
        newTask: 0,
        completed: 1,
        failed: 0,
      },
      {
        title: "Code review",
        description: "Review the new feature branch and provide feedback.",
        date: "2024-10-20",
        category: "Code Review",
        active: 0,
        newTask: 1,
        completed: 0,
        failed: 0,
      },
      {
        title: "Documentation update",
        description: "Update API documentation with latest changes.",
        date: "2024-10-18",
        category: "Documentation",
        active: 0,
        newTask: 1,
        completed: 0,
        failed: 1,
      },
    ],
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    tasksCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Design mockups",
        description: "Create UI/UX mockups for the new feature.",
        date: "2024-10-19",
        category: "Design",
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      {
        title: "Deploy to production",
        description: "Push the latest changes to the production environment.",
        date: "2024-10-21",
        category: "Deployment",
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0,
      },
      {
        title: "Write test cases",
        description: "Add test cases for new functionality.",
        date: "2024-10-22",
        category: "Testing",
        active: 0,
        newTask: 0,
        completed: 1,
        failed: 0,
      },
    ],
  },
  {
    id: 4,
    firstName: "Meena",
    email: "employee4@example.com",
    password: "123",
    tasksCount: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Social media campaign",
        description: "Plan a campaign for product launch.",
        date: "2024-10-20",
        category: "Marketing",
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      {
        title: "Inventory check",
        description: "Verify stock levels for end-of-month reporting.",
        date: "2024-10-19",
        category: "Operations",
        active: 0,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
      {
        title: "Feedback collection",
        description: "Collect feedback from customers.",
        date: "2024-10-22",
        category: "Customer Service",
        active: 0,
        newTask: 0,
        completed: 1,
        failed: 0,
      },
    ],
  },
  {
    id: 5,
    firstName: "Sunil",
    email: "employee5@example.com",
    password: "123",
    tasksCount: {
      active: 1,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        title: "Performance evaluation",
        description: "Evaluate team performance for the quarter.",
        date: "2024-10-23",
        category: "HR",
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0,
      },
      {
        title: "Vendor meeting",
        description: "Meet with vendors to discuss supply chain issues.",
        date: "2024-10-20",
        category: "Operations",
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 1,
      },
      {
        title: "Budget planning",
        description: "Prepare the budget for next quarter.",
        date: "2024-10-25",
        category: "Finance",
        active: 0,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
    ],
  },
  {
    id: 6,
    firstName: "Kiran",
    email: "employee6@example.com",
    password: "123",
    tasksCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Data migration",
        description: "Migrate old data to the new system.",
        date: "2024-10-24",
        category: "Data Management",
        active: 1,
        newTask: 0,
        completed: 0,
        failed: 0,
      },
      {
        title: "Security audit",
        description: "Conduct security audit of the application.",
        date: "2024-10-21",
        category: "Security",
        active: 1,
        newTask: 0,
        completed: 1,
        failed: 0,
      },
      {
        title: "API testing",
        description: "Test the new APIs for functionality.",
        date: "2024-10-22",
        category: "Testing",
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 0,
      },
    ],
  },
];

  const admin = [
    {
      id: 1,
      email: "admin@me.com",
      password: "123"
    }
  ];
  
  export const setLocalStorage = ()=>{
            localStorage.setItem('employees', JSON.stringify(employees)) // ye data ko normal string me convert krdega.
            localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    // ye data ko normal array me de dega
    
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
  }