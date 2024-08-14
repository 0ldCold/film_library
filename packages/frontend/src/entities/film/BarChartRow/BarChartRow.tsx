import { FC } from 'react';
import Styles from './BarChartRow.module.scss';
import { BarChartRowData } from './types';
import { getColorByWidth } from './helper';
import { clsx } from 'clsx';
import { useAppSelector } from 'src/shared/store/hooks';

export interface BarChartRowProps {
  data: BarChartRowData;
  widthPercent: number;
}
const BarChartRow: FC<BarChartRowProps> = ({ data, widthPercent }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <>
      <div
        style={{
          width: `${widthPercent}%`,
          background: getColorByWidth(widthPercent),
        }}
        className={Styles.bar}
      >
        {widthPercent > 11 && <span>{data.value}</span>}
      </div>

      <div className={clsx(Styles.label, theme === 'light' && Styles.lightLabel)}>
        <span>{data.label}</span>
      </div>
    </>
  );
};

export default BarChartRow;
