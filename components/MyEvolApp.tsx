// my-expo-app/components/MyEvolApp.tsx

import { Book, BarChart2, Target, User, Settings, Trophy } from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import '../global.css';
import Journal from './journal';
import Dashboard from '../components/Dashboard';
import Gamification from '../components/Gamification';
import Objectives from '../components/Objectives';
import Parametres from '../components/Parametres';
import Stats from '../components/Stats';
import { Entry, Objective, QuietHours, Stats as StatsType } from '../types/types';

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

  // ✅ Ajout d’une entrée dans le journal avec mise à jour des stats
  const handleAddEntry = () => {
    if (!newEntry.trim()) return;

    const entry: Entry = {
      id: Date.now(),
      content: newEntry,
      category: selectedCategory,
      date: new Date().toISOString(),
      mood,
    };

    setEntries([entry, ...entries]);
    setNewEntry('');
    setMood(5);

    setStats((prev) => {
      const updatedDistribution = { ...prev.categoryDistribution };
      updatedDistribution[selectedCategory] = (updatedDistribution[selectedCategory] || 0) + 1;

      const total = prev.totalEntries + 1;
      const level = Math.floor(total / 10) + 1;
      const moodHistory = [...(prev.moodData || []), mood].slice(-7);

      return {
        ...prev,
        todayEntries: prev.todayEntries + 1,
        totalEntries: total,
        currentStreak: prev.currentStreak + 1,
        level,
        moodData: moodHistory,
        categoryDistribution: updatedDistribution,
      };
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
    <SafeAreaView className={`flex-1 ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-black`}>
      {/* Header */}
      <View className="bg-gradient-to-r from-purple-600 to-blue-500 p-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold text-white">MyEvol</Text>
          <View className="flex-row items-center space-x-3">
            <Text className="text-white">⭐ Niveau {stats.level}</Text>
            <Text className="text-white">🔥 {stats.currentStreak} jours</Text>
            <User color="white" />
          </View>
        </View>
      </View>

      {/* Contenu */}
      <View className="flex-1">{renderTab()}</View>

      {/* Navigation */}
      <View className="flex-row justify-around border-t bg-white py-3 dark:bg-neutral-900">
        {tabs.map(({ name, icon: Icon }) => (
          <Pressable key={name} onPress={() => setActiveTab(name as any)} className="items-center">
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
  );
}
