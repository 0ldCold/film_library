import { FC, ReactNode } from "react";
import Styles from "./Subtitle.module.scss";

interface SubTitleProps {
  titleOfTheWork?: string;
  children?: ReactNode;
}

const SubTitle: FC<SubTitleProps> = ({ children, titleOfTheWork }) => {
  return (
    <header>
      <h1 className={Styles.contentName}>
        {children}
        {titleOfTheWork}
      </h1>
    </header>
  );
};
export default SubTitle;
