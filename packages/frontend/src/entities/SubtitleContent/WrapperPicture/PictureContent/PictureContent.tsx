import { FC, ReactNode } from "react";
import Styles from "./PictureContent.module.scss";

interface PictureContentProps {
  children?: ReactNode;
}

const PictureContent: FC<PictureContentProps> = ({ children }) => {
  return <div className={Styles.contentPicture}>{children}</div>;
};

export default PictureContent;
