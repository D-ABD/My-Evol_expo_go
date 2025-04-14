// components/Dashboard.tsx
import React from 'react';
import { View, Text } from 'react-native';

const Dashboard = () => {
  return (
    <View className="p-4">
      <Text className="mb-4 text-xl font-bold text-purple-600 dark:text-white">
        Tableau de bord
      </Text>

      {/* Résumé Journal */}
      <View className="mb-4 rounded-lg bg-white p-4 dark:bg-neutral-900">
        <Text className="text-lg font-semibold dark:text-white">Résumé du jour</Text>
        {/* TODO: humeur moyenne, entrées du jour */}
      </View>

      {/* Objectifs en cours */}
      <View className="mb-4 rounded-lg bg-white p-4 dark:bg-neutral-900">
        <Text className="text-lg font-semibold dark:text-white">Objectifs</Text>
        {/* TODO: afficher les barres de progression */}
      </View>

      {/* Badges et progression */}
      <View className="rounded-lg bg-white p-4 dark:bg-neutral-900">
        <Text className="text-lg font-semibold dark:text-white">Progression & Badges</Text>
        {/* TODO: Niveau, badges débloqués */}
      </View>
    </View>
  );
};

export default Dashboard;
