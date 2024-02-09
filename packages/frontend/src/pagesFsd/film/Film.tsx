import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";
import Styles from "./Film.module.scss";
import Breadcrumbs from "src/entities/film/Breadcrumbs/Breadcrumbs";
import PictureContent from "src/entities/film/PictureContent/PictureContent";
import UserСomments from "src/features/film/UserСomments/UserСomments";
import InfoModule from "src/widgets/film/InfoModule/InfoModule";
import {
  ActionListModuleMock,
  AuthorModuleMock,
  MainCharactersModuleMock,
  RelatedModuleMock,
  StudioLogoMock,
  infoModuleMock,
  rateModuleMock
} from "src/shared/api/film/mock";
import RatingModule from "src/widgets/film/RatingModule/RatingModule";
import StudioModule from "src/widgets/film/StudioModule/StudioModule";
import { filmBreadcrumbs } from "./constants";
import AuthorModule from "src/widgets/film/AuthorModule/AuthorModule";
import RelatedModule from "src/widgets/film/RelatedModule/RelatedModule";
import MainCharactersModule from "src/widgets/film/MainCharactersModule/MainCharactersModule";
import ActionListModule from "src/widgets/film/ActionListModule/ActionListModule";

const Film: FC = () => {
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

          <ActionListModule data={ActionListModuleMock} />
        </div>
        <div className={Styles.moduleColumns}>
          <InfoModule data={infoModuleMock} />
          <div className={Styles.studioWidget}>
            <RatingModule rate={rateModuleMock} />
            <StudioModule logo={StudioLogoMock.logo} />
          </div>
        </div>
      </div>

      <div className={Styles.modules}>
        <RelatedModule data={RelatedModuleMock} />
        <AuthorModule data={AuthorModuleMock} />
      </div>
      <div className={Styles.modules}>
        <MainCharactersModule data={MainCharactersModuleMock} />
      </div>
    </MainTemplate>
  );
};

export default Film;
