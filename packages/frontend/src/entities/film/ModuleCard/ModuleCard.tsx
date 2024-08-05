import { FC, ReactNode } from 'react';
import Styles from './ModuleCard.module.scss';

interface ModuleCardProps {
  title: string;
  children?: ReactNode;
}
const ModuleCard: FC<ModuleCardProps> = ({ title, children }) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.header}>
        <div className={Styles.grayLabel} />
        <h4>{title}</h4>
      </div>
      {children}
    </div>
  );
};
export default ModuleCard;
