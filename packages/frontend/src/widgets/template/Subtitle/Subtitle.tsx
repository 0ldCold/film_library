import { FC } from "react";
import Styles from "./Subtitle.module.scss";

const SubTitle: FC = () => {
  return (
    <div>
      <h2 className={Styles.contentName}>Наименование фильма</h2>
      <span className={Styles.breadcrumbs}>
        Аниме<span>/</span>
        <span>
          Сериалы <span>/</span>
          <span>Фильмы</span>
        </span>
      </span>
    </div>
  );
};
export default SubTitle;
