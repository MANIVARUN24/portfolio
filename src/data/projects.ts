export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  highlighted?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AWS Direct Connect Design Study for a Manufacturing Plant',
    description:
      'Engineered an end-to-end manufacturing telemetry platform integrating 3 sensor types with AWS IoT Core through a Python edge gateway for real-time monitoring.',
    technologies: [
      'AWS',
      'AWS IoT Core',
      'Python',
      'Spring Boot',
      'React',
      'PostgreSQL',
      'Amazon EC2',
      'MQTT',
    ],
    features: [
      'Integrated 3 sensor types with AWS IoT Core',
      'Python-based edge gateway for sensor data collection',
      'Secure MQTT telemetry with TLS/mTLS encryption',
      'X.509 certificate-based device authentication',
      'AWS IoT policies for fine-grained access control',
      'Spring Boot backend with 6 REST APIs',
      'PostgreSQL database for telemetry persistence',
      'Deployed backend on Amazon EC2',
      'AWS Direct Connect architecture design study',
      'Site-to-Site VPN evaluated as alternative approach',
    ],
    githubUrl: 'https://github.com/MANIVARUN24/cc-hackathon',
    highlighted: true,
  },
  {
    id: 2,
    title: 'Manora Café',
    subtitle: 'Full-Stack Café Management & Online Ordering System',
    description:
      'A full-stack café management and real-time ordering platform engineered to streamline customer ordering, kitchen operations, and administrative workflows using Supabase as the backend.',
    technologies: ['Supabase', 'PostgreSQL', 'Python', 'JavaScript', 'REST APIs', 'Row-Level Security (RLS)', 'Vercel'],
    features: [
      'Customer-facing digital ordering and checkout interface',
      'Supabase Authentication and Role-Based Access Control (RBAC) for staff & customers',
      'Supabase PostgreSQL database with Row-Level Security (RLS) policies for data isolation',
      'Real-time order state updates and order lifecycle management',
      'Dynamic menu catalogue and automated cart & invoice calculation',
      'RESTful API integration layer connecting frontend workflows with backend services',
      'Deployed production web application on Vercel',
    ],
    githubUrl: 'https://github.com/MANIVARUN24/manora-cafe',
    highlighted: false,
  },
  {
    id: 3,
    title: 'Student Portfolio Management',
    subtitle: 'Academic & Technical Portfolio Record Management System',
    description:
      'A structured web application designed to centralise, manage, and present student academic achievements, technical projects, and skill proficiencies with dynamic DOM rendering and CRUD workflows.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'CRUD Architecture', 'DOM APIs', 'State Management', 'Git'],
    features: [
      'Centralised student academic achievement and technical project tracking',
      'Client-side form validation and input sanitisation engine',
      'Modular JavaScript architecture implementing structured CRUD operations',
      'Dynamic DOM rendering and state manipulation without full page reloads',
      'Categorised skills taxonomy and project showcase viewer',
      'Responsive browser-based UI for desktop and mobile devices',
      'Clean Git version control and open-source project structure',
    ],
    githubUrl: 'https://github.com/MANIVARUN24/student-portfolio-management',
    highlighted: false,
  },
];
