import { FC, ReactNode } from "react";
import Style from "./StudioLogo.module.scss";

interface StudioLogoProps {
  children?: ReactNode;
}

const StudioLogo: FC<StudioLogoProps> = ({ children }) => {
  return <div className={Style.logoWrap}>{children}</div>;
};

export default StudioLogo;
