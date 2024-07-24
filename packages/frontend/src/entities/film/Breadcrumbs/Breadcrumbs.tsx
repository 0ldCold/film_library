import { FC } from 'react';
import Styles from './Breadcrumbs.module.scss';
import { Breadcrumb } from './types';

interface BreadcrumbsProps {
  data: Breadcrumb[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ data }) => {
  return <div className={Styles.breadcrumbs}>{data.map((item) => item.name).join(' / ')}</div>;
};
export default Breadcrumbs;
