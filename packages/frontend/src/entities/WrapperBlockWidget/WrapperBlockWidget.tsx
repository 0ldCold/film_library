import { FC, ReactNode } from "react";
import Style from "./WrapperBlockWidget.module.scss";

interface WrapperBlockWidgetProps {
  children?: ReactNode;
}

const WrapperBlockWidget: FC<WrapperBlockWidgetProps> = ({ children }) => {
  return <div className={Style.wrapperBlock}>{children}</div>;
};

export default WrapperBlockWidget;
