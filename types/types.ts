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
  moodData?: number[]; // Propriété optionnelle
  categoryDistribution?: Record<string, number>; // Propriété optionnelle
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
  handleDeleteEntry: (id: number) => void;
  entries: Entry[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

export type StatsTabProps = {
  stats: Stats;
};

export type ObjectivesTabProps = {
  objectives: Objective[];
  handleAddObjective?: (newObjective: Objective) => void;
  updateObjectives?: (updated: Objective[]) => void;
};

export type SettingsTabProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  notifications: boolean;
  setNotifications: (value: boolean) => void;
  quietHours: QuietHours;
};

export type Badge = {
  id: number;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  date?: string;
};

export type Challenge = {
  id: number;
  title: string;
  description: string;
  duration: number;
  progress: number;
  totalDays: number;
  participants?: number;
};

export type DashboardProps = {
  stats: Stats;
  objectives: Objective[];
  badges: Badge[];
};
