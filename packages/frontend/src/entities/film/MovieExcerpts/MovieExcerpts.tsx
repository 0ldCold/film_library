import { FC } from "react";
import Styles from "./MovieExcerpts.module.scss";
import Image from "next/image";

export interface MovieExcerptsProps {
  video: string;
}

const MovieExcerpts: FC<MovieExcerptsProps> = ({ video }) => {
  return (
    <div className={Styles.wrapper}>
      <Image src={video} alt='Видео' width={205} height={115} />
    </div>
  );
};

export default MovieExcerpts;
