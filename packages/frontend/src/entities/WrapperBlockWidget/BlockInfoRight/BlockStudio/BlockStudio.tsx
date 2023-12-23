import { FC, ReactNode } from "react";
//import Style from "./BlockStudio.module.scss";

interface BlockStudioProps {
  children?: ReactNode;
}

const BlockStudio: FC<BlockStudioProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default BlockStudio;
