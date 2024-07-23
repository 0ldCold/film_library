import type { NextPage } from "next";
import { useGetUsersList } from "src/shared/api/users/useGetUsersList";
import Link from "next/link";

const Users: NextPage = () => {
  const { data } = useGetUsersList();
  if (!data) {
    return <>Loading...</>;
  }
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/users/${item.id}`}>{`${item.firstName} ${item.lastName}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
