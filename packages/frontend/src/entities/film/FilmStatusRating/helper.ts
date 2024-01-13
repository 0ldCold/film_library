import { LikesType } from "./types";

export const genLikesFromRate = (rate: number): LikesType => {
  if (rate >= 9.2) return "Превосходно";

  if (rate >= 8.5) return "Отлично";

  if (rate >= 7) return "Хорошо";

  if (rate >= 6) return "Нормально";

  if (rate >= 5) return "Более-менее";

  if (rate >= 4) return "Плохо";

  return "Очень плохо";
};
