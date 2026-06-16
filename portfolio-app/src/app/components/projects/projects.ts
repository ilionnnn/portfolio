import { Component } from '@angular/core';

interface Project {
  icon: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      icon: '🛒',
      title: 'E-Commerce Platform',
      description:
        'Application e-commerce full stack avec gestion des produits, panier, paiement et tableau de bord administrateur.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
      github: '#',
    },
    {
      icon: '📊',
      title: 'Dashboard Analytics',
      description:
        'Tableau de bord de visualisation de données en temps réel avec graphiques interactifs et exports PDF.',
      technologies: ['Angular', 'Chart.js', 'REST API', 'TypeScript'],
      github: '#',
    },
    {
      icon: '🤖',
      title: 'Task Manager CLI',
      description:
        'Gestionnaire de tâches en ligne de commande avec synchronisation cloud, tags et rappels automatiques.',
      technologies: ['Java', 'Spring Boot', 'SQLite', 'CLI'],
      github: '#',
    },
    {
      icon: '🗺️',
      title: 'Travel Tracker',
      description:
        'Application de suivi de voyages avec carte interactive, journal personnel et partage de galeries photos.',
      technologies: ['Angular', 'Leaflet.js', 'Node.js', 'MongoDB'],
      github: '#',
    },
  ];
}
