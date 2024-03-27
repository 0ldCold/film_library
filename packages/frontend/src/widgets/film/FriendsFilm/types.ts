export interface IFilmFriends {
  friend: {
    name: string;
    avatar?: string;
  };
  episodeCount: number;
  episodesTotal: number | null;
}
