import { FC } from "react";
import Styles from "./DescriptionModule.module.scss";
import Image from "next/image";
import Avatar404 from "src/entities/film/Author/404Avatar.png";
import parse from "html-react-parser";
import markdownit from "markdown-it";

interface ContributorProps {
  type: string;
  name: string;
  avatar?: string;
}

const Contributor: FC<ContributorProps> = ({ type, name, avatar }) => {
  return (
    <div className={Styles.contributor}>
      <div className={Styles.type}>{`${type}: `}</div>
      <Image
        className={Styles.img}
        src={type == "Автор" ? avatar ?? Avatar404.src : ""}
        alt={type}
        width={16}
        height={16}
      />
      <div className={Styles.name}>{parse(markdownit().render(`[${name}]()`))}</div>
    </div>
  );
};

export default Contributor;
