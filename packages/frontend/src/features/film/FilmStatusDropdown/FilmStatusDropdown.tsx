import React, { FC, useMemo, useState } from 'react';
import ArrowIcon from 'src/shared/icons/uikit/ArrowIcon';
import Styles from './FilmStatusDropdown.module.scss';
import { UserFilmsListType } from '../../../shared/api/film/types';
import { getCurrentState } from './helpers';
import clsx from 'clsx';
import { USER_LISTS } from './constants';

interface FilmStatusDropdownProps {
  view?: 'large' | 'small' | 'additionally';
  value: UserFilmsListType;
  onChange?: (newStatus: UserFilmsListType) => Promise<void>;
}
// TODO: Подключить пропсы value, onChange
const FilmStatusDropdown: FC<FilmStatusDropdownProps> = () => {
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
    [currentFilmStatus],
  );

  return (
    <div className={clsx(Styles[color], Styles.select)}>
      <div onClick={toggleDropdown} className={clsx(Styles.row, Styles.button)}>
        <div className={Styles.icons}>
          {icon}
          <span>{name}</span>
        </div>
        <div className={Styles.icons}>
          <div
            className={clsx(Styles.icons, {
              [Styles.turn]: isOpen,
            })}
          >
            <ArrowIcon size={24} color="#9da2a8" />
          </div>
        </div>
      </div>
      <div className={clsx(Styles.itemsList, isOpen && Styles.slideOutDown)}>
        {USER_LISTS.map(({ name, type }) =>
          currentFilmStatus === type ? null : (
            <div key={type ?? 'null'} className={clsx(Styles.row)} onClick={changeList(type)}>
              <div className={clsx(Styles.listItemText, type === null && Styles.removeFromList)}>
                {name}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default FilmStatusDropdown;
