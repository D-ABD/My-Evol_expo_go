import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { ObjectivesTabProps } from '../types/types';

const Objectives = ({ objectives }: ObjectivesTabProps) => (
  <ScrollView className="p-4">
    <Text className="mb-4 text-lg font-semibold dark:text-white">Objectifs</Text>
    {objectives.map((obj) => (
      <View key={obj.id} className="mb-3 rounded-lg bg-white p-4 dark:bg-neutral-900">
        <View className="mb-2 flex-row justify-between">
          <Text className="font-medium dark:text-white">{obj.category}</Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            {obj.current}/{obj.target}
          </Text>
        </View>
        <View className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <View
            className="h-2 rounded-full bg-purple-600"
            style={{ width: `${obj.percentage}%` }}
          />
        </View>
      </View>
    ))}
  </ScrollView>
);

export default Objectives;
