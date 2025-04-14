// Définition des types principaux de l'application MyEvol

// Type pour les entrées du journal
export type Entry = {
  id: number;
  content: string;
  category: string;
  date: string;
  mood: number;
};

// Type pour les objectifs
export type Objective = {
  id: number;
  category: string;
  target: number;
  current: number;
  percentage: number;
};

// Type pour les heures de silence des notifications
export type QuietHours = {
  start: string;
  end: string;
};

// Type pour les statistiques
export type Stats = {
  todayEntries: number;
  totalEntries: number;
  currentStreak: number;
  level: number;
};

// Types pour les props des composants
export type JournalTabProps = {
  newEntry: string;
  setNewEntry: (text: string) => void;
  mood: number;
  setMood: (value: number) => void;
  isRecording: boolean;
  setIsRecording: (value: boolean) => void;
  handleAddEntry: () => void;
  entries: Entry[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void; // Ajouté cette ligne
};

export type StatsTabProps = {
  stats: Stats;
};

export type ObjectivesTabProps = {
  objectives: Objective[];
};

export type SettingsTabProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  notifications: boolean;
  setNotifications: (value: boolean) => void;
  quietHours: QuietHours;
};
