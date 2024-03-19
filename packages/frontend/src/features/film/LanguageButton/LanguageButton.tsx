import { FC } from "react";
import Styles from "./LanguageButton.module.scss";
import { switchLanguage } from "src/features/film/LanguageButton/helpers";
import { FilmDescriptionLanguage } from "src/widgets/film/DescriptionModule/types";

export interface LanguageButtonProps {
  currentLanguage: FilmDescriptionLanguage;
  onClick?: (newLanguage: FilmDescriptionLanguage) => void;
}

const LanguageButton: FC<LanguageButtonProps> = ({ currentLanguage, onClick }) => {
  const newLanguage = switchLanguage(currentLanguage);
  return (
    <button className={Styles.language_button} onClick={() => onClick?.(newLanguage)}>
      {newLanguage}
    </button>
  );
};

export default LanguageButton;
