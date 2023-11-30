import { FC, ReactNode } from "react";
import Styles from "./Header.module.scss";

interface HeaderProps {
  children?: ReactNode;
}
const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      <div className={Styles.imagesBackground}>
        <div className={Styles.wrapper}>
          <h1 className={Styles.logoText}>Фильмотека</h1>
        </div>
        <div className={Styles.informationSection}>{children}</div>
      </div>
    </header>
  );
};

export default Header;
