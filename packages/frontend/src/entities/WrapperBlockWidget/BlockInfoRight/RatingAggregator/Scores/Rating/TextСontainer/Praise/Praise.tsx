import { FC, ReactNode } from "react";
import Style from "./Praise.module.scss";

interface PraiseProps {
  children?: ReactNode;
}

const Praise: FC<PraiseProps> = ({ children }) => {
  return <div className={Style.withText}>{children}</div>;
};

export default Praise;
