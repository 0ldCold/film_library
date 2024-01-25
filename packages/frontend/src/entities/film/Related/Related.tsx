import { FC } from "react";
import Styles from "./Related.module.scss";
import Image from "next/image";
import poster404 from "./404poster.png";

interface RelatedProps {
  name: string;
  info?: string[];
  story?: string;
  publisher?: string;
  studio?: string;
  poster?: string;
}

const Related: FC<RelatedProps> = ({ name, info, poster, story, publisher, studio }) => {
  return (
    <div className={Styles.wrapper}>
      <Image src={poster ?? poster404.src} alt='Постер' width={48} height={75} />
      <div className={Styles.container}>
        <div className={Styles.name}>{name}</div>

        <div className={Styles.row}>
          <div className={Styles.infoContainer}>
            {info?.map((item) => <div className={Styles.info}>{item}</div>)}
            <div className={Styles.publisher}>{publisher ?? studio}</div>
            <div className={Styles.story}>{story}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
