import { FC } from 'react';
import Image from 'next/image';
import Styles from './Similar.module.scss';
import { useAppSelector } from 'src/shared/store/hooks';
import { clsx } from 'clsx';

interface SimilarProps {
  name: string;
  poster: string;
}

const Similar: FC<SimilarProps> = ({ name, poster }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={Styles.wrapper}>
      <Image src={poster} alt="Постер" width={97} height={137} />
      <div className={clsx(Styles.name, theme === 'light' && Styles.lightName)}>{name}</div>
    </div>
  );
};

export default Similar;
