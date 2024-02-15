import { FC } from "react";
import Description from "src/entities/film/Description/Description";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";

interface DescriptionModuleProps {
  data: DescriptionModuleInfo;
}

const DescriptionModule: FC<DescriptionModuleProps> = ({ data }) => {
  return (
    <ModuleCard title='Описание'>
      <div>
        <Description text={data.text} />
      </div>
    </ModuleCard>
  );
};

export default DescriptionModule;
