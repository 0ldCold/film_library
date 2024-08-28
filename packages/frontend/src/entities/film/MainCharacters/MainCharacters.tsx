import { FC } from 'react';
import Image from 'next/image';
import poster404 from './404poster.png';
import Styles from './MainCharacters.module.scss';
import Typography from 'src/shared/uiKit/Typography/Typography';
import { useAppSelector } from 'src/shared/store/hooks';

interface MainCharactersProps {
  name: string;
  poster?: string;
}

const MainCharacters: FC<MainCharactersProps> = ({ name, poster }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={Styles.wrapper}>
      <Image src={poster ?? poster404.src} alt="Постер" width={97} height={151} />
      <Typography className={Styles.name} isWithoutDarkTheme={theme === 'light'}>
        {name}
      </Typography>
    </div>
  );
};

export default MainCharacters;
