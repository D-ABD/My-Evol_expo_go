// constants/badges.ts
import { Badge } from '../types/types';

export const DEFAULT_BADGES: Badge[] = [
  {
    id: 1,
    name: 'Premier pas',
    icon: 'https://cdn-icons-png.flaticon.com/512/3909/3909444.png',
    description: 'Créer une première entrée',
    unlocked: true,
    date: '2025-04-14',
  },
  {
    id: 2,
    name: 'Série de 7 jours',
    icon: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
    description: '7 jours consécutifs',
    unlocked: false,
  },
  {
    id: 3,
    name: 'Objectifs atteints',
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
    description: 'Atteindre tous ses objectifs hebdos',
    unlocked: false,
  },
  {
    id: 4,
    name: '10 entrées',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    description: 'Atteindre 10 entrées de journal',
    unlocked: false,
  },
];
