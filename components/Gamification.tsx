import React, { useState } from 'react';
import { Text, ScrollView, Alert } from 'react-native';

import BadgeCard from './BadgeCard';
import ChallengeCard from './ChallengeCard';
import { Badge, Challenge } from '../types/types';

const Gamification = () => {
  const badges: Badge[] = [
    {
      id: 1,
      name: 'Premier pas',
      icon: 'https://cdn-icons-png.flaticon.com/512/3909/3909444.png',
      description: 'Créer une première entrée',
      unlocked: true,
      date: '2025-04-14',
    },
    {
      id: 2,
      name: 'Série de 7 jours',
      icon: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
      description: '7 jours consécutifs',
      unlocked: false,
    },
  ];

  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: 1,
      title: 'Défi Gratitude',
      description: 'Notez 3 choses positives chaque jour pendant 5 jours',
      duration: 5,
      progress: 3,
      totalDays: 5,
    },
    {
      id: 2,
      title: 'Objectif Bien-être',
      description: 'Évaluez votre humeur chaque jour pendant 7 jours',
      duration: 7,
      progress: 5,
      totalDays: 7,
    },
  ]);

  const joinChallenge = (id: number) => {
    setChallenges((prevChallenges) =>
      prevChallenges.map((c) => (c.id === id ? { ...c, progress: c.progress + 1 } : c))
    );
    Alert.alert('Défi rejoint 🎯', `Vous avez rejoint le défi !`);
  };

  return (
    <ScrollView className="p-4">
      <Text className="mb-4 text-xl font-bold text-pink-600 dark:text-white">Gamification</Text>

      <Text className="mb-2 text-lg font-semibold dark:text-white">🎯 Défis en cours</Text>
      {challenges.map((c) => (
        <ChallengeCard key={c.id} challenge={c} onJoin={joinChallenge} />
      ))}

      <Text className="mb-2 mt-6 text-lg font-semibold dark:text-white">🏅 Badges</Text>
      {badges.map((b) => (
        <BadgeCard key={b.id} badge={b} />
      ))}
    </ScrollView>
  );
};

export default Gamification;
