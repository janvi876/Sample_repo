import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', level: 90, category: 'frontend' },
  { name: 'CSS', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'React', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  { name: 'Next.js', level: 70, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'RESTful APIs', level: 85, category: 'backend' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Webpack', level: 70, category: 'tools' },
  { name: 'AWS', level: 60, category: 'tools' },
  
  // Other
  { name: 'UI/UX Design', level: 70, category: 'other' },
  { name: 'Agile Methodology', level: 80, category: 'other' },
  { name: 'Problem Solving', level: 90, category: 'other' },
  { name: 'AI/ML', level: 75, category: 'other' },
];