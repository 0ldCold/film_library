import { FC } from "react";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import { RateChartInfo } from "./types";
import RateChart from "src/entities/film/RateChart/RateChartRow";
import { calkWidth } from "./helper";
import Styles from "./RateChartModule.module.scss";

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
            style={{ width: calkWidth(info.count, maxCount), background: "#4682b4" }}
          >
            <RateChart count={info.count} rate={info.rate} />
          </div>
        ))}
      </div>
    </ModuleCard>
  );
};

export default RateChartModule;
