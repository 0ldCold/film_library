import { FC } from 'react';
import ModuleCard from 'src/entities/film/ModuleCard/ModuleCard';
import { FilmInfo } from 'src/widgets/film/InfoModule/types';
import Styles from './InfoModule.module.scss';
import InfoLabel from 'src/entities/film/InfoLabel/InfoLabel';
import FilmStatus from 'src/entities/film/FilmStatus/FilmStatus';
import { nextEpisodeDateTransform } from 'src/widgets/film/InfoModule/helpers';

interface InfoModuleProps {
  data: FilmInfo;
}
const InfoModule: FC<InfoModuleProps> = ({ data }) => {
  return (
    <ModuleCard title={'Информация'}>
      <div className={Styles.rowsWrapper}>
        <InfoLabel label={'Тип'}>{data.type}</InfoLabel>
        {data.episodes && (
          <InfoLabel label={'Эпизоды'}>
            {`${data.episodes.current ?? data.episodes.total ?? '???'} / ${
              data.episodes.total ?? '???'
            }`}
          </InfoLabel>
        )}
        {data.nextEpisode && (
          <InfoLabel label={'Следующий эпизод'}>
            {nextEpisodeDateTransform(data.nextEpisode)}
          </InfoLabel>
        )}
        {data.episodeDuration && (
          <InfoLabel label={'Длительность эпизода'}>{`${data.episodeDuration} мин.`}</InfoLabel>
        )}
        <InfoLabel label={'Статус'}>
          <FilmStatus status={data.status} createFrom={data.createFrom} createTo={data.createTo} />
        </InfoLabel>
        {data.genres && data.genres.length > 0 && (
          <InfoLabel label={'Жанры'}>{data.genres.join(' ')}</InfoLabel>
        )}
        {data.ageRating && <InfoLabel label={'Рейтинг'}>{data.ageRating}</InfoLabel>}
        {data.commentsCount && (
          <div className={Styles.commentsRow}>
            <InfoLabel label={'У аниме'}>{`${data.commentsCount} комментариев`}</InfoLabel>
          </div>
        )}
      </div>
    </ModuleCard>
  );
};

export default InfoModule;
