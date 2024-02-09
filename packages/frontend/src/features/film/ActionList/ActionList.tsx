import { FC, ReactNode } from "react";
import Styles from "./ActionList.module.scss";
import PlusIcon from "src/shared/uikit/PlusIcon";
import FilmStatusDropdown from "../DropdownList/FilmStatusDropdown";

interface ActionListProps {
  mainLabel: string;
  children: ReactNode | string;
}

const ActionList: FC<ActionListProps> = ({ mainLabel, children }) => {
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <div className={Styles.plus}>
          <PlusIcon color='#176093' size={23} />
        </div>
        <div className={Styles.actionList}>{mainLabel}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ActionList;
