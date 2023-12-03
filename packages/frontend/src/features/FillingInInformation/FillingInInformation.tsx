import { FC } from "react";
import Styles from "./FillingInInformation.module.scss";

interface FillingInInformationProps {
  type?: string;
  episodes?: string;
  nextEpisode?: string;
  episodeDuration?: string;
  status?: string;
  genres?: string;
  rating?: string;
}

const FillingInInformation: FC<FillingInInformationProps> = ({
  type,
  episodes,
  nextEpisode,
  episodeDuration,
  status,
  genres,
  rating
}) => {
  return (
    <span className={Styles.informationBoxStyle}>
      {type}
      {episodes}
      {nextEpisode}
      {episodeDuration}
      {status}
      {rating}
      {genres}
    </span>
  );
};

export default FillingInInformation;
