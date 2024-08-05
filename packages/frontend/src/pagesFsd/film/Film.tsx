import { FC } from "react";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";
import Styles from "./Film.module.scss";
import { useRouter } from "next/router";
import Breadcrumbs from "src/entities/film/Breadcrumbs/Breadcrumbs";
import PictureContent from "src/entities/film/PictureContent/PictureContent";
import UserСomments from "src/features/film/UserСomments/UserСomments";
import InfoModule from "src/widgets/film/InfoModule/InfoModule";
import {
  AuthorModuleMock,
  DescriptionMock,
  FilmStatusDropdownModuleMock,
  FriendsFilmMock,
  infoModuleMock,
  MainCharactersModuleMock,
  MovieExcerptsModuleMock,
  PeoplesListsModuleMock,
  RateChartModuleMock,
  rateModuleMock,
  RelatedModuleMock,
  SimilarModuleMock,
  StillsModuleMock,
  StudioLogoMock,
} from "src/shared/api/film/mock";
import RatingModule from "src/widgets/film/RatingModule/RatingModule";
import StudioModule from "src/widgets/film/StudioModule/StudioModule";
import { filmBreadcrumbs } from "./constants";
import AuthorModule from "src/widgets/film/AuthorModule/AuthorModule";
import RelatedModule from "src/widgets/film/RelatedModule/RelatedModule";
import MainCharactersModule from "src/widgets/film/MainCharactersModule/MainCharactersModule";
import FilmStatusDropdownModule from "src/widgets/film/FilmStatusDropdownModule/FilmStatusDropdownModule";
import StillsModule from "src/widgets/film/StillsModule/StillsModule";
import MovieExcerptsModule from "src/widgets/film/MovieExcerptsModule/MovieExcerptsModule";
import SimilarModule from "src/widgets/film/SimilarModule/SimilarModule";
import DescriptionModule from "src/widgets/film/DescriptionModule/DescriptionModule";
import FriendsFilm from "src/widgets/film/FriendsFilm/FriendsFilm";
import RateChartModule from "src/widgets/film/RateChartModule/RateChartModule";
import PeoplesListsModule from "src/widgets/film/PeoplesListsModule/PeoplesListsModule";
import { checkId, transformQueryId } from "src/shared/helpers/checkParamIsNumber";
import { useGetMovie } from "src/shared/api/films/hooks/useGetMovie";
import { isExist } from "src/shared/helpers/isExist";

const Film: FC = () => {
  const router = useRouter();
  const movieId = router.query.movieId;

  const { data } = useGetMovie(transformQueryId(movieId) ?? -1, checkId(movieId));

  if (!isExist(movieId) || typeof movieId !== "string" || Number.isNaN(+movieId)) {
    return "Error";
  }
  if (!data) {
    return <MainTemplate>Loading...</MainTemplate>;
  }

  return (
    <MainTemplate>
      <div>
        <h1 className={Styles.title}>{data.name}</h1>
        <Breadcrumbs data={filmBreadcrumbs} />
      </div>

      <div className={Styles.moduleColumns}>
        <div className={Styles.content}>
          <div className={Styles.filmCard}>
            <div>
              <PictureContent />
              <UserСomments />
              <div className={Styles.filmStatus}>
                <FilmStatusDropdownModule data={FilmStatusDropdownModuleMock} />
              </div>
            </div>
            <div>
              <div className={Styles.moduleColumns}>
                <InfoModule data={infoModuleMock} />
                <div className={Styles.studioWidget}>
                  <RatingModule rate={rateModuleMock} />
                  <StudioModule logo={StudioLogoMock.logo} />
                </div>
              </div>
              <DescriptionModule data={DescriptionMock} />
            </div>
          </div>

          <div className={Styles.modules}>
            <RelatedModule data={RelatedModuleMock} />
            <AuthorModule data={AuthorModuleMock} />
          </div>
          <div className={Styles.modules}>
            <MainCharactersModule data={MainCharactersModuleMock} />
          </div>
          <div className={Styles.modules}>
            <StillsModule data={StillsModuleMock} />
            <MovieExcerptsModule data={MovieExcerptsModuleMock} />
          </div>
          <div className={Styles.modules}>
            <SimilarModule data={SimilarModuleMock} />
          </div>
        </div>

        <div className={Styles.menu}>
          <RateChartModule data={RateChartModuleMock} />
          <div className={Styles.modules}>
            <PeoplesListsModule data={PeoplesListsModuleMock} />
          </div>

          <div className={Styles.modules}>
            <FriendsFilm data={FriendsFilmMock} />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Film;
