import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { ObjectivesTabProps } from '../types/types';
import Card from './ui/Card'; // ✅ utilisation du composant Card

const Objectives = ({ objectives }: ObjectivesTabProps) => (
  <ScrollView className="p-4">
    <Text className="mb-4 text-xl font-bold text-purple-600 dark:text-white">🎯 Objectifs</Text>

    {objectives.map((obj) => (
      <Card key={obj.id} className="mb-4">
        {/* En-tête de l’objectif */}
        <View className="mb-2 flex-row justify-between">
          <Text className="text-base font-medium dark:text-white">{obj.category}</Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            {obj.current}/{obj.target}
          </Text>
        </View>

        {/* Barre de progression */}
        <View className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <View
            className="h-3 rounded-full bg-purple-600"
            style={{ width: `${obj.percentage}%` }}
          />
        </View>
      </Card>
    ))}
  </ScrollView>
);

export default Objectives;
