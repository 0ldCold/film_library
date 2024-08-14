import { FC, ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SectionWrap from 'src/entities/template/SectionWrap/SectionWrap';
import { helveticaNeue, openSans } from '@styles/fonts';
import { clsx } from 'clsx';
import Styles from './MainTemplate.module.scss';
import { useAppSelector } from 'src/shared/store/hooks';

interface MainTemplateProps {
  children?: ReactNode;
}
const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <div
      className={clsx(
        theme === 'light' ? Styles.light : Styles.dark,
        openSans.variable,
        helveticaNeue.variable,
        Styles.font,
      )}
    >
      <Header />
      <main>
        <SectionWrap>{children}</SectionWrap>
      </main>
      <Footer />
    </div>
  );
};
export default MainTemplate;
