import { FC } from "react";
import Styles from "./RateChart.module.scss";

export interface RateChartRowProps {
  rate: number;
  count: number;
}

const RateChart: FC<RateChartRowProps> = ({ count, rate }) => {
  return (
    <div className={Styles.wrapper}>
      <div>{count}</div>
      <div>{rate}</div>
    </div>
  );
};

export default RateChart;
