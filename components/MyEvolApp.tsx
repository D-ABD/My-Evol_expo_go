import { Book, BarChart2, Target, Trophy, Settings, User } from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import '../global.css';

import Dashboard from './Dashboard';
import Gamification from './Gamification';
import Objectives from './Objectives';
import Parametres from './Parametres';
import Stats from './Stats';
import Journal from './journal';
import Card from './ui/Card';
import { CATEGORIES, Category } from '../constants/categories';
import { COLORS } from '../constants/colors';
import { useInitData } from '../hooks/useInitData';
import { useJournal } from '../hooks/useJournal';
import { useSettings } from '../hooks/useSettings';
import { useStats } from '../hooks/useStats';
import { Badge } from '../types/types';

export default function MyEvolApp() {
  const [activeTab, setActiveTab] = useState<
    'Dashboard' | 'Journal' | 'Stats' | 'Objectifs' | 'Gamification' | 'Paramètres'
  >('Dashboard');

  const [selectedCategory, setSelectedCategory] = useState<Category>(CATEGORIES[0]);
  const [badges, setBadges] = useState<Badge[]>([]);

  // 🌙 Paramètres utilisateur
  const { darkMode, setDarkMode, notifications, setNotifications, quietHours } = useSettings();

  // 📊 Statistiques globales
  const { stats, setStats } = useStats();

  // 🎯 Objectifs + Badges (initialisation)
  const { objectives } = useInitData(selectedCategory, setBadges, setStats, stats);
  const { objectives: allObjectives, handleAddObjective, updateObjectives } = objectives;

  // 📘 Journal (notes, humeur, catégorie)
  const {
    entries,
    newEntry,
    setNewEntry,
    mood,
    setMood,
    isRecording,
    setIsRecording,
    handleAddEntry,
    handleDeleteEntry,
  } = useJournal(selectedCategory, setStats, stats);

  const renderTab = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard stats={stats} objectives={allObjectives} badges={badges} />;
      case 'Journal':
        return (
          <Journal
            entries={entries}
            newEntry={newEntry}
            setNewEntry={setNewEntry}
            mood={mood}
            setMood={setMood}
            isRecording={isRecording}
            setIsRecording={setIsRecording}
            handleAddEntry={handleAddEntry}
            handleDeleteEntry={handleDeleteEntry}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'Stats':
        return <Stats stats={stats} />;
      case 'Objectifs':
        return (
          <Objectives
            objectives={allObjectives}
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
        {/* 🔝 En-tête */}
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

        {/* 🧠 Contenu dynamique */}
        <View className="flex-1">{renderTab()}</View>

        {/* 🚀 Navigation */}
        <View className="flex-row justify-around border-t bg-white py-3 dark:bg-neutral-900">
          {tabs.map(({ name, icon: Icon }) => (
            <Pressable
              key={name}
              onPress={() => setActiveTab(name as any)}
              className="items-center">
              <Icon color={activeTab === name ? COLORS.purple : COLORS.grayDark} />
              <Text
                className={`text-xs dark:text-white ${
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
