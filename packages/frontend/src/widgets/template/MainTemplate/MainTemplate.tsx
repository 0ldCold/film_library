import { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Styles from "./MainTemplate.module.scss";
import Subtitle from "../Subtitle/Subtitle";
import PictureContent from "../../../entities/SubtitleContent/PictureContent";
import UserСomments from "src/features/UserСomments/UserСomments";
import ContentInformation from "src/features/ContentInformation/ContentInformation";

interface MainTemplateProps {
  children?: ReactNode;
}
const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={Styles.imagesBackground}>
      <Header>
        <Subtitle />
        <div className={Styles.contentWidget}>
          <PictureContent />
          <ContentInformation />
        </div>
        <div>
          <UserСomments />
        </div>
      </Header>
      <main>{children} </main>
      <Footer />
    </div>
  );
};
export default MainTemplate;
