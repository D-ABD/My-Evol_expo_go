import React from 'react';
import { View, Text, Switch } from 'react-native';

import { SettingsTabProps } from '../types/types';
import Card from './ui/Card'; // ✅ Composant Card centralisé

const Parametres = ({
  darkMode,
  setDarkMode,
  notifications,
  setNotifications,
  quietHours,
}: SettingsTabProps) => (
  <View className="space-y-4 p-4">
    {/* Carte : Mode sombre */}
    <Card>
      <View className="flex-row items-center justify-between">
        <Text className="text-base font-medium dark:text-white">🌙 Mode sombre</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </Card>

    {/* Carte : Notifications */}
    <Card>
      <View className="flex-row items-center justify-between">
        <Text className="text-base font-medium dark:text-white">🔔 Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
    </Card>

    {/* Carte : Heures de silence */}
    <Card>
      <Text className="mb-1 text-base font-medium dark:text-white">🕐 Heures de silence</Text>
      <Text className="text-gray-600 dark:text-gray-400">
        {quietHours.start} - {quietHours.end}
      </Text>
    </Card>
  </View>
);

export default Parametres;
