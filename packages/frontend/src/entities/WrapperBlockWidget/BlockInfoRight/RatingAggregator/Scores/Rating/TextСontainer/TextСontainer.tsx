import { FC, ReactNode } from "react";
import Style from "./TextСontainer.module.scss";

interface TextСontainerProps {
  children?: ReactNode;
}

const TextСontainer: FC<TextСontainerProps> = ({ children }) => {
  return <div className={Style.withText}>{children}</div>;
};

export default TextСontainer;
