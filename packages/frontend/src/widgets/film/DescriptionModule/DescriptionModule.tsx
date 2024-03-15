import markdownit from "markdown-it";
import { FC, useState } from "react";
import parse from "html-react-parser";
import Styles from "./DescriptionModule.module.scss";
import { FilmDescription } from "./types";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import LanguageButton, { Language } from "src/widgets/film/DescriptionModule/LanguageButton";
import { helpers } from "src/widgets/film/DescriptionModule/helpers";
import Contributor from "src/widgets/film/DescriptionModule/Contributor";

export interface DescriptionModuleProps {
  data: FilmDescription;
}

const DescriptionModule: FC<DescriptionModuleProps> = ({ data }) => {
  const [language, setLanguage] = useState<Language>("ru");

  const onLanguageButtonClick = (language: Language): void => {
    setLanguage(helpers(language));
  };

  return (
    <div className={Styles.description}>
      <ModuleCard title={"Описание"}>
        <LanguageButton language={language} onClick={onLanguageButtonClick} />
        <div className={Styles.text}>{parse(markdownit().render(data[language].text))}</div>
        <Contributor type={data[language].contributor.type} name={data[language].contributor.name} avatar={data[language].contributor.avatar}/>
      </ModuleCard>
    </div>
  );
};

export default DescriptionModule;
