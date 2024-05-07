import { FC, useMemo } from "react";
import Styles from "./PeoplesLists.module.scss";
import { BarChartRowData } from "../BarChartRow/types";
import BarChartRow from "../BarChartRow/BarChartRow";
import { calcWidth } from "../BarChart/helper";

interface PeoplesListsProps {
  data: BarChartRowData[];
}

const PeoplesLists: FC<PeoplesListsProps> = ({ data }) => {
  const maxValue = useMemo<number>(() => {
    if (data.length <= 0) {
      return 0;
    }
    return Math.max(...data.map((item) => item.value));
  }, [data]);
  return (
    <div className={Styles.wrapper}>
      {data.map((item) => (
        <BarChartRow key={item.label} data={item} widthPercent={calcWidth(item.value, maxValue)} />
      ))}
    </div>
  );
};

export default PeoplesLists;
