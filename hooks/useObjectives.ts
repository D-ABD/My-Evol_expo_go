import { useState } from 'react';

import { DEFAULT_OBJECTIVES } from '../constants/objectives';
import { Objective } from '../types/types';
import { saveObjectives, loadObjectives } from '../utils/storage';

export const useObjectives = () => {
  const [objectives, setObjectives] = useState<Objective[]>([]);

  const handleAddObjective = (newObjective: Objective) => {
    const updated = [...objectives, newObjective];
    setObjectives(updated);
    saveObjectives(updated);
  };

  const updateObjectives = (updated: Objective[]) => {
    setObjectives(updated);
    saveObjectives(updated);
  };

  const initObjectives = async () => {
    const loadedObjectives = await loadObjectives();
    if (!loadedObjectives || loadedObjectives.length === 0) {
      setObjectives(DEFAULT_OBJECTIVES);
      saveObjectives(DEFAULT_OBJECTIVES);
    } else {
      setObjectives(loadedObjectives);
    }
  };

  return {
    objectives,
    setObjectives,
    handleAddObjective,
    updateObjectives,
    initObjectives,
  };
};
