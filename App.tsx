// App.tsx
import { LogBox, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MyEvolApp from './components/MyEvolApp';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <MyEvolApp />
    </SafeAreaProvider>
  );
}

if (Platform.OS === 'web') {
  LogBox.ignoreLogs(['shadow* style props are deprecated', 'props.pointerEvents is deprecated']);
}
