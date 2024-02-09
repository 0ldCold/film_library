import { FC } from "react";
import ActionList from "src/features/film/ActionList/ActionList";
import { ActionListModuleInfo } from "./types";
import FilmStatusDropdown from "src/features/film/DropdownList/FilmStatusDropdown";

interface ActionListModuleProps {
  data: ActionListModuleInfo;
}

const ActionListModule: FC<ActionListModuleProps> = ({ data }) => {
  return <FilmStatusDropdown value={data.status} />;
};

export default ActionListModule;
