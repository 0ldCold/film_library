import { FC, ReactNode } from 'react';
import Styles from './ModuleCard.module.scss';
import { useAppSelector } from 'src/shared/store/hooks';
import { clsx } from 'clsx';
import Typography from 'src/shared/uiKit/Typography/Typography';

interface ModuleCardProps {
  title: string;
  children?: ReactNode;
}

const ModuleCard: FC<ModuleCardProps> = ({ title, children }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={Styles.wrapper}>
      <Typography
        className={clsx(Styles.header, theme === 'dark' && Styles.darkHeader)}
        isWithoutDarkTheme={theme === 'light'}
      >
        <div className={clsx(Styles.grayLabel, theme === 'dark' && Styles.darkLabel)} />
        <h4>{title}</h4>
      </Typography>
      {children}
    </div>
  );
};
export default ModuleCard;
