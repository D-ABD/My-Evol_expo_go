import { DEFAULT_BADGES } from 'constants/badges';
import { DEFAULT_CHALLENGES } from 'constants/challenges';
import React, { useState } from 'react';
import { Text, ScrollView, Alert } from 'react-native';

import BadgeCard from './BadgeCard';
import ChallengeCard from './ChallengeCard';
import Card from './ui/Card';
import { COLORS } from '../constants/colors'; // ✅ Import des couleurs
import { Badge, Challenge } from '../types/types';

const Gamification = () => {
  const badges: Badge[] = DEFAULT_BADGES;

  const [challenges, setChallenges] = useState<Challenge[]>(DEFAULT_CHALLENGES);

  const joinChallenge = (id: number) => {
    setChallenges((prev) =>
      prev.map((c) => (c.id === id ? { ...c, progress: Math.min(c.progress + 1, c.totalDays) } : c))
    );
    Alert.alert('Défi rejoint 🎯', `Vous avez progressé dans ce défi !`);
  };

  return (
    <ScrollView className="p-4">
      <Text className="mb-4 text-xl font-bold dark:text-white" style={{ color: COLORS.pink }}>
        Gamification
      </Text>

      {/* Section Défis */}
      <Card style={{ marginBottom: 24 }}>
        <Text className="mb-2 text-lg font-semibold dark:text-white">🎯 Défis en cours</Text>
        {challenges.map((c) => (
          <ChallengeCard key={c.id} challenge={c} onJoin={joinChallenge} />
        ))}
      </Card>

      {/* Section Badges */}
      <Card>
        <Text className="mb-2 text-lg font-semibold dark:text-white">🏅 Badges débloqués</Text>
        {badges.map((b) => (
          <BadgeCard key={b.id} badge={b} />
        ))}
      </Card>
    </ScrollView>
  );
};

export default Gamification;
