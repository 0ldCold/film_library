import markdownit from "markdown-it";
import { FC, useState } from "react";
import parse from "html-react-parser";
import Styles from "./DescriptionModule.module.scss";
import { FilmDescription } from "./types";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import LanguageButton, { Language } from "src/widgets/film/LanguageButton/LanguageButton";
import { switchLanguage } from "src/widgets/film/DescriptionModule/helpers";
import Contributor from "src/widgets/film/ContributorModule/Contributor";

export interface DescriptionModuleProps {
  data: FilmDescription;
}

const DescriptionModule: FC<DescriptionModuleProps> = ({ data }) => {
  const [language, setLanguage] = useState<Language>("ru");

  const onLanguageButtonClick = (language: Language): void => {
    setLanguage(language);
  };
  const text = parse(markdownit().render(data[language].text));

  return (
    <div className={Styles.description}>
      <ModuleCard title={"Описание"}>
        <LanguageButton language={switchLanguage(language)} onClick={onLanguageButtonClick} />
        <div className={Styles.text}>{text}</div>
        <Contributor data={data[language].contributor}/>
      </ModuleCard>
    </div>
  );
};

export default DescriptionModule;
