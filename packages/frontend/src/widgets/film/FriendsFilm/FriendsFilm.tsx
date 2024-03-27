import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import Styles from "./FriendsFilm.module.scss";
import { FC } from "react";
import { IFilmFriends } from "src/widgets/film/FriendsFilm/types";
import Friend from "src/features/film/Friend/Friend";
import { viewingStatus } from "src/widgets/film/FriendsFilm/helpers";

interface FilmFriendsProps {
  data: IFilmFriends[];
}

const FriendsFilm: FC<FilmFriendsProps> = ({ data }) => {
  return (
    <ModuleCard title={"У друзей"}>
      <div className={Styles.friends}>
        {data.map((friendsFilm) => (
          <div key={friendsFilm.friend.name} className={Styles.friend}>
            <Friend friend={friendsFilm.friend} />
            <div className={Styles.status}>
              {viewingStatus(friendsFilm.episodeCount, Number(friendsFilm.episodesTotal))}
            </div>
          </div>
        ))}
      </div>
    </ModuleCard>
  );
};

export default FriendsFilm;
