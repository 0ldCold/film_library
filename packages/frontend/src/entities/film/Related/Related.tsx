import { FC } from 'react';
import Styles from './Related.module.scss';
import Image from 'next/image';
import poster404 from './404poster.png';
import { transformReleaseDate } from './helper';
import { useAppSelector } from 'src/shared/store/hooks';
import { clsx } from 'clsx';
import Typography from 'src/shared/uiKit/Typography/Typography';

interface RelatedProps {
  name: string;
  info?: string;
  releaseDate?: Date;
  story?: string;
  publisher?: string;
  studio?: string;
  poster?: string;
}

const Related: FC<RelatedProps> = ({
  name,
  info,
  poster,
  story,
  publisher,
  studio,
  releaseDate,
}) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={Styles.wrapper}>
      <Image src={poster ?? poster404.src} alt="Постер" width={48} height={75} />
      <div className={Styles.container}>
        <Typography className={Styles.name}>{name}</Typography>
        <div className={Styles.row}>
          {info && (
            <Typography className={clsx(Styles.signs, theme === 'dark' && Styles.darkSigns)}>
              {info}
            </Typography>
          )}

          {releaseDate && (
            <Typography className={clsx(Styles.signs, theme === 'dark' && Styles.darkSigns)}>
              {transformReleaseDate(releaseDate)}
            </Typography>
          )}
          {(publisher ?? studio) && (
            <Typography
              className={clsx(Styles.publisher, theme === 'dark' && Styles.darkLabel)}
              isWithoutDarkTheme={true}
            >
              {publisher ?? studio}
            </Typography>
          )}
          {story && (
            <Typography
              className={clsx(Styles.story, theme === 'dark' && Styles.darkLabel)}
              isWithoutDarkTheme={true}
            >
              {story}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default Related;
