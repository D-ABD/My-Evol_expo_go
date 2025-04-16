import React from 'react';
import { View, Text, Image } from 'react-native';

import { Badge } from '../types/types';
import Card from './ui/Card'; // ✅ Composant Card réutilisable

type Props = {
  badge: Badge;
};

const BadgeCard = ({ badge }: Props) => {
  return (
    <Card
      style={{
        borderColor: badge.unlocked ? '#9333ea' : '#d1d5db',
        borderWidth: 1,
        backgroundColor: badge.unlocked ? 'white' : undefined,
      }}>
      <View className="flex-row items-center space-x-4">
        <Image
          source={{ uri: badge.icon }}
          style={{ width: 40, height: 40 }}
          className="rounded-full"
        />
        <View className="flex-1">
          <Text
            className={`text-base font-semibold ${
              badge.unlocked ? 'text-purple-600' : 'dark:text-white'
            }`}>
            {badge.name}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-300">{badge.description}</Text>
          {badge.unlocked && badge.date && (
            <Text className="mt-1 text-xs text-green-600">Débloqué le {badge.date}</Text>
          )}
        </View>
      </View>
    </Card>
  );
};

export default BadgeCard;
