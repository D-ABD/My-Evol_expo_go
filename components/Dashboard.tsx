import React from 'react';
import { View, Text } from 'react-native';

import Card from './ui/Card'; // ✅ Composant centralisé pour l'ombre et le style

const Dashboard = () => {
  return (
    <View className="p-4">
      <Text className="mb-4 text-xl font-bold text-purple-600 dark:text-white">
        Tableau de bord
      </Text>

      {/* Résumé Journal */}
      <Card style={{ marginBottom: 16 }}>
        <Text className="text-lg font-semibold dark:text-white">Résumé du jour</Text>
        {/* TODO: humeur moyenne, entrées du jour */}
      </Card>

      {/* Objectifs en cours */}
      <Card style={{ marginBottom: 16 }}>
        <Text className="text-lg font-semibold dark:text-white">Objectifs</Text>
        {/* TODO: afficher les barres de progression */}
      </Card>

      {/* Badges et progression */}
      <Card>
        <Text className="text-lg font-semibold dark:text-white">Progression & Badges</Text>
        {/* TODO: Niveau, badges débloqués */}
      </Card>
    </View>
  );
};

export default Dashboard;
