import { FC } from "react";
import { FilmStatusDropdownModuleInfo } from "./types";
import FilmStatusDropdown from "src/features/film/FilmStatusDropdown/FilmStatusDropdown";

interface FilmStatusDropdownModuleProps {
  data: FilmStatusDropdownModuleInfo;
}

const FilmStatusDropdownModule: FC<FilmStatusDropdownModuleProps> = ({ data }) => {
  return <FilmStatusDropdown value={data.status} view='large' />;
};

export default FilmStatusDropdownModule;
