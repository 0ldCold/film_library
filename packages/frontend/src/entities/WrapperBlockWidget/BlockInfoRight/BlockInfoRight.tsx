import { FC, ReactNode } from "react";
import Style from "./BlockInfoRight.module.scss";

interface BlockInfoRightProps {
  children?: ReactNode;
}

const BlockInfoRight: FC<BlockInfoRightProps> = ({ children }) => {
  return <div className={Style.wrapperBlockInfoRight}>{children}</div>;
};

export default BlockInfoRight;
