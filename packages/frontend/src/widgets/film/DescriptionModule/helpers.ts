import { Language } from "src/widgets/film/DescriptionModule/LanguageButton";

export const helpers = (language: Language) => {
  switch (language) {
    case "ru":
      return "en";
      break;
    case "en":
      return "ru";
      break;
  }
};
