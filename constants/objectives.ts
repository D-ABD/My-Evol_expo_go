import { CATEGORIES } from './categories';
import { Objective } from '../types/types';

export const DEFAULT_OBJECTIVES: Objective[] = [
  { id: 1, category: CATEGORIES[0], target: 5, current: 2, percentage: 40 },
  { id: 2, category: CATEGORIES[1], target: 3, current: 3, percentage: 100 },
];
