import {FC} from "react";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";
import Styles from "./Film.module.scss";
import Breadcrumbs from "src/entities/film/Breadcrumbs/Breadcrumbs";
import PictureContent from "src/entities/film/PictureContent/PictureContent";
import UserСomments from "src/features/film/UserСomments/UserСomments";
import InfoModule from "src/widgets/film/InfoModule/InfoModule";
import {
    AuthorModuleMock,
    FilmStatusDropdownModuleMock,
    infoModuleMock,
    MainCharactersModuleMock,
    MovieExcerptsModuleMock,
    rateModuleMock,
    RelatedModuleMock,
    SimilarModuleMock,
    StillsModuleMock,
    StudioLogoMock
} from "src/shared/api/film/mock";
import RatingModule from "src/widgets/film/RatingModule/RatingModule";
import StudioModule from "src/widgets/film/StudioModule/StudioModule";
import {filmBreadcrumbs} from "./constants";
import AuthorModule from "src/widgets/film/AuthorModule/AuthorModule";
import RelatedModule from "src/widgets/film/RelatedModule/RelatedModule";
import MainCharactersModule from "src/widgets/film/MainCharactersModule/MainCharactersModule";
import FilmStatusDropdownModule from "src/widgets/film/FilmStatusDropdownModule/FilmStatusDropdownModule";
import StillsModule from "src/widgets/film/StillsModule/StillsModule";
import MovieExcerptsModule from "src/widgets/film/MovieExcerptsModule/MovieExcerptsModule";
import SimilarModule from "src/widgets/film/SimilarModule/SimilarModule";
import DescriptionModule from "src/widgets/film/DescriptionModule/DescriptionModule";

const Film: FC = () => {
    return (
        <MainTemplate>
            <DescriptionModule text={"# Html stored as a string"}/>
            <div>
                <h1 className={Styles.title}>Магическая битва 2 </h1>
                <Breadcrumbs data={filmBreadcrumbs}/>
            </div>
            <div className={Styles.filmCard}>
                <div>
                    <PictureContent/>
                    <UserСomments/>
                    <div className={Styles.filmStatus}>
                        <FilmStatusDropdownModule data={FilmStatusDropdownModuleMock}/>
                    </div>
                </div>
                <div className={Styles.moduleColumns}>
                    <InfoModule data={infoModuleMock}/>
                    <div className={Styles.studioWidget}>
                        <RatingModule rate={rateModuleMock}/>
                        <StudioModule logo={StudioLogoMock.logo}/>
                    </div>
                </div>
            </div>

            <div className={Styles.modules}>
                <RelatedModule data={RelatedModuleMock}/>
                <AuthorModule data={AuthorModuleMock}/>
            </div>
            <div className={Styles.modules}>
                <MainCharactersModule data={MainCharactersModuleMock}/>
            </div>
            <div className={Styles.modules}>
                <StillsModule data={StillsModuleMock}/>
                <MovieExcerptsModule data={MovieExcerptsModuleMock}/>
            </div>
            <div className={Styles.modules}>
                <SimilarModule data={SimilarModuleMock}/>
            </div>
        </MainTemplate>
    );
};

export default Film;
