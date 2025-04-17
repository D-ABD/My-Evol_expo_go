import { Book, BarChart2, Target, User, Settings, Trophy } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import '../global.css';
import Journal from './journal';
import Dashboard from '../components/Dashboard';
import Gamification from '../components/Gamification';
import Objectives from '../components/Objectives';
import Parametres from '../components/Parametres';
import Stats from '../components/Stats';
import { DEFAULT_BADGES } from '../constants/badges';
import { Category, CATEGORIES } from '../constants/categories';
import { DEFAULT_OBJECTIVES } from '../constants/objectives';
import { Entry, Objective, QuietHours, Stats as StatsType, Badge } from '../types/types';
import {
  saveEntries,
  loadEntries,
  saveData,
  loadData,
  saveObjectives,
  loadObjectives,
} from '../utils/storage';
import Card from './ui/Card';
import { COLORS } from '../constants/colors';

// ✅ Utilitaire pour initialiser la distribution
const createEmptyCategoryDistribution = (): Record<Category, number> =>
  Object.fromEntries(CATEGORIES.map((cat) => [cat, 0])) as Record<Category, number>;

export default function MyEvolApp() {
  const [activeTab, setActiveTab] = useState<
    'Dashboard' | 'Journal' | 'Stats' | 'Objectifs' | 'Gamification' | 'Paramètres'
  >('Dashboard');

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [quietHours] = useState<QuietHours>({ start: '22:00', end: '07:00' });

  const [entries, setEntries] = useState<Entry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('Bien-être Mental');
  const [mood, setMood] = useState(5);
  const [isRecording, setIsRecording] = useState(false);

  const [objectives, setObjectives] = useState<Objective[]>([]);
  const [badges, setBadges] = useState<Badge[]>([]);

  const [stats, setStats] = useState<StatsType>({
    todayEntries: 0,
    totalEntries: 0,
    currentStreak: 7,
    level: 5,
    moodData: [],
    categoryDistribution: createEmptyCategoryDistribution(),
  });

  useEffect(() => {
    const loadDataOnStart = async () => {
      const [loadedEntries, loadedStats, loadedObjectives] = await Promise.all([
        loadEntries(),
        loadData<StatsType>('myevol_stats'),
        loadObjectives(),
      ]);

      if (loadedEntries) setEntries(loadedEntries);
      if (loadedStats)
        setStats((prev) => ({
          ...prev,
          ...loadedStats,
          categoryDistribution: {
            ...createEmptyCategoryDistribution(),
            ...(loadedStats.categoryDistribution || {}),
          },
        }));

      if (!loadedObjectives || loadedObjectives.length === 0) {
        setObjectives(DEFAULT_OBJECTIVES);
        saveObjectives(DEFAULT_OBJECTIVES);
      } else {
        setObjectives(loadedObjectives);
      }

      setBadges(DEFAULT_BADGES);
    };

    loadDataOnStart();
  }, []);

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
    setMood(5);

    setStats((prev) => {
      const updatedDistribution = {
        ...createEmptyCategoryDistribution(),
        ...prev.categoryDistribution,
      };
      updatedDistribution[selectedCategory] = (updatedDistribution[selectedCategory] ?? 0) + 1;

      const total = prev.totalEntries + 1;
      const level = Math.floor(total / 10) + 1;
      const moodHistory = [...(prev.moodData || []), mood].slice(-7);

      updatedDistribution[selectedCategory] += 1;

      const updatedStats: StatsType = {
        ...prev,
        todayEntries: prev.todayEntries + 1,
        totalEntries: total,
        currentStreak: prev.currentStreak + 1,
        level,
        moodData: moodHistory,
        categoryDistribution: updatedDistribution, // ✅ plus d’erreur ici
      };

      saveData('myevol_stats', updatedStats);
      return updatedStats;
    });

    Toast.show({
      type: 'success',
      text1: 'Bravo 🎉',
      text2: 'Une nouvelle réussite a été ajoutée !',
      position: 'top',
      visibilityTime: 2000,
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

  const handleAddObjective = (newObjective: Objective) => {
    const updated = [...objectives, newObjective];
    setObjectives(updated);
    saveObjectives(updated);
  };

  const updateObjectives = (updated: Objective[]) => {
    setObjectives(updated);
    saveObjectives(updated);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard stats={stats} objectives={objectives} badges={badges} />;
      case 'Journal':
        return (
          <Journal
            newEntry={newEntry}
            setNewEntry={setNewEntry}
            mood={mood}
            setMood={setMood}
            isRecording={isRecording}
            setIsRecording={setIsRecording}
            handleAddEntry={handleAddEntry}
            handleDeleteEntry={handleDeleteEntry}
            entries={entries}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'Stats':
        return <Stats stats={stats} />;
      case 'Objectifs':
        return (
          <Objectives
            objectives={objectives}
            handleAddObjective={handleAddObjective}
            updateObjectives={updateObjectives}
          />
        );
      case 'Gamification':
        return <Gamification />;
      case 'Paramètres':
        return (
          <Parametres
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            notifications={notifications}
            setNotifications={setNotifications}
            quietHours={quietHours}
          />
        );
      default:
        return null;
    }
  };

  const tabs = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Journal', icon: Book },
    { name: 'Stats', icon: BarChart2 },
    { name: 'Objectifs', icon: Target },
    { name: 'Gamification', icon: Trophy },
    { name: 'Paramètres', icon: Settings },
  ];

  return (
    <>
      <SafeAreaView className={`flex-1 ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-black`}>
        <Card style={{ margin: 0, borderRadius: 0 }}>
          <View className="flex-row items-center justify-between">
            <Text style={{ color: COLORS.purple }} className="text-xl font-bold dark:text-white">
              MyEvol
            </Text>
            <View className="flex-row items-center space-x-3">
              <Text style={{ color: COLORS.purple }} className="dark:text-white">
                ⭐ Niveau {stats.level}
              </Text>
              <Text style={{ color: COLORS.purple }} className="dark:text-white">
                🔥 {stats.currentStreak} jours
              </Text>
              <User color={COLORS.purple} />
            </View>
          </View>
        </Card>

        <View className="flex-1">{renderTab()}</View>

        <View className="flex-row justify-around border-t bg-white py-3 dark:bg-neutral-900">
          {tabs.map(({ name, icon: Icon }) => (
            <Pressable
              key={name}
              onPress={() => setActiveTab(name as any)}
              className="items-center">
              <Icon color={activeTab === name ? COLORS.purple : COLORS.grayDark} />
              <Text
                className={`dark:text-white ${
                  activeTab === name ? 'text-purple-600' : 'text-gray-500'
                }`}>
                {name}
              </Text>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>

      <Toast />
    </>
  );
}
