import { CSSProperties, FC } from "react";
import Styles from "./BarChartRow.module.scss";
import { BarChartRowData } from "../BarChart/types";
import { getColorByWidth } from "./helper";

export interface BarChartRowProps {
  data: BarChartRowData;
  widthPercent: number;
  labelWidth: CSSProperties["width"];
}
const BarChartRow: FC<BarChartRowProps> = ({ data, widthPercent, labelWidth }) => {
  return (
    <div
      style={{
        width: `${widthPercent}%`,
        background: getColorByWidth(widthPercent)
      }}
    >
      <div className={Styles.wrapper}>
        <div>{data.value}</div>
        <div>{data.label}</div>
      </div>
    </div>
  );
};

export default BarChartRow;
