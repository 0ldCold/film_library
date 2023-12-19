import { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SectionWrap from "src/entities/SectionWrap/SectionWrap";
//import MainSection from "src/entities/MainSection/MainSection";
import PageContent from "src/entities/PageContent/PageContent";
import ContentBlock from "src/entities/PageContent/ContentBlock/ContentBlock";
import BlockAboutContent from "src/entities/PageContent/ContentBlock/BlockAboutContent/BlockAboutContent";
import Styles from "./MainTemplate.module.scss";
import Subtitle from "../Subtitle/Subtitle";
import Breadcrumbs from "../Subtitle/Breadcrumbs/Breadcrumbs";
import PictureContent from "../../../entities/SubtitleContent/WrapperPicture/PictureContent/PictureContent";
import UserСomments from "src/features/UserСomments/UserСomments";
import ContentInformation from "src/entities/ContentInformation/ContentInformation";
import FillingInInformation from "src/features/FillingInInformation/FillingInInformation";
import ValueFillingInInformation from "src/features/FillingInInformation/ValueFillingInInformation/ValueFillingInInformation";
import WrapperBlockWidget from "src/entities/WrapperBlockWidget/WrapperBlockWidget";
import BlockInfoLeft from "src/entities/WrapperBlockWidget/BlockInfoLeft/BlockInfoLeft";
import EntryInfo from "src/entities/WrapperBlockWidget/BlockInfoLeft/EntryInfo/EntryInfo";
import Line from "src/entities/WrapperBlockWidget/BlockInfoLeft/EntryInfo/Line/Line";
import LineContainer from "src/entities/WrapperBlockWidget/BlockInfoLeft/EntryInfo/Line/LineContainer/LineContainer";
import AdditionalInfo from "src/entities/WrapperBlockWidget/BlockInfoLeft/EntryInfo/Line/AdditionalInfo/AdditionalInfo";
import BlockInfoRight from "src/entities/WrapperBlockWidget/BlockInfoRight/BlockInfoRight";
import RatingAggregator from "src/entities/WrapperBlockWidget/BlockInfoRight/RatingAggregator/RatingAggregator";
import Scores from "src/entities/WrapperBlockWidget/BlockInfoRight/RatingAggregator/Scores/Scores";
import Rating from "src/entities/WrapperBlockWidget/BlockInfoRight/RatingAggregator/Scores/Rating/Rating";
import Container from "src/entities/WrapperBlockWidget/BlockInfoRight/RatingAggregator/Scores/Rating/Container/Container";
import TextСontainer from "src/entities/WrapperBlockWidget/BlockInfoRight/RatingAggregator/Scores/Rating/TextСontainer/TextСontainer";
import Praise from "src/entities/WrapperBlockWidget/BlockInfoRight/RatingAggregator/Scores/Rating/TextСontainer/Praise/Praise";
import BlockStudio from "src/entities/WrapperBlockWidget/BlockInfoRight/BlockStudio/BlockStudio";
import StudioLogo from "src/entities/WrapperBlockWidget/BlockInfoRight/BlockStudio/StudioLogo/StudioLogo";

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
                <BlockInfoLeft>
                  <ContentInformation label='Информация' />
                  <EntryInfo>
                    <Line>
                      <LineContainer>
                        <FillingInInformation label='Тип:' />
                        <ValueFillingInInformation value='TV Сериал' />
                      </LineContainer>
                    </Line>
                    <Line>
                      <LineContainer>
                        <FillingInInformation label='Эпизоды:' />
                        <ValueFillingInInformation value='21 / 23' />
                      </LineContainer>
                    </Line>
                    <Line>
                      <LineContainer>
                        <FillingInInformation label='Следующий эпизод:' />
                        <ValueFillingInInformation value='21 дек' />
                      </LineContainer>
                    </Line>
                    <Line>
                      <LineContainer>
                        <FillingInInformation label='Длительность эпизода:' />
                        <ValueFillingInInformation value='23 мин' />
                      </LineContainer>
                    </Line>
                    <Line>
                      <LineContainer>
                        <FillingInInformation label='Статус:' />
                        <ValueFillingInInformation value=' Выходит' />
                      </LineContainer>
                    </Line>
                    <Line>
                      <LineContainer>
                        <FillingInInformation label='Рейтинг:' />
                        <ValueFillingInInformation value='R-17' />
                      </LineContainer>
                    </Line>
                    <AdditionalInfo>
                      <LineContainer>
                        <FillingInInformation label='У аниме:' />
                        <ValueFillingInInformation value='Отзывы/Комментарии' />
                      </LineContainer>
                    </AdditionalInfo>
                  </EntryInfo>
                </BlockInfoLeft>
                <BlockInfoRight>
                  <RatingAggregator>
                    <ContentInformation label='Рейтинг' />
                    <Scores>
                      <Rating>
                        <Container>Звезды</Container>
                        <TextСontainer>
                          10 <Praise>отлично</Praise>
                        </TextСontainer>
                      </Rating>
                    </Scores>
                  </RatingAggregator>
                  <BlockStudio>
                    <ContentInformation label='Студия' />
                    <StudioLogo>Картинка с логотипом</StudioLogo>
                  </BlockStudio>
                </BlockInfoRight>
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
