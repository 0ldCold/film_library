import { FC } from "react";
import { getStarsFormRate } from "./helper";
import Star from "../Star/Star";
import Styles from "./StarRate.module.scss";

interface StarRateProps {
  rate: number;
}

const StarRate: FC<StarRateProps> = ({ rate }) => {
  const stars = getStarsFormRate(rate);

  return (
    <div className={Styles.row}>
      {stars.map((type, index) => (
        <div className={Styles.iconWrapper} key={index}>
          <Star type={type} />
        </div>
      ))}
    </div>
  );
};

export default StarRate;
