export const viewingStatus = (episodeCount: number, episodesTotal: number): string => {
  if (episodeCount == episodesTotal) return "Просмотрено";
  if (episodeCount < episodesTotal && episodeCount != 0) return `Просмотрено - ${episodeCount}`;
  return "Запланировано";
};
