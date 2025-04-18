import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';

import { CATEGORIES, Category } from '../constants/categories';
import { Objective, ObjectivesTabProps } from '../types/types';
import Card from './ui/Card';
import { COLORS } from '../constants/colors';

const Objectives = ({ objectives, handleAddObjective, updateObjectives }: ObjectivesTabProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(CATEGORIES[0]);
  const [newTarget, setNewTarget] = useState('');

  const handleAdd = () => {
    if (!selectedCategory || !newTarget.trim()) return;

    const newObj: Objective = {
      id: Date.now(),
      category: selectedCategory,
      target: Number(newTarget),
      current: 0,
      percentage: 0,
    };

    handleAddObjective?.(newObj);
    setNewTarget('');
  };

  return (
    <ScrollView className="p-4">
      <Text style={{ color: COLORS.purple }} className="mb-4 text-xl font-bold">
        🎯 Objectifs
      </Text>

      {/* Formulaire d’ajout */}
      <Card className="mb-4">
        <Text style={{ color: COLORS.black }} className="mb-2 text-base font-medium">
          Ajouter un objectif
        </Text>

        {/* Menu Catégorie */}
        <Text className="mb-1 text-white">Catégorie</Text>
        <View className="mb-2 flex-row flex-wrap">
          {CATEGORIES.map((cat) => (
            <Pressable
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              className={`mb-2 mr-2 rounded-full px-3 py-1 ${
                selectedCategory === cat ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-700'
              }`}>
              <Text
                className={`text-sm ${
                  selectedCategory === cat ? 'text-white' : 'text-black dark:text-white'
                }`}>
                {cat}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Input Objectif */}
        <TextInput
          placeholder="Objectif (ex: 5)"
          value={newTarget}
          onChangeText={setNewTarget}
          keyboardType="numeric"
          className="mb-2 rounded-lg border p-2 text-black dark:text-white"
        />

        <Pressable
          onPress={handleAdd}
          className={`rounded-lg px-4 py-2 ${
            !selectedCategory || !newTarget.trim() ? 'bg-gray-400 opacity-50' : 'bg-purple-600'
          }`}
          disabled={!selectedCategory || !newTarget.trim()}>
          <Text style={{ color: COLORS.black }} className="text-center font-semibold">
            Ajouter
          </Text>
        </Pressable>
      </Card>

      {/* Liste des objectifs */}
      {objectives.map((obj) => (
        <Card key={obj.id} className="mb-4">
          <View className="mb-2 flex-row justify-between">
            <Text style={{ color: COLORS.black }} className="text-base font-medium">
              {obj.category}
            </Text>
            <Text style={{ color: COLORS.purple }} className="text-sm">
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
