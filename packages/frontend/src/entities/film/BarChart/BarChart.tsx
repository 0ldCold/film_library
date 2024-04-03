import { FC, useMemo } from "react";
import Styles from "./BarChart.module.scss";
import { calcWidth } from "./helper";
import { BarChartRowData } from "./types";
import BarChartRow from "../BarChartRow/BarChartRow";

interface BarChartProps {
  data: BarChartRowData[];
}
const BarChart: FC<BarChartProps> = ({ data }) => {
  const maxValue = useMemo<number>(() => {
    if (data.length <= 0) {
      return 0;
    }
    return data.sort((a, b) => b.value - a.value)[0].value;
  }, [data]);

  return (
    <div className={Styles.wrapper}>
      {data.map((item) => (
        <BarChartRow key={item.label} data={item} widthPercent={calcWidth(item.value, maxValue)} />
      ))}
    </div>
  );
};
export default BarChart;
