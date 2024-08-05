import { FC, VideoHTMLAttributes } from 'react';
import Styles from './VideoPlayer.module.scss';

type VideoProps = VideoHTMLAttributes<HTMLVideoElement>;
interface VideoPlayer {
  height?: VideoProps['height'];
  width?: VideoProps['width'];
  src: string;
  image?: string;
}

const VideoPlayer: FC<VideoPlayer> = ({ width = 840, height = 620, src, image }) => {
  return (
    <video
      width={width}
      height={height}
      controls
      preload="none"
      poster={image}
      className={Styles.video}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
export default VideoPlayer;
