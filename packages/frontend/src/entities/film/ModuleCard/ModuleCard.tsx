import { FC, ReactNode } from 'react';
import Styles from './ModuleCard.module.scss';
import { useAppSelector } from 'src/shared/store/hooks';
import { clsx } from 'clsx';

interface ModuleCardProps {
  title: string;
  children?: ReactNode;
}

const ModuleCard: FC<ModuleCardProps> = ({ title, children }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={Styles.wrapper}>
      <div
        className={clsx(Styles.header, theme === 'light' ? Styles.lightHeader : Styles.darkHeader)}
      >
        <div
          className={clsx(
            Styles.grayLabel,
            theme === 'light' ? Styles.lightGrayLabel : Styles.darkGrayLabel,
          )}
        />
        <h4>{title}</h4>
      </div>
      {children}
    </div>
  );
};
export default ModuleCard;
