import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Challenge } from '../types/types';
import Card from './ui/Card';
import { COLORS } from '../constants/colors'; // ✅ Import des couleurs

type Props = {
  challenge: Challenge;
  onJoin?: (id: number) => void;
};

const ChallengeCard = ({ challenge, onJoin }: Props) => {
  const percentage = Math.round((challenge.progress / challenge.totalDays) * 100);

  return (
    <Card style={{ marginBottom: 16 }}>
      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-base font-semibold dark:text-white">{challenge.title}</Text>
        {onJoin && (
          <Pressable
            onPress={() => onJoin(challenge.id)}
            style={{
              backgroundColor: COLORS.purple,
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 999,
            }}>
            <Text style={{ color: COLORS.white, fontSize: 14, fontWeight: '500' }}>Rejoindre</Text>
          </Pressable>
        )}
      </View>

      <Text className="text-sm text-gray-500 dark:text-gray-300">{challenge.description}</Text>

      <View className="mt-3">
        <View className="flex-row justify-between">
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            {challenge.progress}/{challenge.totalDays} jours
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">{percentage}%</Text>
        </View>
        <View
          className="mt-1 h-2 w-full rounded-full"
          style={{ backgroundColor: COLORS.grayLight }}>
          <View
            className="h-2 rounded-full"
            style={{
              width: `${percentage}%`,
              backgroundColor: COLORS.purple,
            }}
          />
        </View>
      </View>
    </Card>
  );
};

export default ChallengeCard;
