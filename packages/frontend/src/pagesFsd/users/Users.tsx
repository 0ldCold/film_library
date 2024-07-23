import { FC } from "react";
import MainTemplate from "src/widgets/template/MainTemplate/MainTemplate";
import { useGetUsersList } from "src/shared/api/users/useGetUsersList";
import Link from "next/link";

const Users: FC = () => {
  const { data } = useGetUsersList();

  if (!data) {
    return <MainTemplate>Loading...</MainTemplate>;
  }
  return (
    <MainTemplate>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/users/${item.id}`}>{`${item.firstName} ${item.lastName}`}</Link>
          </li>
        ))}
      </ul>
    </MainTemplate>
  );
};
export default Users;
