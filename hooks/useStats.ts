import { useState } from 'react';

import { createEmptyCategoryDistribution } from '../constants/categories';
import { Stats } from '../types/types';
import { loadData } from '../utils/storage';

export const useStats = () => {
  const [stats, setStats] = useState<Stats>({
    todayEntries: 0,
    totalEntries: 0,
    currentStreak: 0,
    level: 1,
    moodData: [],
    categoryDistribution: createEmptyCategoryDistribution(),
  });

  const initStats = async () => {
    const loadedStats = await loadData<Stats>('myevol_stats');
    if (loadedStats) {
      setStats((prev) => ({
        ...prev,
        ...loadedStats,
        categoryDistribution: {
          ...createEmptyCategoryDistribution(),
          ...(loadedStats.categoryDistribution || {}),
        },
      }));
    }
  };

  return {
    stats,
    setStats,
    initStats,
  };
};
