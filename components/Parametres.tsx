import React from 'react';
import { View, Text, Switch } from 'react-native';

import { SettingsTabProps } from '../types/types';

const Parametres = ({
  darkMode,
  setDarkMode,
  notifications,
  setNotifications,
  quietHours,
}: SettingsTabProps) => (
  <View className="space-y-4 p-4">
    <View className="flex-row items-center justify-between">
      <Text className="dark:text-white">Mode sombre</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />
    </View>
    <View className="flex-row items-center justify-between">
      <Text className="dark:text-white">Notifications</Text>
      <Switch value={notifications} onValueChange={setNotifications} />
    </View>
    <View>
      <Text className="font-medium dark:text-white">Heures de silence</Text>
      <Text className="text-gray-500 dark:text-gray-400">
        {quietHours.start} - {quietHours.end}
      </Text>
    </View>
  </View>
);

export default Parametres;
