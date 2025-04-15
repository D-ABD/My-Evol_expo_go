// components/Stats.tsx
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { StatsTabProps } from '../types/types';

const Stats = ({ stats }: StatsTabProps) => {
  const moodData = stats.moodData || [5, 6, 7, 6, 8, 7, 9];
  const maxMoodValue = 10;

  const categoryData = stats.categoryDistribution || {
    'Forme Physique': 4,
    'Bien-être Mental': 6,
    Relations: 2,
    Travail: 5,
  };
  const maxCategoryValue = Math.max(...Object.values(categoryData));

  return (
    <ScrollView className="p-4">
      {/* Stats principales */}
      <View className="mb-4 flex-row justify-between">
        <View className="w-[48%] rounded-lg bg-white p-4 dark:bg-neutral-900">
          <Text className="text-gray-500 dark:text-gray-300">Aujourd'hui</Text>
          <Text className="text-2xl font-bold dark:text-white">{stats.todayEntries}</Text>
        </View>
        <View className="w-[48%] rounded-lg bg-white p-4 dark:bg-neutral-900">
          <Text className="text-gray-500 dark:text-gray-300">Total</Text>
          <Text className="text-2xl font-bold dark:text-white">{stats.totalEntries}</Text>
        </View>
      </View>

      {/* Autres infos */}
      <View className="mb-4 flex-row justify-between">
        <View className="w-[48%] rounded-lg bg-white p-4 dark:bg-neutral-900">
          <Text className="text-gray-500 dark:text-gray-300">Série actuelle</Text>
          <Text className="text-2xl font-bold dark:text-white">{stats.currentStreak} jours</Text>
        </View>
        <View className="w-[48%] rounded-lg bg-white p-4 dark:bg-neutral-900">
          <Text className="text-gray-500 dark:text-gray-300">Niveau</Text>
          <Text className="text-2xl font-bold dark:text-white">{stats.level}</Text>
        </View>
      </View>

      {/* Graphique humeur */}
      <View className="mb-4 rounded-lg bg-white p-4 dark:bg-neutral-900">
        <Text className="mb-4 text-lg font-semibold dark:text-white">Évolution de l'humeur</Text>
        <View className="mt-2 h-40">
          <View className="absolute h-full w-full justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <View key={i} className="h-px w-full bg-gray-200 dark:bg-gray-700" />
            ))}
          </View>
          <View className="h-full flex-row items-end justify-between">
            {moodData.map((value, index) => (
              <View
                key={index}
                style={{ height: `${(value / maxMoodValue) * 100}%` }}
                className="mx-0.5 w-7 rounded-t-md bg-purple-600"
              />
            ))}
          </View>
        </View>
        <View className="mt-2 flex-row justify-between">
          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
            <Text key={day} className="text-xs text-gray-500 dark:text-gray-400">
              {day}
            </Text>
          ))}
        </View>
      </View>

      {/* Répartition catégorie */}
      <View className="mb-4 rounded-lg bg-white p-4 dark:bg-neutral-900">
        <Text className="mb-4 text-lg font-semibold dark:text-white">
          Répartition par catégorie
        </Text>
        {Object.entries(categoryData).map(([category, value], index) => (
          <View key={index} className="mb-3">
            <View className="mb-1 flex-row justify-between">
              <Text className="text-gray-700 dark:text-gray-300">{category}</Text>
              <Text className="text-gray-500 dark:text-gray-400">{value} entrées</Text>
            </View>
            <View className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
              <View
                className="h-2 rounded-full bg-purple-600"
                style={{ width: `${(value / maxCategoryValue) * 100}%` }}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Stats;
