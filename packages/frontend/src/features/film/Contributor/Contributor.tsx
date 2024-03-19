import { FC } from "react";
import Styles from "./Contributor.module.scss";
import Image from "next/image";
import Avatar404 from "src/entities/film/Author/404Avatar.png";
import parse from "html-react-parser";
import markdownit from "markdown-it";
import { FilmDescriptionData } from "../../../widgets/film/DescriptionModule/types";
import { useTranslation } from "react-i18next";

interface ContributorProps {
  data: FilmDescriptionData["contributor"];
}

const Contributor: FC<ContributorProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className={Styles.contributor}>
      <div className={Styles.type}>{`${t(`film.contributor.${data.type}`)}: `}</div>
      {data.type !== "externalSource" && (
        <Image
          className={Styles.img}
          src={data.avatar ?? Avatar404.src}
          alt={data.type}
          width={16}
          height={16}
        />
      )}
      <div className={Styles.name}>{parse(markdownit().render(`[${data.name}]()`))}</div>
    </div>
  );
};

export default Contributor;
