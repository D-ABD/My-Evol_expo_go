import React from 'react';
import { View, Text, Switch } from 'react-native';

import Card from './ui/Card';
import { COLORS } from '../constants/colors';
import { SettingsTabProps } from '../types/types'; // ✅ Types props

const Parametres = ({
  darkMode,
  setDarkMode,
  notifications,
  setNotifications,
  quietHours,
}: SettingsTabProps) => {
  return (
    <View className="space-y-4 p-4">
      {/* Carte : Mode sombre */}
      <Card>
        <View className="flex-row items-center justify-between">
          <Text
            className="text-base font-medium dark:text-white"
            style={{ color: darkMode ? COLORS.white : COLORS.black }}>
            🌙 Mode sombre
          </Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </Card>

      {/* Carte : Notifications */}
      <Card>
        <View className="flex-row items-center justify-between">
          <Text
            className="text-base font-medium dark:text-white"
            style={{ color: darkMode ? COLORS.white : COLORS.black }}>
            🔔 Notifications
          </Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>
      </Card>

      {/* Carte : Heures de silence */}
      <Card>
        <Text
          className="mb-1 text-base font-medium dark:text-white"
          style={{ color: darkMode ? COLORS.white : COLORS.black }}>
          🕐 Heures de silence
        </Text>
        <Text
          className="text-gray-600 dark:text-gray-400"
          style={{ color: darkMode ? COLORS.grayDark : COLORS.grayLight }}>
          {quietHours.start} - {quietHours.end}
        </Text>
      </Card>
    </View>
  );
};

export default Parametres;
