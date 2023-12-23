import { FC, ReactNode } from "react";
import Styles from "./ContentBlock.module.scss";

interface ContentBlockProps {
  children?: ReactNode;
}

const ContentBlock: FC<ContentBlockProps> = ({ children }) => {
  return <div className={Styles.wrapper}>{children}</div>;
};

export default ContentBlock;
