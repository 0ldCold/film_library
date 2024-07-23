import { FC } from "react";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";
import { useRouter } from "next/router";
import { isExist } from "src/shared/helpers/isExist";

const User: FC = () => {
  const router = useRouter();
  const userId = router.query.userId;

  if (!isExist(userId) || typeof userId !== "string" || Number.isNaN(+userId)) {
    return "Error";
  }
  return <MainTemplate>user name: {userId}</MainTemplate>;
};
export default User;
