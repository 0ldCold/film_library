import { FC } from 'react';
import Image from 'next/image';
import Styles from './Similar.module.scss';
import Typography from 'src/shared/uiKit/Typography/Typography';

interface SimilarProps {
  name: string;
  poster: string;
}

const Similar: FC<SimilarProps> = ({ name, poster }) => {
  return (
    <div className={Styles.wrapper}>
      <Image src={poster} alt="Постер" width={97} height={137} />
      <Typography className={Styles.name}>{name}</Typography>
    </div>
  );
};

export default Similar;
