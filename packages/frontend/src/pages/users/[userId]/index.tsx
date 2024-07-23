import type { NextPage } from "next";
import { useRouter } from "next/router";

const Users: NextPage = () => {
  const router = useRouter();
  const userId = router.query.userId;
  return <>user name: {userId}</>;
};

export default Users;
