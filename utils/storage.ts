// utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Badge, Entry, Objective } from '../types/types';

export const saveEntries = async (entries: Entry[]) => {
  try {
    await AsyncStorage.setItem('myevol_entries', JSON.stringify(entries));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des entrées:', error);
  }
};

export const loadEntries = async (): Promise<Entry[]> => {
  try {
    const data = await AsyncStorage.getItem('myevol_entries');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erreur lors du chargement des entrées:', error);
    return [];
  }
};

export const saveData = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Erreur lors de la sauvegarde:', e);
  }
};

export const loadData = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Erreur lors du chargement:', e);
    return null;
  }
};
export const saveObjectives = async (objectives: Objective[]) => {
  try {
    await AsyncStorage.setItem('myevol_objectives', JSON.stringify(objectives));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des objectifs:', error);
  }
};

export const loadObjectives = async (): Promise<Objective[]> => {
  try {
    const data = await AsyncStorage.getItem('myevol_objectives');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erreur lors du chargement des objectifs:', error);
    return [];
  }
};
export const saveBadges = async (badges: Badge[]) => {
  try {
    await AsyncStorage.setItem('myevol_badges', JSON.stringify(badges));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des badges:', error);
  }
};

export const loadBadges = async (): Promise<Badge[]> => {
  try {
    const data = await AsyncStorage.getItem('myevol_badges');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erreur lors du chargement des badges:', error);
    return [];
  }
};
