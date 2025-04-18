import { useState } from 'react';
import Toast from 'react-native-toast-message';

import { createEmptyCategoryDistribution } from '../constants/categories';
import { DEFAULT_MOOD } from '../constants/settings';
import { Category, Entry, Stats } from '../types/types';
import { saveEntries, loadEntries, saveData } from '../utils/storage';

export const useJournal = (
  selectedCategory: Category,
  setStats: (updated: Stats) => void,
  stats: Stats
) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [mood, setMood] = useState(DEFAULT_MOOD);
  const [isRecording, setIsRecording] = useState(false);

  const handleAddEntry = () => {
    if (!newEntry.trim()) return;

    const entry: Entry = {
      id: Date.now(),
      content: newEntry,
      category: selectedCategory,
      date: new Date().toISOString(),
      mood,
    };

    const updatedEntries = [entry, ...entries];
    setEntries(updatedEntries);
    saveEntries(updatedEntries);

    setNewEntry('');
    setMood(DEFAULT_MOOD);

    // Mise à jour des stats
    const updatedDistribution = {
      ...createEmptyCategoryDistribution(),
      ...stats.categoryDistribution,
    };
    updatedDistribution[selectedCategory] = (updatedDistribution[selectedCategory] ?? 0) + 1;

    const total = stats.totalEntries + 1;
    const level = Math.floor(total / 10) + 1;
    const moodHistory = [...(stats.moodData || []), mood].slice(-7);

    const updatedStats: Stats = {
      ...stats,
      todayEntries: stats.todayEntries + 1,
      totalEntries: total,
      currentStreak: stats.currentStreak + 1,
      level,
      moodData: moodHistory,
      categoryDistribution: updatedDistribution,
    };

    setStats(updatedStats);
    saveData('myevol_stats', updatedStats);

    Toast.show({
      type: 'success',
      text1: 'Bravo 🎉',
      text2: 'Une nouvelle réussite a été ajoutée !',
      position: 'top',
    });
  };

  const handleDeleteEntry = (id: number) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    saveEntries(updated);

    Toast.show({
      type: 'error',
      text1: 'Entrée supprimée ❌',
      text2: 'Votre note a été supprimée.',
      position: 'top',
    });
  };

  const initEntries = async () => {
    const loadedEntries = await loadEntries();
    setEntries(loadedEntries || []);
  };

  return {
    entries,
    newEntry,
    setNewEntry,
    mood,
    setMood,
    isRecording,
    setIsRecording,
    handleAddEntry,
    handleDeleteEntry,
    initEntries,
  };
};
