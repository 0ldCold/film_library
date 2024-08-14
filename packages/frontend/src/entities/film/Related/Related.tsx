import { FC } from 'react';
import Styles from './Related.module.scss';
import Image from 'next/image';
import poster404 from './404poster.png';
import { transformReleaseDate } from './helper';
import { useAppSelector } from 'src/shared/store/hooks';
import { clsx } from 'clsx';

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
        <div className={clsx(Styles.name, theme === 'light' && Styles.lightName)}>{name}</div>
        <div className={Styles.row}>
          {info && (
            <div
              className={clsx(
                Styles.signs,
                theme === 'light' ? Styles.lightSigns : Styles.darkSigns,
              )}
            >
              {info}
            </div>
          )}

          {releaseDate && (
            <div
              className={clsx(
                Styles.signs,
                theme === 'light' ? Styles.lightSigns : Styles.darkSigns,
              )}
            >
              {transformReleaseDate(releaseDate)}
            </div>
          )}
          {(publisher ?? studio) && (
            <div
              className={clsx(
                Styles.publisher,
                theme === 'light' ? Styles.lightPublisher : Styles.darkLabel,
              )}
            >
              {publisher ?? studio}
            </div>
          )}
          {story && (
            <div
              className={clsx(
                Styles.story,
                theme === 'light' ? Styles.lightStory : Styles.darkLabel,
              )}
            >
              {story}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Related;
