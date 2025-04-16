import { Entry } from 'types/types';

export const getEntriesByWeekday = (entries: Entry[]) => {
  const result: { [day: string]: number } = {
    Lun: 0,
    Mar: 0,
    Mer: 0,
    Jeu: 0,
    Ven: 0,
    Sam: 0,
    Dim: 0,
  };
  const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  entries.forEach((entry) => {
    const date = new Date(entry.date);
    const weekday = days[date.getDay()];
    result[weekday] += 1;
  });

  return result;
};
