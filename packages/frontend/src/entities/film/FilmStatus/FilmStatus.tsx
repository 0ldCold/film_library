import { FilmStatus } from "src/entities/film/FilmStatusLabel/types";
import { FC, useMemo } from "react";
import FilmStatusLabel from "src/entities/film/FilmStatusLabel/FilmStatusLabel";
import { transformDate } from "src/entities/film/FilmStatus/helpers";

export interface FilmStatusProps {
  status: FilmStatus;
  createFrom: Date;
  createTo?: Date;
}
const FilmStatus: FC<FilmStatusProps> = ({ status, createFrom, createTo }) => {
  const datesSting = useMemo<string>(() => {
    if (status === "announcement") {
      return `на ${transformDate(createFrom)}`;
    }
    return `c ${transformDate(createFrom)} по ${createTo ? transformDate(createTo) : "???"}`;
  }, [status, createFrom, createTo]);

  return (
    <>
      <FilmStatusLabel status={status} /> {datesSting}
    </>
  );
};
export default FilmStatus;
