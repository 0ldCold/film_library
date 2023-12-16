import { FC, ReactNode } from "react";
import Style from "./Rating.module.scss";

interface RatingProps {
  children?: ReactNode;
}

const Rating: FC<RatingProps> = ({ children }) => {
  return <div className={Style.ratingWrap}>{children}</div>;
};

export default Rating;
