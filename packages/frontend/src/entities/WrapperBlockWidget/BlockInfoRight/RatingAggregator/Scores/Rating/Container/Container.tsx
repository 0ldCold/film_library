import { FC, ReactNode } from "react";
// import Style from "./Container.module.scss";

interface ContainerProps {
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Container;
