import { FC } from "react";
import Styles from "./StudioModule.module.scss";
import ModuleCard from "src/entities/film/ModuleCard/ModuleCard";
import Image from "next/image";
import PictureST from "./studio.png";
const StudioModule: FC = () => {
  return (
    <ModuleCard title='Студия'>
      <div className={Styles.wrapper}>
        <Image src={PictureST} width={195} height={57} alt='Студия' />
      </div>
    </ModuleCard>
  );
};

export default StudioModule;
