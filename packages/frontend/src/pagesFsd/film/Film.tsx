import { useRouter } from "next/router";
import { FC } from "react";

const Film: FC = () => {
  const router = useRouter();
  return <>films name: {router.query.animation}</>;
};

export default Film;
