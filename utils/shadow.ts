// utils/shadow.ts
import { Platform } from 'react-native';

export const shadowStyle = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  android: {
    elevation: 4,
  },
  web: {
    // ✅ Corrige le warning en remplaçant les "shadow*" par boxShadow
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
});
