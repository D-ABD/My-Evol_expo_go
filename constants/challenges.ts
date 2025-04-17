// constants/challenges.ts

import { Challenge } from '../types/types';

export const DEFAULT_CHALLENGES: Challenge[] = [
  {
    id: 1,
    title: 'Défi Gratitude',
    description: 'Notez 3 choses positives chaque jour pendant 5 jours',
    duration: 5,
    progress: 3,
    totalDays: 5,
  },
  {
    id: 2,
    title: 'Objectif Bien-être',
    description: 'Évaluez votre humeur chaque jour pendant 7 jours',
    duration: 7,
    progress: 5,
    totalDays: 7,
  },
];
