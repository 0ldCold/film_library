import { FC, ReactNode } from 'react';
import Styles from './InfoLabel.module.scss';

interface InfoLabelProps {
  label: string;
  children?: ReactNode | string;
}
const InfoLabel: FC<InfoLabelProps> = ({ label, children }) => {
  return (
    <div className={Styles.wrapper}>
      <span className={Styles.label}>{`${label}: `}</span>
      <div className={Styles.value}>{children}</div>
    </div>
  );
};
export default InfoLabel;
