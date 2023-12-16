import { FC, ReactNode } from "react";
import Style from "./BlockInfoLeft.module.scss";

interface BlockInfoLeftProps {
  children?: ReactNode;
}

const BlockInfoLeft: FC<BlockInfoLeftProps> = ({ children }) => {
  return <div className={Style.wrapperBlockLeft}>{children}</div>;
};

export default BlockInfoLeft;
