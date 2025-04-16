import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';

import { ObjectivesTabProps, Objective } from '../types/types';
import Card from './ui/Card';

const Objectives = ({ objectives }: ObjectivesTabProps) => {
  const [allObjectives, setAllObjectives] = useState(objectives);
  const [newCategory, setNewCategory] = useState('');
  const [newTarget, setNewTarget] = useState('');

  const handleAddObjective = () => {
    if (!newCategory.trim() || !newTarget.trim()) return;

    const newObj: Objective = {
      id: Date.now(),
      category: newCategory,
      target: Number(newTarget),
      current: 0,
      percentage: 0,
    };

    setAllObjectives([...allObjectives, newObj]);
    setNewCategory('');
    setNewTarget('');
  };

  return (
    <ScrollView className="p-4">
      <Text className="mb-4 text-xl font-bold text-purple-600 dark:text-white">🎯 Objectifs</Text>

      {/* 🔽 Formulaire d’ajout */}
      <Card className="mb-4">
        <Text className="mb-2 text-base font-medium dark:text-white">Ajouter un objectif</Text>
        <TextInput
          placeholder="Catégorie"
          value={newCategory}
          onChangeText={setNewCategory}
          className="mb-2 rounded-lg border p-2 text-black dark:text-white"
        />
        <TextInput
          placeholder="Objectif (ex: 5)"
          value={newTarget}
          onChangeText={setNewTarget}
          keyboardType="numeric"
          className="mb-2 rounded-lg border p-2 text-black dark:text-white"
        />
        <Pressable
          onPress={handleAddObjective}
          className={`rounded-lg bg-purple-600 px-4 py-2 ${
            !newCategory.trim() || !newTarget.trim() ? 'opacity-50' : ''
          }`}
          disabled={!newCategory.trim() || !newTarget.trim()}>
          <Text className="text-center font-semibold text-white">Ajouter</Text>
        </Pressable>
      </Card>

      {/* 🔽 Liste des objectifs */}
      {allObjectives.map((obj) => (
        <Card key={obj.id} className="mb-4">
          <View className="mb-2 flex-row justify-between">
            <Text className="text-base font-medium dark:text-white">{obj.category}</Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              {obj.current}/{obj.target}
            </Text>
          </View>

          <View className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <View
              className="h-3 rounded-full bg-purple-600"
              style={{ width: `${obj.percentage}%` }}
            />
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Objectives;
