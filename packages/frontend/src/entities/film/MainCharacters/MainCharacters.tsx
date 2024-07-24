import { FC } from 'react';
import Image from 'next/image';
import poster404 from './404poster.png';
import Styles from './MainCharacters.module.scss';

interface MainCharactersProps {
  name: string;
  poster?: string;
}

const MainCharacters: FC<MainCharactersProps> = ({ name, poster }) => {
  return (
    <div className={Styles.wrapper}>
      <Image src={poster ?? poster404.src} alt="Постер" width={97} height={151} />
      <div className={Styles.name}>{name}</div>
    </div>
  );
};

export default MainCharacters;
