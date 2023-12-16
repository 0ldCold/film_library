import { FC, ReactNode } from "react";
import Style from "./Line.module.scss";

interface LineProps {
  children?: ReactNode;
}

const Line: FC<LineProps> = ({ children }) => {
  return <div className={Style.WrapperLine}>{children}</div>;
};

export default Line;
