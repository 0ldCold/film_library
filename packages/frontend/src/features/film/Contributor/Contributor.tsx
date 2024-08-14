import { FC } from 'react';
import Styles from './Contributor.module.scss';
import Image from 'next/image';
import Avatar404 from 'src/entities/film/Author/404Avatar.png';
import { FilmDescriptionData } from '../../../widgets/film/DescriptionModule/types';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'src/shared/store/hooks';
import { clsx } from 'clsx';

interface ContributorProps {
  data: FilmDescriptionData['contributor'];
}

const Contributor: FC<ContributorProps> = ({ data }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const { t } = useTranslation();
  return (
    <div className={Styles.contributor}>
      <div
        className={clsx(Styles.type, theme === 'light' && Styles.lightType)}
      >{`${t(`film.contributor.${data.type}`)}: `}</div>
      {data.type !== 'externalSource' && (
        <Image
          className={Styles.img}
          src={data.avatar ?? Avatar404.src}
          alt={data.type}
          width={16}
          height={16}
        />
      )}
      <div className={Styles.name}>
        <a href="">{data.name}</a>
      </div>
    </div>
  );
};

export default Contributor;
