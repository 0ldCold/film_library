export const transformReleaseDate = (date: Date): string => {
  const year = date.getFullYear();
  return `${year} год`;
};
