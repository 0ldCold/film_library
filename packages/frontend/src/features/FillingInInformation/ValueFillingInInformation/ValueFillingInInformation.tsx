import { FC } from "react";
import Styles from "./ValueFillingInInformation.module.scss";

interface ValueFillingInInformationProps {
  value?: string;
}

const ValueFillingInInformation: FC<ValueFillingInInformationProps> = ({ value }) => {
  return <div className={Styles.textValue}>{value} </div>;
};

export default ValueFillingInInformation;
