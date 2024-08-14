import { FC } from 'react';
import Image from 'next/image';
import Avatar404 from './404Avatar.png';
import Styles from './Author.module.scss';
import { useAppSelector } from 'src/shared/store/hooks';
import { clsx } from 'clsx';

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
        <span className={clsx(Styles.name, theme === 'light' && Styles.lightName)}>{name}</span>
        <div className={Styles.row}>
          <div className={clsx(Styles.label, theme === 'light' && Styles.lightLabel)}>
            {roles.length == 1 ? 'Роль: ' : 'Роли: '}
          </div>
          <div className={Styles.rolesContainer}>
            {roles.map((item) => (
              <div key={item} className={clsx(Styles.role, theme === 'light' && Styles.lightRole)}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
