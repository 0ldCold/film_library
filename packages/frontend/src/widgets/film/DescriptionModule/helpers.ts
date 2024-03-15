import { Language } from "src/widgets/film/LanguageButton/LanguageButton";

export const switchLanguage = (language: Language): Language => {
  switch (language) {
    case "ru":
      return "en";
    case "en":
      return "ru";
  }
};
