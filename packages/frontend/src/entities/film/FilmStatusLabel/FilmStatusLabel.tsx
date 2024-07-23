import { FilmStatus } from 'src/entities/film/FilmStatusLabel/types';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Styles from './FilmStatusLabel.module.scss';
import { clsx } from 'clsx';

interface FilmStatusLabelProps {
  status: FilmStatus;
}
const FilmStatusLabel: FC<FilmStatusLabelProps> = ({ status }) => {
  const { t } = useTranslation();

  return (
    <span className={clsx(Styles.status, Styles[status])}>{t(`film.statusesList.${status}`)}</span>
  );
};
export default FilmStatusLabel;
