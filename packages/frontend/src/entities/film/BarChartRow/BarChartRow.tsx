import { FC } from 'react';
import Styles from './BarChartRow.module.scss';
import { BarChartRowData } from './types';
import { getColorByWidth } from './helper';
import Typography from 'src/shared/uiKit/Typography/Typography';

export interface BarChartRowProps {
  data: BarChartRowData;
  widthPercent: number;
}

const BarChartRow: FC<BarChartRowProps> = ({ data, widthPercent }) => {
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

      <Typography className={Styles.label}>
        <span>{data.label}</span>
      </Typography>
    </>
  );
};

export default BarChartRow;
