import { Book, BarChart2, Target, User, Settings, Mic } from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

type Entry = {
  id: number;
  content: string;
  category: string;
  date: string;
  mood: number;
};

type Objective = {
  id: number;
  category: string;
  target: number;
  current: number;
  percentage: number;
};

type QuietHours = {
  start: string;
  end: string;
};

export default function MyEvolApp() {
  const [activeTab, setActiveTab] = useState<'Journal' | 'Stats' | 'Objectifs' | 'Paramètres'>(
    'Journal'
  );
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [quietHours] = useState<QuietHours>({ start: '22:00', end: '07:00' });

  const [entries, setEntries] = useState<Entry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Bien-être Mental');
  const [mood, setMood] = useState(5);
  const [isRecording, setIsRecording] = useState(false);

  const [objectives] = useState<Objective[]>([
    { id: 1, category: 'Forme Physique', target: 5, current: 3, percentage: 60 },
    { id: 2, category: 'Bien-être Mental', target: 3, current: 3, percentage: 100 },
    { id: 3, category: 'Relations', target: 4, current: 1, percentage: 25 },
  ]);

  const [stats, setStats] = useState({
    todayEntries: 0,
    totalEntries: 0,
    currentStreak: 7,
    level: 5,
  });

  const handleAddEntry = () => {
    if (!newEntry.trim()) return;
    const entry: Entry = {
      id: Date.now(),
      content: newEntry,
      category: selectedCategory,
      date: new Date().toISOString(),
      mood,
    };
    setEntries([entry, ...entries]);
    setNewEntry('');
    setMood(5);
    setStats((prev) => ({
      ...prev,
      todayEntries: prev.todayEntries + 1,
      totalEntries: prev.totalEntries + 1,
    }));
  };

  const renderJournalTab = () => (
    <ScrollView className="p-4">
      <View className="mb-4 rounded-xl bg-white p-4 dark:bg-neutral-900">
        <TextInput
          placeholder="Qu'avez-vous accompli aujourd'hui ?"
          value={newEntry}
          onChangeText={setNewEntry}
          multiline
          className="h-28 rounded-lg border p-3 text-base text-black dark:text-white"
        />
        <Text className="mt-4 font-medium text-gray-700 dark:text-gray-300">
          Humeur (1–10) :{mood}
        </Text>
        <TextInput
          keyboardType="numeric"
          value={String(mood)}
          onChangeText={(text) => setMood(Number(text))}
          className="mt-1 rounded-lg border p-2 text-black dark:text-white"
        />
        <View className="mt-4 flex-row items-center justify-between">
          <Pressable
            onPress={() => setIsRecording(!isRecording)}
            className={`rounded-full p-2 ${isRecording ? 'bg-red-100' : 'bg-gray-100 dark:bg-gray-700'}`}>
            <Mic color={isRecording ? 'red' : 'white'} />
          </Pressable>
          <Pressable
            onPress={handleAddEntry}
            className={`rounded-lg bg-purple-600 px-4 py-2 ${!newEntry.trim() ? 'opacity-50' : ''}`}
            disabled={!newEntry.trim()}>
            <Text className="font-semibold text-white">Enregistrer</Text>
          </Pressable>
        </View>
      </View>

      <Text className="mb-2 text-lg font-semibold dark:text-white">Vos entrées</Text>
      {entries.map((entry) => (
        <View key={entry.id} className="mb-2 rounded-lg bg-white p-4 dark:bg-neutral-900">
          <View className="mb-1 flex-row justify-between">
            <Text className="text-purple-600">{entry.category}</Text>
            <Text className="text-gray-500 dark:text-gray-400">
              {new Date(entry.date).toLocaleTimeString()}
            </Text>
          </View>
          <Text className="text-gray-800 dark:text-white">{entry.content}</Text>
          <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Humeur : {entry.mood}/10
          </Text>
        </View>
      ))}
    </ScrollView>
  );

  const renderStatsTab = () => (
    <View className="p-4">
      <View className="mb-4 flex-row justify-between">
        <View className="w-[48%] rounded-lg bg-white p-4 dark:bg-neutral-900">
          <Text className="text-gray-500 dark:text-gray-300">Aujourd’hui</Text>
          <Text className="text-2xl font-bold dark:text-white">{stats.todayEntries}</Text>
        </View>
        <View className="w-[48%] rounded-lg bg-white p-4 dark:bg-neutral-900">
          <Text className="text-gray-500 dark:text-gray-300">Total</Text>
          <Text className="text-2xl font-bold dark:text-white">{stats.totalEntries}</Text>
        </View>
      </View>
    </View>
  );

  const renderObjectivesTab = () => (
    <ScrollView className="p-4">
      <Text className="mb-4 text-lg font-semibold dark:text-white">Objectifs</Text>
      {objectives.map((obj) => (
        <View key={obj.id} className="mb-3 rounded-lg bg-white p-4 dark:bg-neutral-900">
          <View className="mb-2 flex-row justify-between">
            <Text className="font-medium dark:text-white">{obj.category}</Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              {obj.current}/{obj.target}
            </Text>
          </View>
          <View className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <View
              className="h-2 rounded-full bg-purple-600"
              style={{ width: `${obj.percentage}%` }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );

  const renderSettingsTab = () => (
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

  const renderTab = () => {
    switch (activeTab) {
      case 'Journal':
        return renderJournalTab();
      case 'Stats':
        return renderStatsTab();
      case 'Objectifs':
        return renderObjectivesTab();
      case 'Paramètres':
        return renderSettingsTab();
      default:
        return null;
    }
  };

  const tabs = [
    { name: 'Journal', icon: Book },
    { name: 'Stats', icon: BarChart2 },
    { name: 'Objectifs', icon: Target },
    { name: 'Paramètres', icon: Settings },
  ];

  return (
    <SafeAreaView className={`flex-1 ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-black`}>
      {/* Header */}
      <View className="bg-gradient-to-r from-purple-600 to-blue-500 p-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold text-white">MyEvol</Text>
          <View className="flex-row items-center space-x-3">
            <Text className="text-white">⭐ Niveau {stats.level}</Text>
            <Text className="text-white">🔥 {stats.currentStreak} jours</Text>
            <User color="white" />
          </View>
        </View>
      </View>

      {/* Contenu */}
      <View className="flex-1">{renderTab()}</View>

      {/* Tabs navigation */}
      <View className="flex-row justify-around border-t bg-white py-3 dark:bg-neutral-900">
        {tabs.map(({ name, icon: Icon }) => (
          <Pressable key={name} onPress={() => setActiveTab(name as any)} className="items-center">
            <Icon color={activeTab === name ? '#9333ea' : '#6b7280'} />
            <Text
              className={`${activeTab === name ? 'text-purple-600' : 'text-gray-500'} dark:text-white`}>
              {name}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}
