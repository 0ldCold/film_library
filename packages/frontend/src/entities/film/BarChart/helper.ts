import { BarChartRowData } from "./types";

export const calcWidth = (count: number, maxCount: number): number => {
  const sum = (count * 100) / maxCount;
  return Math.floor(sum);
};

export const removeItems = (
  data: BarChartRowData[],
  threshold: number,
  maxValue: number
): BarChartRowData[] => {
  for (let i = data.length - 1; i >= 0; i--) {
    const currentItemWidth = calcWidth(data[i].value, maxValue);

    if (currentItemWidth >= threshold) {
      return data.slice(0, i + 1);
    }
  }

  return data;
};
