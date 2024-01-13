import { FC } from "react";
import Styles from "./UserСomments.module.scss";

const UserСomments: FC = () => {
  return (
    <div className={Styles.iconsPictures}>
      <span> Коммент </span> <span>Написать</span>
    </div>
  );
};

export default UserСomments;
