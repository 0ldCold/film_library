export const calcWidth = (count: number, maxCount: number): number => {
  const sum = (count * 100) / maxCount;
  return Math.floor(sum);
};
