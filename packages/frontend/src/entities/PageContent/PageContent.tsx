import { FC, ReactNode } from "react";
// import Styles from "./PageContent.module.scss";

interface PageContentProps {
  children?: ReactNode;
}

const PageContent: FC<PageContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default PageContent;
