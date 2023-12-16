import { FC } from "react";
import Styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header>
      <div className={Styles.imagesBackground}>
        <div className={Styles.wrapper}>
          <h1 className={Styles.logoText}>Фильмотека</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
