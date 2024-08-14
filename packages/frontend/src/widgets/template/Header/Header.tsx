import { FC } from 'react';
import Styles from './Header.module.scss';
import Theme from 'src/shared/store/Theme';

const Header: FC = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.imagesBackground}>
        <div className={Styles.wrapper}>
          <h1 className={Styles.logoText}>Фильмотека</h1>
          <Theme />
        </div>
      </div>
    </header>
  );
};

export default Header;
