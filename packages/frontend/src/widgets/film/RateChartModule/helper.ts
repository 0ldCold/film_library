export const calkWidth = (count: number, maxCount: number): string => {
  const sum = (count * 100) / maxCount;
  return `${Math.floor(sum)}%`;
};

export const getColorByWidth = (widthPercent: number): string => {
  if (widthPercent > 80) {
    return "#4682b4";
  } else if (widthPercent > 79) {
    return "#6295bd";
  } else if (widthPercent > 40) {
    return "#79a9cf";
  } else {
    return "#98c2e3";
  }
};
