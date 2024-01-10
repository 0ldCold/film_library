import { FC } from "react";
import Styles from "./FilmStatusRating.module.scss";
import { genLikesFromRate } from "./helper";

interface FilmStatusRatingProps {
  rate: number;
}

const FilmStatusRating: FC<FilmStatusRatingProps> = ({ rate }) => {
  return (
    <div className={Styles.wrapper}>
      <span className={Styles.rating}>{rate}</span>
      <span className={Styles.grade}>{genLikesFromRate(rate)}</span>
    </div>
  );
};
export default FilmStatusRating;
