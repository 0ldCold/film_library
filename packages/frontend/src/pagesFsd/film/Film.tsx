import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";

const Film: FC = () => {
  const router = useRouter();
  const filmName = router.query.animation;

  useEffect(() => {
    console.log(filmName);
  }, [filmName]);

  return <MainTemplate></MainTemplate>;
};

export default Film;
