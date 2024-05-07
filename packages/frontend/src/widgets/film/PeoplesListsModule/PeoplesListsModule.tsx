import { FC, useMemo } from "react";
import { BarChartRowData } from "src/entities/film/BarChartRow/types";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import PeoplesLists from "src/entities/film/PeoplesLists/PeoplesLists";
import { PeoplesListsInfo } from "src/shared/api/film/types";
interface PeoplesListsModuleProps {
  data: PeoplesListsInfo[];
}

const PeoplesListsModule: FC<PeoplesListsModuleProps> = ({ data }) => {
  const transformedData = useMemo<BarChartRowData[]>(
    () => data.map((item) => ({ value: item.count, label: String(item.status) })),
    [data]
  );
  return (
    <ModuleCard title='В списках у людей'>
      <PeoplesLists data={transformedData} />
    </ModuleCard>
  );
};

export default PeoplesListsModule;
