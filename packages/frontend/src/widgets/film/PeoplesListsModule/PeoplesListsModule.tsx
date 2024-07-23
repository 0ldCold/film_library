import { FC, useMemo } from 'react';
import BarChart from 'src/entities/film/BarChart/BarChart';
import { BarChartRowData } from 'src/entities/film/BarChartRow/types';
import ModuleCard from 'src/entities/film/ModuleCard/ModuleCard';
import { PeoplesListsInfo } from 'src/shared/api/film/types';

interface PeoplesListsModuleProps {
  data: PeoplesListsInfo[];
}

const PeoplesListsModule: FC<PeoplesListsModuleProps> = ({ data }) => {
  const transformedData = useMemo<BarChartRowData[]>(
    () => data.map((item) => ({ value: item.count, label: String(item.status) })),
    [data],
  );
  return (
    <ModuleCard title="В списках у людей">
      <BarChart data={transformedData} />
    </ModuleCard>
  );
};

export default PeoplesListsModule;
