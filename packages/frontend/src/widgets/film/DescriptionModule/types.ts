export type EnumContributor = "author" | "externalSource";

export type FilmDescriptionLanguage = "ru" | "en";

export interface FilmDescriptionData {
  text: string;
  contributor: {
    type: EnumContributor;
    name: string;
    avatar?: string;
  };
}

export type FilmDescription = Record<FilmDescriptionLanguage, FilmDescriptionData>;
