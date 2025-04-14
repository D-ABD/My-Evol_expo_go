// components/ChallengeCard.tsx
import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Challenge } from '../types/types';

type Props = {
  challenge: Challenge;
  onJoin?: (id: number) => void;
};

const ChallengeCard = ({ challenge, onJoin }: Props) => {
  const percentage = Math.round((challenge.progress / challenge.totalDays) * 100);

  return (
    <View className="mb-4 rounded-lg bg-white p-4 dark:bg-neutral-900">
      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-base font-semibold dark:text-white">{challenge.title}</Text>
        {onJoin && (
          <Pressable
            className="rounded-full bg-purple-600 px-4 py-2"
            onPress={() => onJoin(challenge.id)}>
            <Text className="text-white">Rejoindre</Text>
          </Pressable>
        )}
      </View>

      <Text className="text-sm text-gray-500 dark:text-gray-300">{challenge.description}</Text>

      <View className="mt-2">
        <View className="flex-row justify-between">
          <Text className="text-gray-500 dark:text-gray-400">
            {challenge.progress}/{challenge.totalDays} jours
          </Text>
          <Text className="text-gray-500 dark:text-gray-400">{percentage}%</Text>
        </View>
        <View className="mt-1 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <View className="h-2 rounded-full bg-purple-600" style={{ width: `${percentage}%` }} />
        </View>
      </View>
    </View>
  );
};

export default ChallengeCard;
