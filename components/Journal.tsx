import { Mic, Trash2 } from 'lucide-react-native';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';

import Card from './ui/Card';
import { CATEGORIES } from '../constants/categories';
import { COLORS } from '../constants/colors';
import { JournalTabProps } from '../types/types';

type JournalEntryProps = {
  entry: {
    id: number;
    category: string;
    content: string;
    mood: number;
  };
  onDelete: (id: number) => void;
};

const JournalEntry = ({ entry, onDelete }: JournalEntryProps) => {
  return (
    <Card style={{ marginBottom: 8 }}>
      <View className="mb-1 flex-row items-center justify-between">
        <Text style={{ color: COLORS.purple }}>{entry.category}</Text>
        <Pressable onPress={() => onDelete(entry.id)}>
          <Trash2 size={18} color={COLORS.red} />
        </Pressable>
      </View>
      <Text className="text-gray-800 dark:text-white">{entry.content}</Text>
      <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Humeur : {entry.mood}/10
      </Text>
    </Card>
  );
};

const Journal = ({
  newEntry,
  setNewEntry,
  mood,
  setMood,
  isRecording,
  setIsRecording,
  handleAddEntry,
  handleDeleteEntry,
  entries,
  selectedCategory,
  setSelectedCategory,
}: JournalTabProps) => {
  return (
    <ScrollView className="p-4">
      {/* 📝 Formulaire d’entrée */}
      <Card style={{ marginBottom: 16 }}>
        <TextInput
          placeholder="Qu'avez-vous accompli aujourd'hui ?"
          value={newEntry}
          onChangeText={setNewEntry}
          multiline
          className="h-28 rounded-lg border p-3 text-base text-black dark:text-white"
        />

        <Text className="mt-4 font-medium text-gray-700 dark:text-gray-300">Catégorie</Text>
        <View className="mt-2 flex-row flex-wrap">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <Pressable
                key={category}
                onPress={() => setSelectedCategory(category)}
                className={`mb-2 mr-2 rounded-full px-3 py-1 ${
                  isSelected ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                <Text
                  className={`${isSelected ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                  {category}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text className="mt-4 font-medium text-gray-700 dark:text-gray-300">
          Humeur (1–10) : {mood}
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
            className={`rounded-full p-2 ${
              isRecording ? 'bg-red-100' : 'bg-gray-100 dark:bg-gray-700'
            }`}>
            <Mic color={isRecording ? COLORS.red : COLORS.white} />
          </Pressable>

          <Pressable
            onPress={handleAddEntry}
            className={`rounded-lg bg-purple-600 px-4 py-2 ${!newEntry.trim() ? 'opacity-50' : ''}`}
            disabled={!newEntry.trim()}>
            <Text className="font-semibold text-white">Enregistrer</Text>
          </Pressable>
        </View>
      </Card>

      {/* 📜 Liste des entrées */}
      <Text className="mb-2 text-lg font-semibold dark:text-white">Vos entrées</Text>
      {entries.length === 0 ? (
        <Card>
          <Text className="text-center text-gray-500 dark:text-gray-400">
            Aucune entrée pour le moment.{'\n'}Commencez à journaliser vos accomplissements !
          </Text>
        </Card>
      ) : (
        entries.map((entry) => (
          <JournalEntry key={entry.id} entry={entry} onDelete={handleDeleteEntry} />
        ))
      )}
    </ScrollView>
  );
};

export default Journal;
