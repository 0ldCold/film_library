export const transformDate = (date: Date): string => {
  return date.toLocaleDateString("ru", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
