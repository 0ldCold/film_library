import { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SectionWrap from "src/entities/SectionWrap/SectionWrap";
import PageContent from "src/entities/PageContent/PageContent";
import ContentBlock from "src/entities/PageContent/ContentBlock/ContentBlock";
import BlockAboutContent from "src/entities/PageContent/ContentBlock/BlockAboutContent/BlockAboutContent";
import Styles from "./MainTemplate.module.scss";
import Subtitle from "../Subtitle/Subtitle";
import Breadcrumbs from "../Subtitle/Breadcrumbs/Breadcrumbs";
import PictureContent from "../../../entities/SubtitleContent/WrapperPicture/PictureContent/PictureContent";
import UserСomments from "src/features/UserСomments/UserСomments";
import WrapperBlockWidget from "src/entities/WrapperBlockWidget/WrapperBlockWidget";
import InfoModule from "src/widgets/film/InfoModule/InfoModule";
import { infoModuleMock } from "src/widgets/template/MainTemplate/mock";
import { rateModuleMock } from "src/widgets/template/MainTemplate/Background/Ratemock";
import RatingModule from "src/widgets/film/RatingModule/RatingModule";

interface MainTemplateProps {
  children?: ReactNode;
}
const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={Styles.imagesBackground}>
      <Header />
      <SectionWrap>
        <Subtitle titleOfTheWork='Наименование Фильма'>
          <div className={Styles.contentWidget}>
            <Breadcrumbs title='Аниме /' />
            <Breadcrumbs title='Сериалы /' />
            <Breadcrumbs title='2023 года' />
          </div>
        </Subtitle>
        <PageContent>
          <ContentBlock>
            <BlockAboutContent>
              <div className={Styles.wrapperPictureContent}>
                <PictureContent />
                <UserСomments />
              </div>
              <WrapperBlockWidget>
                <InfoModule data={infoModuleMock} />
                <RatingModule rate={rateModuleMock} />
              </WrapperBlockWidget>
            </BlockAboutContent>
          </ContentBlock>
        </PageContent>
      </SectionWrap>
      <Footer />
      <main>{children} </main>
    </div>
  );
};
export default MainTemplate;
