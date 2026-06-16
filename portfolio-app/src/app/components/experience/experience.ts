import { Component } from '@angular/core';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      title: 'Développeur Web',
      company: 'SNCF',
      location: 'Bisheim, Alsace',
      period: '2023 — 2024',
      description:
        "Développement et maintenance d'applications web internes pour la gestion opérationnelle. Conception de interfaces utilisateur modernes et intégration avec les systèmes d'information existants de la SNCF.",
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'REST API', 'SQL'],
    },
    {
      title: 'Développeur Applicatif',
      company: 'OCI',
      location: 'France',
      period: '2024 — 2025',
      description:
        "Développement d'applications métier sur mesure pour des clients grands comptes. Participation à l'ensemble du cycle de vie logiciel, de l'analyse des besoins au déploiement en production.",
      technologies: ['Java', 'Spring Boot', 'Angular', 'Docker', 'CI/CD', 'PostgreSQL'],
    },
  ];
}
