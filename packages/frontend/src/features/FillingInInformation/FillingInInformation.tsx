import { FC, ReactNode } from "react";
import Styles from "./FillingInInformation.module.scss";

interface FillingInInformationProps {
  label?: string;
  children?: ReactNode;
}

const FillingInInformation: FC<FillingInInformationProps> = ({ label, children }) => {
  return (
    <span className={Styles.informationBoxStyle}>
      {label}
      {children}
    </span>
  );
};

export default FillingInInformation;
