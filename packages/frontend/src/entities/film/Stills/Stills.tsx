import { FC } from "react";
import Image from "next/image";
import poster404 from "./404poster.png";

export interface StillsProps {
  frame: string;
}

const Stills: FC<StillsProps> = ({ frame }) => {
  return (
    <div>
      <Image src={frame ?? poster404.src} alt='Постер' width={205} height={115} />
    </div>
  );
};

export default Stills;
