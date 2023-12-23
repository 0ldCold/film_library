import { FC, ReactNode } from "react";
//import Style from "./MainSection.module.scss";

interface MainSectionProps {
  children?: ReactNode;
}

const MainSection: FC<MainSectionProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MainSection;
