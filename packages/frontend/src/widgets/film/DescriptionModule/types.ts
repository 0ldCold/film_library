export enum EnumContributor {
  Author = "Автор",
  Source = "Источник",
}
export type FilmDescription = Record<FilmDescriptionLanguage, FilmDescriptionData>;

export type FilmDescriptionLanguage = "ru" | "en";

export interface FilmDescriptionData {
  text: string;
  contributor: {
    type: EnumContributor;
    name: string;
    avatar?: string;
  };
}
