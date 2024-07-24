import { FC } from 'react';
import ModuleCard from 'src/entities/film/ModuleCard/ModuleCard';
import Styles from './SimilarModule.module.scss';
import { SimilarModuleInfo } from './types';
import Similar from 'src/entities/film/Similar/Similar';

interface SimilarModuleProps {
  data: SimilarModuleInfo[];
}

const SimilarModule: FC<SimilarModuleProps> = ({ data }) => {
  return (
    <ModuleCard title="Похожее">
      <div className={Styles.wrapper}>
        {data.map((data) => (
          <Similar key={data.name} name={data.name} poster={data.poster} />
        ))}
      </div>
    </ModuleCard>
  );
};

export default SimilarModule;
