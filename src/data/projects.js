export const projects = [
  {
    title: 'NovaCart',
    status: { label: 'Completed', kind: 'done' },
    subtitle: 'Full-stack e-commerce web app',
    points: [
      'Customer storefront and admin dashboard built with React, Node, Express and MongoDB.',
      'JWT sign-in, search and filters, cart, wishlist, reviews, orders and user profiles.',
      'Razorpay payments and Cloudinary image uploads. Frontend on Vercel, backend on Render.',
    ],
    tags: ['React', 'Node', 'Express', 'MongoDB', 'JWT'],
    links: [
      { label: 'Live demo', href: 'https://nova-cart-ruby.vercel.app/', external: true },
      { label: 'GitHub', href: 'https://github.com/baskargdev/NovaCart', external: true },
    ],
  },
  {
    title: 'LifePilot AI',
    status: { label: 'In Progress', kind: 'prog' },
    subtitle: 'Personal AI Assistant & Productivity Platform',
    points: [
      'Smart daily planner, goal tracker, and AI-powered study planner to organize daily activities and learning schedules.',
      'Expense tracking, notes management, smart reminders, and productivity progress dashboard.',
      'Responsive dashboard with dark/light mode, designed to manage personal tasks and goals in one place.',
    ],
    tags: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    // Placeholder links: replace "#projects" with the real URLs and add `external: true`.
    links: [
      { label: 'Live demo', href: '#projects', placeholder: 'demo' },
      { label: 'GitHub', href: '#projects', placeholder: 'github' },
    ],
  },
  {
    title: 'HireTrack',
    status: { label: 'In Progress', kind: 'prog' },
    subtitle: 'Job Portal & Recruitment Management System',
    points: [
      'Job portal connecting candidates and recruiters with role-based access and authentication.',
      'Candidate and recruiter workflows for managing job applications and recruitment activities.',
      'REST API development with Spring Boot, database integration, and secure backend architecture.',
    ],
    tags: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Spring Data JPA', 'Hibernate', 'JWT', 'Tailwind CSS'],
    // Placeholder links: replace "#projects" with the real URLs and add `external: true`.
    links: [
      { label: 'Live demo', href: '#projects', placeholder: 'demo' },
      { label: 'GitHub', href: '#projects', placeholder: 'github' },
    ],
  },
]
