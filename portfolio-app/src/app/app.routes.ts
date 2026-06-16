import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Travels } from './components/travels/travels';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'travels', component: Travels },
  { path: '**', redirectTo: '' },
];
