import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";
import Subtitle from "src/entities/film/Subtitle/Subtitle";
import Styles from "./Film.module.scss";
import Breadcrumbs from "src/entities/film/Breadcrumbs/Breadcrumbs";
import PictureContent from "src/entities/film/PictureContent/PictureContent";
import UserСomments from "src/features/UserСomments/UserСomments";
import InfoModule from "src/widgets/film/InfoModule/InfoModule";
import { infoModuleMock, rateModuleMock } from "src/pagesFsd/film/mock";
import RatingModule from "src/widgets/film/RatingModule/RatingModule";
import StudioModule from "src/widgets/film/StudioModule/StudioModule";

const Film: FC = () => {
  const router = useRouter();
  const filmName = router.query.animation;

  useEffect(() => {
    console.log(filmName);
  }, [filmName]);

  return (
    <MainTemplate>
      <Subtitle titleOfTheWork='Наименование Фильма'>
        <div className={Styles.contentWidget}>
          <Breadcrumbs title='Аниме /' />
          <Breadcrumbs title='Сериалы /' />
          <Breadcrumbs title='2023 года' />
        </div>
      </Subtitle>
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
