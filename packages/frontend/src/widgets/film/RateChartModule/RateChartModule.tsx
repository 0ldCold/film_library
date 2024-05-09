import { FC, useMemo } from "react";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import { BarChartRowData } from "src/entities/film/BarChartRow/types";
import BarChart from "src/entities/film/BarChart/BarChart";
import { RateChartInfo } from "src/shared/api/film/types";

interface RateChartModuleProps {
  data: RateChartInfo[];
}

const RateChartModule: FC<RateChartModuleProps> = ({ data }) => {
  const transformedData = useMemo<BarChartRowData[]>(
    () => data.map((item) => ({ value: item.count, label: String(item.rate) })),
    [data]
  );
  return (
    <ModuleCard title='Оценки Людей'>
      <BarChart data={transformedData} isFilterLowItems />
    </ModuleCard>
  );
};

export default RateChartModule;
