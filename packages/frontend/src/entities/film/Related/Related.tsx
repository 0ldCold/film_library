import { FC } from 'react';
import Styles from './Related.module.scss';
import Image from 'next/image';
import poster404 from './404poster.png';
import { transformReleaseDate } from './helper';

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
  return (
    <div className={Styles.wrapper}>
      <Image src={poster ?? poster404.src} alt="Постер" width={48} height={75} />
      <div className={Styles.container}>
        <div className={Styles.name}>{name}</div>
        <div className={Styles.row}>
          {info && <div className={Styles.signs}>{info}</div>}

          {releaseDate && <div className={Styles.signs}>{transformReleaseDate(releaseDate)}</div>}
          {(publisher ?? studio) && <div className={Styles.publisher}>{publisher ?? studio}</div>}
          {story && <div className={Styles.story}>{story}</div>}
        </div>
      </div>
    </div>
  );
};

export default Related;
