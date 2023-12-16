import { FC, ReactNode } from "react";
import Style from "./AdditionalInfo.module.scss";

interface AdditionalInfoProps {
  children?: ReactNode;
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({ children }) => {
  return <div className={Style.WrapperAdditionalInfo}>{children}</div>;
};

export default AdditionalInfo;
