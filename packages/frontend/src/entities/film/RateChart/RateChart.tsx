import { FC } from "react";
import Styles from "./RateChart.module.scss";

export interface RateChartProps {
  rate: number;
  count: number;
}

const RateChart: FC<RateChartProps> = ({ count, rate }) => {
  return (
    <div className={Styles.wrapper}>
      <div>{count}</div>
      <div>{rate}</div>
    </div>
  );
};

export default RateChart;
