import { FC } from 'react';
import Styles from './StillsModule.module.scss';
import ModuleCard from 'src/entities/film/ModuleCard/ModuleCard';
import Stills from 'src/entities/film/Stills/Stills';
import { StillsModuleInfo } from './types';

interface StillsModuleProps {
  data: StillsModuleInfo[];
}

const StillsModule: FC<StillsModuleProps> = ({ data }) => {
  return (
    <ModuleCard title="Кадры">
      <div className={Styles.wrapper}>
        {data.map((data) => (
          <Stills key={data.frame} frame={data.frame} />
        ))}
      </div>
    </ModuleCard>
  );
};

export default StillsModule;
