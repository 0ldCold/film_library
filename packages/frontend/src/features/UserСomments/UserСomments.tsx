import { FC } from "react";
import Styles from "./UserСomments.module.scss";

const UserСomments: FC = () => {
  return (
    <div className={Styles.iconsPictures}>
      <span> Комментировать </span> <span>Написать отзыв</span>
    </div>
  );
};

export default UserСomments;
