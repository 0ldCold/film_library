import type { NextPage } from "next";
import { useRouter } from "next/router";

const Users: NextPage = () => {
  const router = useRouter();
  return <>user name: {router.query.userName}</>;
};

export default Users;
