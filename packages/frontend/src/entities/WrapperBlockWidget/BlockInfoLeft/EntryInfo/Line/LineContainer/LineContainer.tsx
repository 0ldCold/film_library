import { FC, ReactNode } from "react";
import Style from "./LineContainer.module.scss";

interface LineContainerProps {
  children?: ReactNode;
}

const LineContainer: FC<LineContainerProps> = ({ children }) => {
  return <div className={Style.WrapperLineContainer}>{children}</div>;
};

export default LineContainer;
