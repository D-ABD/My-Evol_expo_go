// my-evol-app/
import { Mic } from 'lucide-react-native';
import React from 'react';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';

import { Entry, JournalTabProps } from '../types/types';

// Composant individuel d'entrée de journal
export const JournalEntry = ({ entry }: { entry: Entry }) => {
  return (
    <View className="mb-2 rounded-lg bg-white p-4 dark:bg-neutral-900">
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
  );
};

// Composant pour la vue complète du journal (onglet)
const Journal = ({
  newEntry,
  setNewEntry,
  mood,
  setMood,
  isRecording,
  setIsRecording,
  handleAddEntry,
  entries,
  selectedCategory,
  setSelectedCategory,
}: JournalTabProps) => {
  return (
    <ScrollView className="p-4">
      <View className="mb-4 rounded-xl bg-white p-4 dark:bg-neutral-900">
        <TextInput
          placeholder="Qu'avez-vous accompli aujourd'hui ?"
          value={newEntry}
          onChangeText={setNewEntry}
          multiline
          className="h-28 rounded-lg border p-3 text-base text-black dark:text-white"
        />

        {/* Sélecteur de catégorie */}
        <Text className="mt-4 font-medium text-gray-700 dark:text-gray-300">Catégorie</Text>
        <View className="mt-2 flex-row flex-wrap">
          {['Forme Physique', 'Bien-être Mental', 'Relations', 'Travail'].map((category) => (
            <Pressable
              key={category}
              onPress={() => setSelectedCategory(category)}
              className={`mb-2 mr-2 rounded-full px-3 py-1 ${
                selectedCategory === category ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}>
              <Text
                className={`${
                  selectedCategory === category ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                }`}>
                {category}
              </Text>
            </Pressable>
          ))}
        </View>

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
      {entries.length === 0 ? (
        <View className="items-center justify-center rounded-lg bg-white p-6 dark:bg-neutral-900">
          <Text className="text-center text-gray-500 dark:text-gray-400">
            Aucune entrée pour le moment.{'\n'}Commencez à journaliser vos accomplissements !
          </Text>
        </View>
      ) : (
        entries.map((entry) => <JournalEntry key={entry.id} entry={entry} />)
      )}
    </ScrollView>
  );
};

export default Journal;
