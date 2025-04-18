// hooks/useCategories.ts
import { useState } from 'react';

import { CATEGORIES, Category } from '../constants/categories';

export const useCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(CATEGORIES[0]);

  return {
    CATEGORIES,
    selectedCategory,
    setSelectedCategory,
  };
};
