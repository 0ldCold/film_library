import { FC } from "react";
import Styles from "./ContentInformation.module.scss";

interface ContentInformationProps {
  label?: string;
}

const ContentInformation: FC<ContentInformationProps> = ({ label }) => {
  return (
    <div className={Styles.templateStyleBackground}>
      <div className={Styles.templateStyleBack}></div>
      <h3 className={Styles.templateStyle}>{label}</h3>
    </div>
  );
};

export default ContentInformation;
