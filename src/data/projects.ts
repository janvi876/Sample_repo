import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product catalog, cart functionality, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
  },
  {
    id: '2',
    title: 'Weather Dashboard',
    description: 'Interactive weather application that displays current weather conditions and forecasts based on user location or search.',
    technologies: ['React', 'WeatherAPI', 'Tailwind CSS', 'Axios'],
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    liveUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/yourusername/weather-app',
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, featuring drag-and-drop functionality, priority levels, and deadline reminders.',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    imageUrl: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    liveUrl: 'https://example.com/taskmanager',
    githubUrl: 'https://github.com/yourusername/task-manager',
    featured: true,
  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media platforms, providing insights and statistics on audience engagement and growth.',
    technologies: ['Vue.js', 'Chart.js', 'Express', 'PostgreSQL'],
    imageUrl: 'https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    liveUrl: 'https://example.com/socialdashboard',
    githubUrl: 'https://github.com/yourusername/social-dashboard',
  },
];