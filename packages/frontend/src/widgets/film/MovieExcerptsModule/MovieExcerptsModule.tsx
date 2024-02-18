import { FC } from "react";
import Styles from "./MovieExcerptsModule.module.scss";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import MovieExcerpts from "src/entities/film/MovieExcerpts/MovieExcerpts";
import { MovieExcerptsModuleInfo } from "./types";
//TODO:Спросить как правильно добавлять видео, если сам не найду 
interface MovieExcerptsModuleProps {
  data: MovieExcerptsModuleInfo[];
}

const MovieExcerptsModule: FC<MovieExcerptsModuleProps> = ({ data }) => {
  return (
    <ModuleCard title='Видео'>
      <div className={Styles.wrapper}>
        {data.map((data) => (
          <MovieExcerpts video={data.video} />
        ))}
      </div>
    </ModuleCard>
  );
};

export default MovieExcerptsModule;
