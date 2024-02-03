import { FC } from "react";
import Styles from "./UserСomments.module.scss";

// перенести в папку film. т.е. /src/features/film/UserComments

const UserСomments: FC = () => {
  return (
    <div className={Styles.iconsPictures}>
      <span> Коммент </span> <span>Написать</span>
    </div>
  );
};

export default UserСomments;
