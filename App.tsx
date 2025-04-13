// App.tsx
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
