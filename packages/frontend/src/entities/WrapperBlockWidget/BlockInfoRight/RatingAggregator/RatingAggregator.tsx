import { FC, ReactNode } from "react";
import Style from "./RatingAggregator.module.scss";

interface RatingAggregatorProps {
  children?: ReactNode;
}

const RatingAggregator: FC<RatingAggregatorProps> = ({ children }) => {
  return <div className={Style.wrapperRatingAggregator}>{children}</div>;
};

export default RatingAggregator;
