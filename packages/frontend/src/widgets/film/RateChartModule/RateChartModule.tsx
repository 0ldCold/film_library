import { FC } from "react";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import { RateChartInfo } from "./types";
import RateChart from "src/entities/film/RateChart/RateChartRow";
import { calkWidth, getColorByWidth } from "./helper";

interface RateChartModuleProps {
  data: RateChartInfo[];
}

const RateChartModule: FC<RateChartModuleProps> = ({ data }) => {
  const maxCount = 9854;

  return (
    <ModuleCard title='Оценки Людей'>
      <div>
        {data.map((info) => (
          <div
            key={info.rate}
            style={{
              width: calkWidth(info.count, maxCount),
              background: getColorByWidth(parseFloat(calkWidth(info.count, maxCount)))
            }}
          >
            <RateChart count={info.count} rate={info.rate} />
          </div>
        ))}
      </div>
    </ModuleCard>
  );
};

export default RateChartModule;
