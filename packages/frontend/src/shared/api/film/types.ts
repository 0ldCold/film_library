export type UserFilmsListType =
  | "watched"
  | "dropped"
  | "paused"
  | "planned"
  | "watching"
  | "reviewed"
  | null;

export type DropdownColor = "blue" | "green" | "red" | "gray";

export interface RateChartInfo {
  rate: number;
  count: number;
}
