import { FC } from 'react';
import Image from 'next/image';
import Avatar404 from './404Avatar.png';
import Styles from './Author.module.scss';
import { useAppSelector } from 'src/shared/store/hooks';
import Typography from 'src/shared/uiKit/Typography/Typography';

interface AuthorProps {
  name: string;
  roles: string[];
  avatar?: string;
}

const Author: FC<AuthorProps> = ({ name, avatar, roles }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={Styles.wrapper}>
      <Image src={avatar ?? Avatar404.src} alt="Автор" width={48} height={75} />
      <div className={Styles.container}>
        <Typography className={Styles.name} isWithoutDarkTheme={theme === 'light'}>
          <span>{name}</span>
        </Typography>
        <div className={Styles.row}>
          <Typography className={Styles.label} isWithoutDarkTheme={theme === 'light'}>
            <div>{roles.length == 1 ? 'Роль: ' : 'Роли: '}</div>
          </Typography>

          <div className={Styles.rolesContainer}>
            {roles.map((item) => (
              <Typography key={item} className={Styles.role} isWithoutDarkTheme={theme === 'light'}>
                <div>{item}</div>
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
