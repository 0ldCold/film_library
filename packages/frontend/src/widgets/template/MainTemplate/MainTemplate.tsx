import { FC, ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SectionWrap from 'src/entities/template/SectionWrap/SectionWrap';
import { helveticaNeue, openSans } from '@styles/fonts';
import { clsx } from 'clsx';
import Styles from './MainTemplate.module.scss';
import { useAppSelector } from 'src/shared/store/hooks';
import Typography from 'src/shared/uiKit/Typography/Typography';

interface MainTemplateProps {
  children?: ReactNode;
}
const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  return (
    <Typography
      className={clsx(
        openSans.variable,
        helveticaNeue.variable,
        Styles.font,
        theme === 'dark' && Styles.dark,
      )}
      isWithoutDarkTheme={theme === 'light'}
    >
      <Header />
      <main>
        <SectionWrap>{children}</SectionWrap>
      </main>
      <Footer />
    </Typography>
  );
};
export default MainTemplate;
