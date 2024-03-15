import { FC } from "react";
import Styles from "./Contributor.module.scss";
import Image from "next/image";
import Avatar404 from "src/entities/film/Author/404Avatar.png";
import parse from "html-react-parser";
import markdownit from "markdown-it";
import { FilmDescriptionData } from "../DescriptionModule/types";

interface ContributorProps {
  data: FilmDescriptionData["contributor"];
}

const Contributor: FC<ContributorProps> = ({ data }) => {
  const avatarRendering = (type: boolean) => {
    if (type) {
      return null;
    }
    return (
      <Image
        className={Styles.img}
        src={data.avatar ?? Avatar404.src}
        alt={data.type}
        width={16}
        height={16}
      />
    );
  };

  return (
    <div className={Styles.contributor}>
      <div className={Styles.type}>{`${data.type}: `}</div>
      <div>{avatarRendering(data.type != "Автор")}</div>
      <div className={Styles.name}>{parse(markdownit().render(`[${data.name}]()`))}</div>
    </div>
  );
};

export default Contributor;
