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
    title: 'MANORA-CAFE',
    subtitle: 'Cafe Management System',
    description:
      'Created a web-based cafe management system for centralized order, user, and staff management with role-based access control.',
    technologies: ['Python', 'Web Technologies', 'SQL', 'API Integration'],
    features: [
      'Order management module',
      'User and staff management',
      'Role-based access control',
      'SQL database workflows',
      'API integration layer',
      'Centralized application data management',
    ],
    highlighted: false,
  },
  {
    id: 3,
    title: 'Smart Face Recognition System',
    description:
      'Developed a face recognition solution for Smart India Hackathon to support monitoring of mid-day meal distribution in government schools.',
    technologies: ['React', 'JavaScript', 'Web Technologies'],
    features: [
      'Student monitoring via face recognition',
      'React-based frontend interface',
      'School management use case',
      'Built for Smart India Hackathon',
      'Mid-day meal distribution tracking for government schools',
    ],
    highlighted: false,
  },
];
