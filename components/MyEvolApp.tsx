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
import { Entry, Objective, QuietHours, Stats as StatsType } from '../types/types';
import { saveEntries, loadEntries, saveData, loadData } from '../utils/storage';
import Card from './ui/Card'; // ✅ On utilise Card

export default function MyEvolApp() {
  const [activeTab, setActiveTab] = useState<
    'Dashboard' | 'Journal' | 'Stats' | 'Objectifs' | 'Gamification' | 'Paramètres'
  >('Dashboard');

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [quietHours] = useState<QuietHours>({ start: '22:00', end: '07:00' });

  const [entries, setEntries] = useState<Entry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Bien-être Mental');
  const [mood, setMood] = useState(5);
  const [isRecording, setIsRecording] = useState(false);

  const [objectives] = useState<Objective[]>([
    { id: 1, category: 'Forme Physique', target: 5, current: 3, percentage: 60 },
    { id: 2, category: 'Bien-être Mental', target: 3, current: 3, percentage: 100 },
    { id: 3, category: 'Relations', target: 4, current: 1, percentage: 25 },
  ]);

  const [stats, setStats] = useState<StatsType>({
    todayEntries: 0,
    totalEntries: 0,
    currentStreak: 7,
    level: 5,
    moodData: [],
    categoryDistribution: {},
  });

  useEffect(() => {
    const loadDataOnStart = async () => {
      const loadedEntries = await loadEntries();
      const loadedStats = await loadData<StatsType>('myevol_stats');

      if (loadedEntries) setEntries(loadedEntries);
      if (loadedStats) setStats(loadedStats);
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
      const updatedDistribution = { ...prev.categoryDistribution };
      updatedDistribution[selectedCategory] = (updatedDistribution[selectedCategory] || 0) + 1;

      const total = prev.totalEntries + 1;
      const level = Math.floor(total / 10) + 1;
      const moodHistory = [...(prev.moodData || []), mood].slice(-7);

      const updatedStats = {
        ...prev,
        todayEntries: prev.todayEntries + 1,
        totalEntries: total,
        currentStreak: prev.currentStreak + 1,
        level,
        moodData: moodHistory,
        categoryDistribution: updatedDistribution,
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

  const renderTab = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
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
        return <Objectives objectives={objectives} />;
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
        {/* En-tête avec Card */}
        <Card style={{ margin: 0, borderRadius: 0 }}>
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-bold text-purple-700 dark:text-white">MyEvol</Text>
            <View className="flex-row items-center space-x-3">
              <Text className="text-purple-700 dark:text-white">⭐ Niveau {stats.level}</Text>
              <Text className="text-purple-700 dark:text-white">
                🔥 {stats.currentStreak} jours
              </Text>
              <User color="purple" />
            </View>
          </View>
        </Card>

        {/* Contenu dynamique */}
        <View className="flex-1">{renderTab()}</View>

        {/* Navigation inférieure */}
        <View className="flex-row justify-around border-t bg-white py-3 dark:bg-neutral-900">
          {tabs.map(({ name, icon: Icon }) => (
            <Pressable
              key={name}
              onPress={() => setActiveTab(name as any)}
              className="items-center">
              <Icon color={activeTab === name ? '#9333ea' : '#6b7280'} />
              <Text
                className={`${
                  activeTab === name ? 'text-purple-600' : 'text-gray-500'
                } dark:text-white`}>
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
