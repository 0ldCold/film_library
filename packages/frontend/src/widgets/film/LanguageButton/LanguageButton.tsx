import { FC } from "react";
import Styles from "./LanguageButton.module.scss";

export type Language = "ru" | "en";

export interface LanguageButtonProps {
  language: Language;
  onClick?: (type: Language) => void;
}

const LanguageButton: FC<LanguageButtonProps> = ({ language, onClick }) => {
  return (
    <div className={Styles.language_button} onClick={() => onClick?.(language)}>
      <span>{language}</span>
    </div>
  );
};

export default LanguageButton;
