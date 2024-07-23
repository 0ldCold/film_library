import { FC, useMemo } from "react";
import Styles from "./BarChart.module.scss";
import { calcWidth, removeItems } from "./helper";
import { BarChartRowData } from "../BarChartRow/types";
import BarChartRow from "../BarChartRow/BarChartRow";

interface BarChartProps {
  data: BarChartRowData[];
  isFilterLowItems?: boolean;
}
const BarChart: FC<BarChartProps> = ({ data, isFilterLowItems }) => {
  const maxValue = useMemo<number>(() => {
    if (data.length <= 0) {
      return 0;
    }
    return Math.max(...data.map((item) => item.value));
  }, [data]);
  const filteredData = useMemo<BarChartRowData[]>(
    () => (isFilterLowItems ? removeItems(data, 10, maxValue) : data),
    [data, isFilterLowItems, maxValue]
  );

  return (
    <div className={Styles.wrapper}>
      {filteredData.map((item) => (
        <BarChartRow key={item.label} data={item} widthPercent={calcWidth(item.value, maxValue)} />
      ))}
    </div>
  );
};
export default BarChart;
