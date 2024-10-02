import { useAppDispatch, useAppSelector } from 'src/shared/store/hooks';
import Styles from './index.module.scss';
import { clsx } from 'clsx';
import { themeSwitch } from 'src/shared/store/Theme/slice';
import Light from 'src/shared/icons/uikit/Light';
import Dark from 'src/shared/icons/uikit/Dark';
import { FC } from 'react';

const Theme: FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(themeSwitch());
  };

  return (
    <button
      className={clsx(Styles.btn, theme === 'dark' ? Styles.dark : Styles.light)}
      onClick={handleChange}
    >
      {theme === 'light' ? <Light size={30} /> : <Dark size={30} />}
    </button>
  );
};

export default Theme;
