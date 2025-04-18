import React from 'react';
import { View, Text, Image } from 'react-native';

import { Badge } from '../types/types';
import Card from './ui/Card';
import { COLORS } from '../constants/colors';

type Props = {
  badge: Badge;
};

const BadgeCard = ({ badge }: Props) => {
  const borderColor = badge.unlocked ? COLORS.purple : COLORS.grayLight;
  const backgroundColor = badge.unlocked ? COLORS.white : undefined;
  const textColor = badge.unlocked ? 'text-purple-600' : 'dark:text-white';

  return (
    <Card style={{ borderColor, borderWidth: 1, backgroundColor }}>
      <View className="flex-row items-center space-x-4">
        <Image
          source={{ uri: badge.icon }}
          style={{ width: 40, height: 40 }}
          className="rounded-full"
        />
        <View className="flex-1">
          <Text className={`text-base font-semibold ${textColor}`}>{badge.name}</Text>
          <Text className="text-sm text-gray-500 dark:text-gray-300">{badge.description}</Text>
          {badge.unlocked && badge.date && (
            <Text className="mt-1 text-xs" style={{ color: COLORS.green }}>
              Débloqué le {badge.date}
            </Text>
          )}
        </View>
      </View>
    </Card>
  );
};

export default BadgeCard;
