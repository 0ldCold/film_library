import { FC } from "react";
import Styles from "./StillsModule.module.scss";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import Stills from "src/entities/film/Stills/Stills";
import { StillsModuleInfo } from "./types";

interface StillsModule {
  data: StillsModuleInfo[];
}

const StillsModule: FC<StillsModule> = ({ data }) => {
  return (
    <ModuleCard title='Кадры'>
      <div className={Styles.wrapper}>
        {data.map((data) => (
          <Stills frame={data.frame} />
        ))}
      </div>
    </ModuleCard>
  );
};

export default StillsModule;
