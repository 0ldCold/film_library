import { FilmStatus } from "src/entities/film/FilmStatusLabel/types";

export interface FilmInfo {
  type: string;
  episodes?: {
    total: number | null;
    current?: number;
  };
  nextEpisode?: Date;
  episodeDuration?: number;
  status: FilmStatus;
  createFrom: Date;
  createTo?: Date;
  genres?: string[];
  ageRating?: string;
  commentsCount?: number;
}
