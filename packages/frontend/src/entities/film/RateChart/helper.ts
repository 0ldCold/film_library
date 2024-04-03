import { CSSProperties } from "react";

export const calkWidth = (count: number, maxCount: number): CSSProperties["width"] => {
  const sum = (count * 100) / maxCount;
  return `${Math.floor(sum)}%`;
};
