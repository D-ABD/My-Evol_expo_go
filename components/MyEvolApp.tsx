import { Book, BarChart2, Target, User, Settings } from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import '../global.css';
import Objectives from '../components/Objectives';
import Parametres from '../components/Parametres'; // Renommé pour éviter le conflit
import Stats from '../components/Stats';
import Journal from '../components/journal';
import { Entry, Objective, QuietHours, Stats as StatsType } from '../types/types';

export default function MyEvolApp() {
  // États principaux de l'application
  const [activeTab, setActiveTab] = useState<'Journal' | 'Stats' | 'Objectifs' | 'Paramètres'>(
    'Journal'
  );
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [quietHours] = useState<QuietHours>({ start: '22:00', end: '07:00' });

  // États liés au journal
  const [entries, setEntries] = useState<Entry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Bien-être Mental');
  const [mood, setMood] = useState(5);
  const [isRecording, setIsRecording] = useState(false);

  // États liés aux objectifs
  const [objectives] = useState<Objective[]>([
    { id: 1, category: 'Forme Physique', target: 5, current: 3, percentage: 60 },
    { id: 2, category: 'Bien-être Mental', target: 3, current: 3, percentage: 100 },
    { id: 3, category: 'Relations', target: 4, current: 1, percentage: 25 },
  ]);

  // États liés aux statistiques
  const [stats, setStats] = useState<StatsType>({
    todayEntries: 0,
    totalEntries: 0,
    currentStreak: 7,
    level: 5,
  });

  // Gestion de l'ajout d'une entrée au journal
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
    setStats((prev) => ({
      ...prev,
      todayEntries: prev.todayEntries + 1,
      totalEntries: prev.totalEntries + 1,
    }));
  };

  // Rendu de l'onglet en fonction de la sélection
  const renderTab = () => {
    switch (activeTab) {
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

  // Configuration des onglets
  const tabs = [
    { name: 'Journal', icon: Book },
    { name: 'Stats', icon: BarChart2 },
    { name: 'Objectifs', icon: Target },
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

      {/* Tabs navigation */}
      <View className="flex-row justify-around border-t bg-white py-3 dark:bg-neutral-900">
        {tabs.map(({ name, icon: Icon }) => (
          <Pressable key={name} onPress={() => setActiveTab(name as any)} className="items-center">
            <Icon color={activeTab === name ? '#9333ea' : '#6b7280'} />
            <Text
              className={`${activeTab === name ? 'text-purple-600' : 'text-gray-500'} dark:text-white`}>
              {name}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}
