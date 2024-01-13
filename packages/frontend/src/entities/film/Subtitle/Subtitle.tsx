import { FC, ReactNode } from "react";
import Styles from "./Subtitle.module.scss";

interface SubtitleProps {
  titleOfTheWork?: string;
  children?: ReactNode;
}

const Subtitle: FC<SubtitleProps> = ({ children, titleOfTheWork }) => {
  return (
    <h1 className={Styles.contentName}>
      {children}
      {titleOfTheWork}
    </h1>
  );
};
export default Subtitle;
