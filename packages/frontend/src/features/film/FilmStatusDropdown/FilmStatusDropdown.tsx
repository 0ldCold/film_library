import React, { FC, ReactNode, useMemo, useState } from "react";
import ArrowIcon from "src/shared/uikit/ArrowIcon";
import Styles from "./FilmStatusDropdown.module.scss";
import { UserFilmsListType } from "./types";
import { getCurrentState } from "./helpers";
import clsx from "clsx";
import { USER_LISTS } from "./constants";

interface DropdownListProps {
  view?: "large" | "small";
  value: UserFilmsListType;
  onChange?: (newStatus: UserFilmsListType) => Promise<void>;
}
const FilmStatusDropdown: FC<DropdownListProps> = ({ view = "large" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const [currentFilmStatus, setCurrentFilmStatus] = useState<UserFilmsListType>(null);
  const changeList = (newList: UserFilmsListType) => () => {
    setCurrentFilmStatus(newList);
    setIsOpen(false);
  };

  const { icon, color, name } = useMemo(
    () => getCurrentState(currentFilmStatus),
    [currentFilmStatus]
  );

  return (
    <div className={Styles[color]}>
      <div onClick={toggleDropdown} className={clsx(Styles.row, Styles.button)}>
        <div className={Styles.icons}>
          {icon}
          <span>{name}</span>
        </div>
        <div className={Styles.icons}>
          {!isOpen ? (
            <ArrowIcon size={24} color='#9da2a8' />
          ) : (
            <div className={clsx(Styles.icons, Styles.turn)}>
              <ArrowIcon size={24} color='#9da2a8' />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={Styles.itemsList}>
          {USER_LISTS.map(({ name, type }) =>
            currentFilmStatus === type ? null : (
              <div key={type ?? "null"} className={clsx(Styles.row)} onClick={changeList(type)}>
                <div className={clsx(Styles.listItemText, type === null && Styles.removeFromList)}>
                  {name}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default FilmStatusDropdown;
