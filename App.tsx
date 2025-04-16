// App.tsx
import { LogBox, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import MyEvolApp from './components/MyEvolApp';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <MyEvolApp />
      <Toast /> {/* ✅ Ajouté ici, dans le JSX */}
    </SafeAreaProvider>
  );
}

if (Platform.OS === 'web') {
  LogBox.ignoreLogs(['shadow* style props are deprecated', 'props.pointerEvents is deprecated']);
}
