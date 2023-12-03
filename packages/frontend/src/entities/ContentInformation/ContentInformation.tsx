import { FC } from "react";
import Styles from "./ContentInformation.module.scss";


const ContentInformation: FC = () => {
  return (
    <div className={Styles.templateStyleBackground}>
      <div className={Styles.templateStyleBack}></div>
      <h3 className={Styles.templateStyle}>Информация</h3>
    </div>
  );
};

export default ContentInformation;
