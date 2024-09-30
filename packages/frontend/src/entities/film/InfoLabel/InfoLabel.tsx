import { FC, ReactNode } from 'react';
import Styles from './InfoLabel.module.scss';
import Typography from 'src/shared/uiKit/Typography/Typography';

interface InfoLabelProps {
  label: string;
  children?: ReactNode | string;
}

const InfoLabel: FC<InfoLabelProps> = ({ label, children }) => {
  return (
    <div className={Styles.wrapper}>
      <Typography className={Styles.label}>
        <span>{`${label}: `}</span>
      </Typography>
      <Typography className={Styles.value}>{children}</Typography>
    </div>
  );
};
export default InfoLabel;
