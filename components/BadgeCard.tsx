// components/BadgeCard.tsx
import React from 'react';
import { View, Text, Image } from 'react-native';

import { Badge } from '../types/types';

type Props = {
  badge: Badge;
};

const BadgeCard = ({ badge }: Props) => {
  return (
    <View
      className={`mb-3 rounded-lg border p-4 ${
        badge.unlocked
          ? 'border-purple-600 bg-white'
          : 'border-gray-300 bg-gray-100 dark:bg-neutral-800'
      }`}>
      <View className="flex-row items-center space-x-4">
        <Image
          source={{ uri: badge.icon }}
          style={{ width: 40, height: 40 }}
          className="rounded-full"
        />
        <View className="flex-1">
          <Text className="text-base font-semibold dark:text-white">{badge.name}</Text>
          <Text className="text-sm text-gray-500 dark:text-gray-300">{badge.description}</Text>
          {badge.unlocked && badge.date && (
            <Text className="mt-1 text-xs text-green-600">Débloqué le {badge.date}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default BadgeCard;
