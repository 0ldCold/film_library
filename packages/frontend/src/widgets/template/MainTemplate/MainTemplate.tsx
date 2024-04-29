import { FC, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SectionWrap from "src/entities/template/SectionWrap/SectionWrap";
import { helveticaNeue, openSans } from "@styles/fonts";
import { clsx } from "clsx";
import Styles from "./MainTemplate.module.scss";

interface MainTemplateProps {
  children?: ReactNode;
}
const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={clsx(openSans.variable, helveticaNeue.variable, Styles.font)}>
      <Header />
      <main>
        <SectionWrap>{children}</SectionWrap>
      </main>
      <Footer />
    </div>
  );
};
export default MainTemplate;
