// utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Entry } from '../types/types';

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
