import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";
import Styles from "./Film.module.scss";
import Breadcrumbs from "src/entities/film/Breadcrumbs/Breadcrumbs";
import PictureContent from "src/entities/film/PictureContent/PictureContent";
import UserСomments from "src/features/UserСomments/UserСomments";
import InfoModule from "src/widgets/film/InfoModule/InfoModule";
import { infoModuleMock, rateModuleMock } from "src/pagesFsd/film/mock";
import RatingModule from "src/widgets/film/RatingModule/RatingModule";
import StudioModule from "src/widgets/film/StudioModule/StudioModule";
import { filmBreadcrumbs } from "./constants";

const Film: FC = () => {
  const router = useRouter();
  const filmName = router.query.animation;

  useEffect(() => {
    console.log(filmName);
  }, [filmName]);

  return (
    <MainTemplate>
      <div>
        <h1 className={Styles.title}>Наименование Фильма</h1>
        <Breadcrumbs data={filmBreadcrumbs} />
      </div>
      <div className={Styles.filmCard}>
        <div>
          <PictureContent />
          <UserСomments />
        </div>
        <div className={Styles.moduleColumns}>
          <InfoModule data={infoModuleMock} />
          <div className={Styles.studioWidget}>
            <RatingModule rate={rateModuleMock} />
            <StudioModule />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Film;
