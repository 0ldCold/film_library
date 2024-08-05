import { FC } from "react";
import { IFilmFriends } from "src/widgets/film/FriendsFilm/types";
import Styles from "./Friend.module.scss";
import Avatar404 from "src/entities/film/Author/404Avatar.png";
import Image from "next/image";

export interface FriendProps {
  friend: IFilmFriends["friend"];
}

const Friend: FC<FriendProps> = ({ friend }) => {
  return (
    <div className={Styles.friend}>
      <Image
        src={friend.avatar ?? Avatar404.src}
        alt={"аватарка пользователя"}
        width={16}
        height={16}
      />
      <div className={Styles.name}>
        <a href="">{friend.name}</a>
      </div>
    </div>
  );
};

export default Friend;
