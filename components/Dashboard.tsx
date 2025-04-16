import React from 'react';
import { View, Text } from 'react-native';

import Card from './ui/Card';
import { DashboardProps } from '../types/types';

const Dashboard = ({ stats, objectives, badges }: DashboardProps) => {
  const moodData = stats.moodData ?? [];
  const moodAvg =
    moodData.length > 0 ? (moodData.reduce((a, b) => a + b, 0) / moodData.length).toFixed(1) : '—';

  return (
    <View className="p-4">
      <Text className="mb-4 text-xl font-bold text-purple-600 dark:text-white">
        🏠 Tableau de bord
      </Text>

      {/* ✅ Résumé journalier */}
      <Card style={{ marginBottom: 16 }}>
        <Text className="mb-2 text-lg font-semibold dark:text-white">Résumé du jour</Text>
        <Text className="text-gray-700 dark:text-gray-300">😄 Humeur moyenne : {moodAvg}/10</Text>
        <Text className="text-gray-700 dark:text-gray-300">
          ✍️ Entrées aujourd’hui : {stats.todayEntries}
        </Text>

        {/* ✅ Graphique de l'humeur */}
        {moodData.length > 0 && (
          <View className="mt-4 h-28">
            <View className="absolute h-full w-full justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <View key={i} className="h-px w-full bg-gray-200 dark:bg-gray-700" />
              ))}
            </View>
            <View className="h-full flex-row items-end justify-between">
              {moodData.map((value, index) => (
                <View
                  key={index}
                  style={{ height: `${(value / 10) * 100}%` }}
                  className="mx-0.5 w-6 rounded-t-md bg-purple-500"
                />
              ))}
            </View>
            <View className="mt-1 flex-row justify-between">
              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                <Text key={day} className="text-xs text-gray-500 dark:text-gray-400">
                  {day}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Card>

      {/* ✅ Objectifs */}
      <Card style={{ marginBottom: 16 }}>
        <Text className="mb-2 text-lg font-semibold dark:text-white">🎯 Objectifs</Text>
        {objectives.length === 0 && (
          <Text className="text-gray-500 dark:text-gray-400">Aucun objectif pour l’instant.</Text>
        )}
        {objectives.map((obj) => (
          <View key={obj.id} className="mb-2">
            <View className="flex-row justify-between">
              <Text className="text-sm font-medium dark:text-white">{obj.category}</Text>
              <Text className="text-sm text-gray-500 dark:text-gray-400">
                {obj.current}/{obj.target}
              </Text>
            </View>
            <View className="mt-1 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <View
                className="h-2 rounded-full bg-purple-600"
                style={{ width: `${obj.percentage}%` }}
              />
            </View>
          </View>
        ))}
      </Card>

      {/* ✅ Progression & Badges */}
      <Card>
        <Text className="mb-2 text-lg font-semibold dark:text-white">🏅 Progression</Text>
        <Text className="text-gray-700 dark:text-gray-300">⭐ Niveau actuel : {stats.level}</Text>
        <Text className="text-gray-700 dark:text-gray-300">
          🔥 Série : {stats.currentStreak} jours
        </Text>
        <Text className="text-gray-700 dark:text-gray-300">
          🎖️ Badges débloqués : {badges.filter((b) => b.unlocked).length}
        </Text>
      </Card>
    </View>
  );
};

export default Dashboard;
