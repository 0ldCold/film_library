import { FC } from "react";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";
import { useRouter } from "next/router";
import { isExist } from "src/shared/helpers/isExist";
import { useGetUser } from "src/shared/api/users/hooks/useGetUser";
import { checkUserId, transformQueryId } from "src/pagesFsd/user/helpers";

const User: FC = () => {
  const router = useRouter();
  const userId = router.query.userId;

  const { data } = useGetUser(transformQueryId(userId) ?? -1, checkUserId(userId));

  if (!isExist(userId) || typeof userId !== "string" || Number.isNaN(+userId)) {
    return "Error";
  }
  if (!data) {
    return <MainTemplate>Loading...</MainTemplate>;
  }
  return (
    <MainTemplate>
      user: {data.firstName} {data.lastName}
    </MainTemplate>
  );
};
export default User;
