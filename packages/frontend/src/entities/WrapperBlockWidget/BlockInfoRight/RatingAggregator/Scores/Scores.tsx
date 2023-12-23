import { FC, ReactNode } from "react";
import Style from "./Scores.module.scss";

interface ScoresProps {
  children?: ReactNode;
}

const Scores: FC<ScoresProps> = ({ children }) => {
  return <div className={Style.scoresWrapper}>{children}</div>;
};

export default Scores;
