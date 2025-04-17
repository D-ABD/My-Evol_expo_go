export const CATEGORIES = ['Forme Physique', 'Bien-être Mental', 'Relations', 'Travail'] as const;

export type Category = (typeof CATEGORIES)[number];

// Fonction utilitaire pour générer une distribution vide
export const createEmptyCategoryDistribution = (): Record<Category, number> => {
  return Object.fromEntries(CATEGORIES.map((cat) => [cat, 0])) as Record<Category, number>;
};
