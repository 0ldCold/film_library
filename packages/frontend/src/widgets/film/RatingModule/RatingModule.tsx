import { FC } from 'react';
import ModuleCard from 'src/entities/film/ModuleCard/ModuleCard';
import FilmStatusRating from 'src/entities/film/FilmStatusRating/FilmStatusRating';
import StarRate from 'src/entities/film/StarRate/StarRate';
import Styles from './RatingModule.module.scss';

interface RatingModuleProps {
  rate: number;
}
const RatingModule: FC<RatingModuleProps> = ({ rate }) => {
  return (
    <ModuleCard title="Рейтинг">
      <div className={Styles.contentRow}>
        <StarRate rate={rate} />
        <FilmStatusRating rate={rate} />
      </div>
    </ModuleCard>
  );
};

export default RatingModule;
