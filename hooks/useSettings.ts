import { useState } from 'react';

import { DEFAULT_QUIET_HOURS } from '../constants/settings';
import { QuietHours } from '../types/types';

export const useSettings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [quietHours] = useState<QuietHours>(DEFAULT_QUIET_HOURS);

  return {
    darkMode,
    setDarkMode,
    notifications,
    setNotifications,
    quietHours,
  };
};
