import React from 'react';
import { View, Text } from 'react-native';

import { StatsTabProps } from '../types/types';

const Stats = ({ stats }: StatsTabProps) => (
  <View className="p-4">
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
  </View>
);

export default Stats;
