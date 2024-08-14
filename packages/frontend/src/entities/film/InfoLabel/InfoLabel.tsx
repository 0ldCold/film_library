import { FC, ReactNode } from 'react';
import Styles from './InfoLabel.module.scss';
import { useAppSelector } from 'src/shared/store/hooks';
import { clsx } from 'clsx';

interface InfoLabelProps {
  label: string;
  children?: ReactNode | string;
}
const InfoLabel: FC<InfoLabelProps> = ({ label, children }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={Styles.wrapper}>
      <span className={clsx(theme === 'light' && Styles.lightLabel)}>{`${label}: `}</span>
      <div className={clsx(Styles.value, theme === 'light' && Styles.lightValue)}>{children}</div>
    </div>
  );
};
export default InfoLabel;
