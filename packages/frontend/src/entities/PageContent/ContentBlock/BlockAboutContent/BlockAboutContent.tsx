import { FC, ReactNode } from "react";
import Styles from "./BlockAboutContent.module.scss";

interface BlockAboutContentProps {
  children?: ReactNode;
}

const BlockAboutContent: FC<BlockAboutContentProps> = ({ children }) => {
  return <div className={Styles.wrapper}>{children}</div>;
};

export default BlockAboutContent;
