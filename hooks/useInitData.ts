import { useEffect } from 'react';

import { useJournal } from './useJournal';
import { useObjectives } from './useObjectives';
import { useStats } from './useStats';
import { DEFAULT_BADGES } from '../constants/badges';
import { Category } from '../constants/categories';
import { Badge, Stats } from '../types/types';
import { loadBadges } from '../utils/storage';

type InitHookResult = {
  journal: ReturnType<typeof useJournal>;
  stats: ReturnType<typeof useStats>;
  objectives: ReturnType<typeof useObjectives>;
};

export const useInitData = (
  selectedCategory: Category, // ✅ Ajouté
  setBadges: (badges: Badge[]) => void,
  setStats: (stats: Stats) => void,
  stats: Stats
): InitHookResult => {
  const journal = useJournal(selectedCategory, setStats, stats); // ✅ OK maintenant
  const statsHook = useStats();
  const objectivesHook = useObjectives();

  useEffect(() => {
    const loadAll = async () => {
      await Promise.all([
        journal.initEntries(),
        statsHook.initStats(),
        objectivesHook.initObjectives(),
        loadBadges().then((badges) => {
          if (!badges || badges.length === 0) {
            setBadges(DEFAULT_BADGES);
          } else {
            setBadges(badges);
          }
        }),
      ]);
    };

    loadAll();
  }, []);

  return {
    journal,
    stats: statsHook,
    objectives: objectivesHook,
  };
};
