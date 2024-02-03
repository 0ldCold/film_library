import { FC } from "react";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import Related from "src/entities/film/Related/Related";
import { RelatedInfo } from "./types";
import Styles from "./RelatedModule.module.scss";

interface RelatedModuleProps {
  data: RelatedInfo[];
}

const RelatedModule: FC<RelatedModuleProps> = ({ data }) => {
  return (
    <ModuleCard title='Связанное'>
      <div className={Styles.related}>
        {data.map((info) => (
          <Related
            key={`${info.name} ${info.info}`}
            poster={info.poster}
            name={info.name}
            info={info.info}
            releaseDate={info.releaseDate}
            publisher={info.publisher}
            studio={info.studio}
            story={info.story}
          />
        ))}
      </div>
    </ModuleCard>
  );
};

export default RelatedModule;
