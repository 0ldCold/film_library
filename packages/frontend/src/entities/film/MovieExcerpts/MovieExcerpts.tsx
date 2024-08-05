import { FC, useState } from "react";
import Styles from "./MovieExcerpts.module.scss";
import VideoPlayer from "src/shared/uiKit/VideoPlayer/VideoPlayer";
import ModalWindow from "src/shared/uiKit/ModalWindow/ModalWindow";
import Image from "next/image";

export interface MovieExcerptsProps {
  video: string;
  preview: string;
  info: string;
}

const MovieExcerpts: FC<MovieExcerptsProps> = ({ video, preview, info }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const handleOpen = () => {
    setIsVideoOpen(true);
  };
  const handleClose = () => {
    setIsVideoOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen} className={Styles.previewWrapper}>
        <div className={Styles.placeholder}>
          <div className={Styles.playRadius}>
            <div className={Styles.triangle} />
          </div>
        </div>
        <div className={Styles.title}>{info}</div>
        <div className={Styles.infoPlayerBorder}>
          <div className={Styles.trianglePlayer} />
          <div className={Styles.infoPlayer}>PV</div>
        </div>
        <Image
          src={preview}
          alt="Видео"
          width={206}
          height={116}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      {isVideoOpen && (
        <ModalWindow onClose={handleClose}>
          <VideoPlayer src={video} image={preview} width={"auto"} />
        </ModalWindow>
      )}
    </div>
  );
};

export default MovieExcerpts;
