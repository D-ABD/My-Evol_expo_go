import { Category } from 'constants/categories';
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';

import { ObjectivesTabProps, Objective } from '../types/types';
import Card from './ui/Card';
import { COLORS } from '../constants/colors'; // ✅ Couleurs centralisées

const Objectives = ({ objectives }: ObjectivesTabProps) => {
  const [allObjectives, setAllObjectives] = useState(objectives);
  const [newCategory, setNewCategory] = useState('');
  const [newTarget, setNewTarget] = useState('');

  const handleAddObjective = () => {
    if (!newCategory.trim() || !newTarget.trim()) return;

    const newObj: Objective = {
      id: Date.now(),
      category: newCategory as Category, // ✅ assertion de type
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
      <Text style={{ color: COLORS.purple }} className="mb-4 text-xl font-bold">
        🎯 Objectifs
      </Text>

      {/* 🔽 Formulaire d’ajout */}
      <Card className="mb-4">
        <Text style={{ color: COLORS.white }} className="mb-2 text-base font-medium">
          Ajouter un objectif
        </Text>
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
          className={`rounded-lg px-4 py-2 ${
            !newCategory.trim() || !newTarget.trim() ? 'bg-gray-400 opacity-50' : 'bg-purple-600'
          }`}
          disabled={!newCategory.trim() || !newTarget.trim()}>
          <Text style={{ color: COLORS.white }} className="text-center font-semibold">
            Ajouter
          </Text>
        </Pressable>
      </Card>

      {/* 🔽 Liste des objectifs */}
      {allObjectives.map((obj) => (
        <Card key={obj.id} className="mb-4">
          <View className="mb-2 flex-row justify-between">
            <Text style={{ color: COLORS.white }} className="text-base font-medium">
              {obj.category}
            </Text>
            <Text style={{ color: COLORS.grayLight }} className="text-sm">
              {obj.current}/{obj.target}
            </Text>
          </View>

          <View
            className="h-3 w-full overflow-hidden rounded-full"
            style={{ backgroundColor: COLORS.grayLight }}>
            <View
              className="h-3 rounded-full"
              style={{
                width: `${obj.percentage}%`,
                backgroundColor: COLORS.purple,
              }}
            />
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Objectives;
