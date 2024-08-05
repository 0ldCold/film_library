import markdownit from "markdown-it";
import { FC, useState } from "react";
import parse from "html-react-parser";
import Styles from "./DescriptionModule.module.scss";
import { FilmDescription, FilmDescriptionLanguage } from "./types";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import LanguageButton from "src/features/film/LanguageButton/LanguageButton";
import Contributor from "src/features/film/Contributor/Contributor";

export interface DescriptionModuleProps {
  data: FilmDescription;
}

const mdParser = markdownit();

const DescriptionModule: FC<DescriptionModuleProps> = ({ data }) => {
  const [language, setLanguage] = useState<FilmDescriptionLanguage>("ru");
  const onLanguageButtonClick = (language: FilmDescriptionLanguage): void => {
    setLanguage(language);
  };

  return (
    <div className={Styles.description}>
      <ModuleCard title={"Описание"}>
        <LanguageButton currentLanguage={language} onClick={onLanguageButtonClick} />
        <div className={Styles.text}>{parse(mdParser.render(data[language].text))}</div>
        <Contributor data={data[language].contributor} />
      </ModuleCard>
    </div>
  );
};

export default DescriptionModule;
