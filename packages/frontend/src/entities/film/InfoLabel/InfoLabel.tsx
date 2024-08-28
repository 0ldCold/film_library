import { FC, ReactNode } from 'react';
import Styles from './InfoLabel.module.scss';
import { useAppSelector } from 'src/shared/store/hooks';
import Typography from 'src/shared/uiKit/Typography/Typography';

interface InfoLabelProps {
  label: string;
  children?: ReactNode | string;
}
const InfoLabel: FC<InfoLabelProps> = ({ label, children }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div className={Styles.wrapper}>
      <Typography className={Styles.label} isWithoutDarkTheme={theme === 'light'}>
        <span>{`${label}: `}</span>
      </Typography>
      <Typography className={Styles.value} isWithoutDarkTheme={theme === 'light'}>
        {children}
      </Typography>
    </div>
  );
};
export default InfoLabel;
