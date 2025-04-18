import React, { useState } from 'react';
import { Text, ScrollView, Alert } from 'react-native';

import BadgeCard from './BadgeCard';
import ChallengeCard from './ChallengeCard';
import Card from './ui/Card';
import { DEFAULT_BADGES } from '../constants/badges';
import { DEFAULT_CHALLENGES } from '../constants/challenges';
import { COLORS } from '../constants/colors';
import { Badge, Challenge } from '../types/types';

const Gamification: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>(DEFAULT_CHALLENGES);
  const badges: Badge[] = DEFAULT_BADGES;

  const handleJoinChallenge = (id: number) => {
    setChallenges((prev) =>
      prev.map((challenge) =>
        challenge.id === id
          ? { ...challenge, progress: Math.min(challenge.progress + 1, challenge.totalDays) }
          : challenge
      )
    );

    Alert.alert('Défi rejoint 🎯', 'Vous avez progressé dans ce défi !');
  };

  return (
    <ScrollView className="p-4">
      {/* 🕹️ Titre */}
      <Text className="mb-4 text-xl font-bold dark:text-white" style={{ color: COLORS.pink }}>
        Gamification
      </Text>

      {/* 🎯 Défis en cours */}
      <Card style={{ marginBottom: 24 }}>
        <Text className="mb-2 text-lg font-semibold dark:text-white">🎯 Défis en cours</Text>
        {challenges.length === 0 ? (
          <Text className="text-gray-500 dark:text-gray-400">Aucun défi pour le moment.</Text>
        ) : (
          challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} onJoin={handleJoinChallenge} />
          ))
        )}
      </Card>

      {/* 🏅 Badges débloqués */}
      <Card>
        <Text className="mb-2 text-lg font-semibold dark:text-white">🏅 Badges débloqués</Text>
        {badges.length === 0 ? (
          <Text className="text-gray-500 dark:text-gray-400">
            Aucun badge débloqué pour l’instant.
          </Text>
        ) : (
          badges.map((badge) => <BadgeCard key={badge.id} badge={badge} />)
        )}
      </Card>
    </ScrollView>
  );
};

export default Gamification;
