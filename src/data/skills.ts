export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: ['Python', 'C', 'C++'],
  },
  {
    label: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    label: 'Backend & APIs',
    skills: ['Spring Boot', 'REST APIs', 'MQTT', 'API Integration'],
  },
  {
    label: 'Cloud',
    skills: ['AWS', 'AWS IoT Core', 'Amazon EC2', 'VPC'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'SQL'],
  },
  {
    label: 'Security',
    skills: ['X.509 Certificates', 'TLS/mTLS', 'AWS IoT Policies'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Linux'],
  },
  {
    label: 'Concepts',
    skills: [
      'Data Structures',
      'Algorithms',
      'IoT',
      'Cloud Computing',
      'Hybrid Cloud Networking',
    ],
  },
];
