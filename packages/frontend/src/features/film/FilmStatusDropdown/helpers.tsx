import { ReactNode } from "react";
import { DropdownColor, UserFilmsListType } from "../../../shared/api/film/types";
import PlusIcon from "src/shared/icons/uikit/PlusIcon";
import DoneIcon from "src/shared/icons/uikit/DoneIcon";
import CloseIcon from "src/shared/icons/uikit/CloseIcon";
import PlayIcon from "src/shared/icons/uikit/PlayIcon";
import PauseIcon from "src/shared/icons/uikit/PauseIcon";
import ReplayIcon from "src/shared/icons/uikit/ReplayIcon";

interface CurrentState {
  icon: ReactNode;
  name: string;
  color: DropdownColor;
}

export const getCurrentState = (FilmStatus: UserFilmsListType): CurrentState => {
  switch (FilmStatus) {
    case null:
      return {
        color: "blue",
        name: "Добавить в список",
        icon: <PlusIcon size={24} />
      };
    case "dropped":
      return {
        color: "red",
        name: "Брошено",
        icon: <CloseIcon size={24} />
      };
    case "watched":
      return {
        color: "green",
        name: "Просмотрено",
        icon: <DoneIcon size={24} />
      };
    case "paused":
      return {
        color: "gray",
        name: "Отложено",
        icon: <PauseIcon size={24} />
      };
    case "planned":
      return {
        color: "blue",
        name: "Запланировано",
        icon: <PlusIcon size={24} />
      };
    case "watching":
      return {
        color: "blue",
        name: "Смотрю",
        icon: <PlayIcon size={26} />
      };
    case "reviewed":
      return {
        color: "blue",
        name: "Пересматриваю",
        icon: <ReplayIcon size={24} />
      };
  }
};
