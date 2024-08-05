import { FC } from "react";
import Styles from "./MovieExcerptsModule.module.scss";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import MovieExcerpts from "src/entities/film/MovieExcerpts/MovieExcerpts";
import { MovieExcerptsModuleInfo } from "./types";

interface MovieExcerptsModuleProps {
  data: MovieExcerptsModuleInfo[];
}

const MovieExcerptsModule: FC<MovieExcerptsModuleProps> = ({ data }) => {
  return (
    <ModuleCard title="Видео">
      <div className={Styles.wrapper}>
        {data.map((data) => (
          <MovieExcerpts
            key={data.video}
            video={data.video}
            preview={data.image}
            info={data.info}
          />
        ))}
      </div>
    </ModuleCard>
  );
};

export default MovieExcerptsModule;
