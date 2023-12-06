import { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Styles from "./MainTemplate.module.scss";
import Subtitle from "../Subtitle/Subtitle";
import PictureContent from "../../../entities/SubtitleContent/PictureContent";
import UserСomments from "src/features/UserСomments/UserСomments";
import ContentInformation from "src/entities/ContentInformation/ContentInformation";
import FillingInInformation from "src/features/FillingInInformation/FillingInInformation";
import ValueFillingInInformation from "src/features/FillingInInformation/ValueFillingInInformation/ValueFillingInInformation";

interface MainTemplateProps {
  children?: ReactNode;
}
const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={Styles.imagesBackground}>
      <Header>
        <div>
          <Subtitle />
          <div className={Styles.contentWidget}>
            <PictureContent />
            <div>
              <ContentInformation label='ИНФОР' />
              <div>
                <FillingInInformation label='Тип:'>
                  <ValueFillingInInformation />
                </FillingInInformation>
              </div>
              <div>
                <FillingInInformation label='Эпизоды:'>
                  <ValueFillingInInformation />
                </FillingInInformation>
              </div>
              <div>
                <FillingInInformation label='Следующий эпизод:'>
                  <ValueFillingInInformation />
                </FillingInInformation>
              </div>
              <div>
                <FillingInInformation label='Длительность эпизода:'>
                  <ValueFillingInInformation />
                </FillingInInformation>
              </div>
              <div>
                <FillingInInformation label='Статус:'>
                  <ValueFillingInInformation />
                </FillingInInformation>
              </div>
              <div>
                <FillingInInformation label='Жанры:'>
                  <ValueFillingInInformation />
                </FillingInInformation>
              </div>
              <div>
                <FillingInInformation label='Рейтинг:'>
                  <ValueFillingInInformation />
                </FillingInInformation>
              </div>
            </div>
          </div>
          <div>
            <UserСomments />
          </div>
        </div>
      </Header>
      <main>{children} </main>
      <Footer />
    </div>
  );
};
export default MainTemplate;
