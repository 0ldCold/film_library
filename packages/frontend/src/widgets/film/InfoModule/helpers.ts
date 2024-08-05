export const nextEpisodeDateTransform = (date: Date): string => {
  return date.toLocaleDateString("ru", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
};
