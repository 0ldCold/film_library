import { FC } from "react";
import Image from "next/image";
import Picture from "./contentPic.webp";

const PictureContent: FC = () => {
  // return <img width={225} height={319} src={Picture.src} alt='asdasd' />
  return <Image src={Picture.src} alt='Обложка аниме' width={225} height={319} />;
};

export default PictureContent;
