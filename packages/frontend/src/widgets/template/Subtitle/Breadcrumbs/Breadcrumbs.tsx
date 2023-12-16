import { FC } from "react";
import Styles from "./breadcrumbs.module.scss";

interface BreadcrumbsProps {
  title?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title }) => {
  return <span className={Styles.breadcrumbs}>{title}</span>;
};
export default Breadcrumbs;
