import { FC } from "react";
import Styles from "./StudioModule.module.scss";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import Image from "next/image";
import Logo404 from "./logo404.jpg";

export interface StudioImgProps {
  logo?: string;
}

const StudioModule: FC<StudioImgProps> = ({ logo }) => {
  return (
    <ModuleCard title='Студия'>
      <div className={Styles.wrapper}>
        <Image src={logo ?? Logo404} width={195} height={57} alt='Студия' />
      </div>
    </ModuleCard>
  );
};

export default StudioModule;
