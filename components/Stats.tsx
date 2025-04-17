import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { StatsTabProps } from '../types/types';
import Card from './ui/Card';
import { COLORS } from '../constants/colors';

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
      {/* Statistiques principales */}
      <View className="mb-4 flex-row justify-between">
        <Card className="w-[48%]">
          <Text style={{ color: COLORS.grayDark }}>Aujourd'hui</Text>
          <Text style={{ color: COLORS.white }} className="text-2xl font-bold">
            {stats.todayEntries}
          </Text>
        </Card>
        <Card className="w-[48%]">
          <Text style={{ color: COLORS.grayDark }}>Total</Text>
          <Text style={{ color: COLORS.white }} className="text-2xl font-bold">
            {stats.totalEntries}
          </Text>
        </Card>
      </View>

      {/* Autres infos */}
      <View className="mb-4 flex-row justify-between">
        <Card className="w-[48%]">
          <Text style={{ color: COLORS.grayDark }}>Série actuelle</Text>
          <Text style={{ color: COLORS.white }} className="text-2xl font-bold">
            {stats.currentStreak} jours
          </Text>
        </Card>
        <Card className="w-[48%]">
          <Text style={{ color: COLORS.grayDark }}>Niveau</Text>
          <Text style={{ color: COLORS.white }} className="text-2xl font-bold">
            {stats.level}
          </Text>
        </Card>
      </View>

      {/* Graphique humeur */}
      <Card className="mb-4">
        <Text style={{ color: COLORS.white }} className="mb-4 text-lg font-semibold">
          Évolution de l'humeur
        </Text>
        <View className="mt-2 h-40">
          <View className="absolute h-full w-full justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <View key={i} style={{ backgroundColor: COLORS.grayLight }} className="h-px w-full" />
            ))}
          </View>
          <View className="h-full flex-row items-end justify-between">
            {moodData.map((value, index) => (
              <View
                key={index}
                className="mx-0.5 w-7 rounded-t-md"
                style={{
                  height: `${(value / maxMoodValue) * 100}%`,
                  backgroundColor: COLORS.purple,
                }}
              />
            ))}
          </View>
        </View>
        <View className="mt-2 flex-row justify-between">
          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
            <Text key={day} style={{ color: COLORS.grayDark }} className="text-xs">
              {day}
            </Text>
          ))}
        </View>
      </Card>

      {/* Répartition par catégorie */}
      <Card className="mb-4">
        <Text style={{ color: COLORS.white }} className="mb-4 text-lg font-semibold">
          Répartition par catégorie
        </Text>
        {Object.entries(categoryData).map(([category, value], index) => (
          <View key={index} className="mb-3">
            <View className="mb-1 flex-row justify-between">
              <Text style={{ color: COLORS.grayDark }}>{category}</Text>
              <Text style={{ color: COLORS.grayLight }}>{value} entrées</Text>
            </View>
            <View
              className="h-2 rounded-full"
              style={{ backgroundColor: COLORS.grayLight, overflow: 'hidden' }}>
              <View
                className="h-2 rounded-full"
                style={{
                  width: `${(value / maxCategoryValue) * 100}%`,
                  backgroundColor: COLORS.purple,
                }}
              />
            </View>
          </View>
        ))}
      </Card>
    </ScrollView>
  );
};

export default Stats;
