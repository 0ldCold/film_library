import { FC } from "react";
import Styles from "./BarChartRow.module.scss";
import { BarChartRowData } from "./types";
import { getColorByWidth } from "./helper";

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
          background: getColorByWidth(widthPercent)
        }}
        className={Styles.bar}
      >
        {widthPercent > 11 && <span>{data.value}</span>}
      </div>

      <div className={Styles.label}>
        <span>{data.label}</span>
      </div>
    </>
  );
};

export default BarChartRow;
