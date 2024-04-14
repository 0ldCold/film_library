export const getColorByWidth = (widthPercent: number): string => {
  if (widthPercent >= 80) {
    return "#4682b4";
  }
  if (widthPercent >= 60) {
    return "#6295bd";
  }
  if (widthPercent >= 40) {
    return "#79a9cf";
  }

  return "#98c2e3";
};
