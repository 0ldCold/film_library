import { FC } from "react";
import Styles from "./FilmStatusRating.module.scss";

interface FilmStatusRatingProps {
  date?: string;
}

const FilmStatusRating: FC<FilmStatusRatingProps> = ({ date }) => {
  return (
    <div>
      <span className={Styles.wrapperRating}>{date}</span>
      <span className={Styles.wrapperGrade}>1</span>
    </div>
  );
};
export default FilmStatusRating;
