import { FilmDescriptionLanguage } from "src/widgets/film/DescriptionModule/types";

export const switchLanguage = (language: FilmDescriptionLanguage): FilmDescriptionLanguage => {
  switch (language) {
    case "ru":
      return "en";
    case "en":
      return "ru";
  }
};
