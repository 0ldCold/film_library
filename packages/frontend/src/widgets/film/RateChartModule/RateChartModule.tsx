import { FC } from "react";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import { RateChartInfo } from "./types";
import RateChart from "src/entities/film/RateChart/RateChart";
import { calkWidth } from "./helper";

interface RateChartModuleProps {
  data: RateChartInfo[];
}

const RateChartModule: FC<RateChartModuleProps> = ({ data }) => {
  const maxCount = 9854;
  return (
    <ModuleCard title='Оценки Людей'>
      <div>
        {data.map((info) => (
          <div>
            {calkWidth(info.count, maxCount).toFixed(2)}
            <RateChart key={info.rate} count={info.count} rate={info.rate} />
          </div>
        ))}
      </div>
    </ModuleCard>
  );
};

export default RateChartModule;
