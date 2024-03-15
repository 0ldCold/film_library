export type Contributor = "Автор" | "Источник"

export interface FilmDescription {
  ru: {
    text: string;
    contributor: {
      type: Contributor;
      name: string;
      avatar?: string;
    };
  };
  en: {
    text: string;
    contributor: {
      type: Contributor;
      name: string;
      avatar?: string;
    };
  };

}
