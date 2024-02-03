import { FC } from "react";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import { MainCharactersModuleInfo } from "./types";
import MainCharacters from "src/entities/film/MainCharacters/MainCharacters";
import Styles from "./MainCharactersModule.module.scss";

interface MainCharactersModuleProps {
  data: MainCharactersModuleInfo[];
}

const MainCharactersModule: FC<MainCharactersModuleProps> = ({ data }) => {
  return (
    <ModuleCard title='Главные герои'>
      <div className={Styles.wrapper}>
        {data.map((info) => (
          <MainCharacters key={info.name} name={info.name} poster={info.poster} />
        ))}
      </div>
    </ModuleCard>
  );
};

export default MainCharactersModule;
