export const projects = [
  {
    slug: "banking",
    title: "Digital Banking App",
    category: "UI / UX Design",
    image: "/projects/banking.png",
    description:
      "A modern banking experience focused on simplicity, usability and clean interaction.",
    tags: ["UX Research", "UI Design", "Prototype"],
    overview:
      "A full-scale digital banking application designed to simplify personal finance management. The project focused on creating an intuitive, secure, and accessible banking experience for a diverse user base.",
    problem:
      "Users found traditional banking apps cluttered and overwhelming. Key pain points included complex navigation, hard-to-find transaction history, and confusing budgeting tools. The challenge was to strip away complexity while maintaining full functionality.",
    approach:
      "We conducted user research with 30 participants across different age groups, created journey maps to identify friction points, and iterated through low-fidelity wireframes to high-fidelity prototypes. Each design decision was validated through usability testing.",
    solution:
      "A clean, card-based interface with bottom navigation for thumb-friendly reach. Smart defaults and progressive disclosure reduce cognitive load. Real-time push notifications and biometric authentication enhance security without adding friction.",
    results: [
      "40% reduction in task completion time",
      "92% user satisfaction score in testing",
      "4.8★ average app store rating",
      "35% increase in daily active users",
    ],
    link: "#",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    category: "Web Design",
    image: "/projects/ecommerce.png",
    description:
      "Designing a seamless shopping experience with intuitive user flow.",
    tags: ["Wireframe", "Design System", "Figma"],
    overview:
      "A comprehensive e-commerce platform redesign aimed at increasing conversion rates and improving the overall shopping experience from discovery to checkout.",
    problem:
      "The existing platform suffered from high cart abandonment rates (78%) and poor mobile experience. Product discovery was difficult with cluttered category pages and a slow, multi-step checkout process.",
    approach:
      "Started with competitive analysis and heuristic evaluation. Created user personas based on shopping behavior data. Designed a modular design system for consistency, then iterated on the checkout flow with A/B testing.",
    solution:
      "A streamlined single-page checkout with guest purchase option. Intelligent search with visual filters, personalized product recommendations, and a mobile-first responsive layout. Saved carts and wishlists reduced friction for returning users.",
    results: [
      "45% decrease in cart abandonment",
      "28% increase in conversion rate",
      "60% improvement in mobile checkout speed",
      "3.2× return on design investment",
    ],
    link: "#",
  },
  {
    slug: "dashboard",
    title: "Dashboard System",
    category: "Product Design",
    image: "/projects/dashboard.png",
    description: "A scalable dashboard interface for data-driven products.",
    tags: ["UI Design", "React", "Components"],
    overview:
      "A scalable analytics dashboard designed for data-heavy SaaS products. The goal was to present complex data in a clear, actionable way without overwhelming users.",
    problem:
      "Users struggled to find relevant metrics among dozens of charts and tables. The information architecture was flat, customization was non-existent, and loading times were slow due to unoptimized data queries.",
    approach:
      "Conducted card-sorting exercises to restructure information architecture. Designed a modular widget system that lets users build custom views. Worked closely with engineers to optimize data fetching and caching.",
    solution:
      "A customizable drag-and-drop dashboard with smart defaults based on user role. Progressive loading with skeleton states, interactive charts with drill-down capability, and a unified date-range filter that applies across all widgets.",
    results: [
      "55% faster time to insight",
      "80% of users customized their dashboard",
      "70% reduction in page load time",
      "NPS score increased from 32 to 68",
    ],
    link: "#",
  },
  {
    slug: "warehouse",
    title: "Warehouse Management System",
    category: "UI / UX Design",
    image: "/projects/warehouse.png",
    description:
      "A modern warehouse management solution focused on efficiency and usability.",
    tags: ["UX Research", "UI Design", "Prototype"],
    overview:
      "A warehouse management system designed for logistics operators. The project focused on reducing errors, speeding up workflows, and improving operator satisfaction in a high-pressure environment.",
    problem:
      "Warehouse operators were using a legacy system with small touch targets, confusing navigation, and no support for scanning workflows. Error rates were high (12%) and training new staff took 3+ weeks.",
    approach:
      "Spent a week on-site observing operators and conducting contextual interviews. Mapped out every workflow step and identified bottlenecks. Designed for ruggedized tablets with glove-friendly touch targets and barcode scanning integration.",
    solution:
      "A high-contrast, large-target interface optimised for bright warehouse lighting. Streamlined put-away and picking flows with scan confirmation at every step. Offline mode ensures continuity during network outages.",
    results: [
      "90% reduction in picking errors",
      "2.5× faster order processing",
      "1 week reduction in training time",
      "85% operator satisfaction score",
    ],
    link: "#",
  },
];
