import { ReactNode } from "react";
import { DropdownColor, UserFilmsListType } from "./types";

interface CurrentState {
  icon: ReactNode;
  name: string;
  color: DropdownColor;
}

//TODO: Вставить значки

export const getCurrentState = (FilmStatus: UserFilmsListType): CurrentState => {
  switch (FilmStatus) {
    case null:
      return {
        color: "blue",
        name: "Добавить в список",
        icon: <span>{`+ `}</span>
      };
    case "dropped":
      return {
        color: "red",
        name: "Брошено",
        icon: <span>{`X `}</span>
      };
    case "watched":
      return {
        color: "green",
        name: "Просмотрено",
        icon: <span>{`X `}</span>
      };
    case "paused":
      return {
        color: "gray",
        name: "Отложено",
        icon: <span>{`X `}</span>
      };
    case "planned":
      return {
        color: "blue",
        name: "Запланировано",
        icon: <span>{`+ `}</span>
      };
    case "watching":
      return {
        color: "blue",
        name: "Смотрю",
        icon: <span>{`X `}</span>
      };
    case "reviewed":
      return {
        color: "blue",
        name: "Пересматриваю",
        icon: <span>{`X `}</span>
      };
  }
};
