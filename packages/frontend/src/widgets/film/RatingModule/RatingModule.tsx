import { FC } from "react";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import FilmStatusRating from "src/entities/film/FilmStatusRating/FilmStatusRating";

const RatingModule: FC = () => {
  return (
    <ModuleCard title='Рейтинг'>
      <FilmStatusRating date='8'></FilmStatusRating>
    </ModuleCard>
  );
};

export default RatingModule;
