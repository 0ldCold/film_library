import { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Styles from "./MainTemplate.module.scss";
import Subtitle from "../Subtitle/Subtitle";
import PictureContent from "../../../entities/SubtitleContent/PictureContent";
import UserСomments from "src/features/UserСomments/UserСomments";
import ContentInformation from "src/entities/ContentInformation/ContentInformation";
import FillingInInformation from "src/features/FillingInInformation/FillingInInformation";

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
              <ContentInformation />
              <div>
                <FillingInInformation type='Тип:' />
              </div>
              <div>
                <FillingInInformation episodes='Эпизоды:' />
              </div>
              <div>
                <FillingInInformation nextEpisode='Следующий эпизод:' />
              </div>
              <div>
                <FillingInInformation episodeDuration='Длительность эпизода:' />
              </div>
              <div>
                <FillingInInformation status='Статус:' />
              </div>
              <div>
                <FillingInInformation genres='Жанры:' />
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
