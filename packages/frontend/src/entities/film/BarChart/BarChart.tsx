import { FC, useMemo, CSSProperties } from "react";
import Styles from "./BarChart.module.scss";
import { calcWidth } from "./helper";
import { BarChartRowData } from "./types";
import BarChartRow from "../BarChartRow/BarChartRow";

interface BarChartProps {
  data: BarChartRowData[];
  labelWidth: CSSProperties["width"];
}
const BarChart: FC<BarChartProps> = ({ data, labelWidth }) => {
  const maxValue = useMemo<number>(() => {
    if (data.length <= 0) {
      return 0;
    }
    return data.sort((a, b) => b.value - a.value)[0].value;
  }, [data]);

  return (
    <div className={Styles.wrapper}>
      {data.map((item) => (
        <BarChartRow
          key={item.label}
          data={item}
          widthPercent={calcWidth(item.value, maxValue)}
          labelWidth={labelWidth}
        />
      ))}
    </div>
  );
};
export default BarChart;
