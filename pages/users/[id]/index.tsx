import {useQueryUser} from "../../../src/apis/hooks/useQueryUsers";
import {useRouter} from "next/router";
import {NextPage} from "next";
import Link from "next/link";

type Params = {
  id: number;
}

const UserDetailsPage: NextPage = () => {

  const router = useRouter();
  const userId = parseInt(router.query.id as string, 10);

  const { data: user, error, isLoading } = useQueryUser(userId)

  if (isLoading) return <p>...loading</p>
  if (error) return <p>error</p>

  return (
    <div style={{border: "1px solid black"}}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
      <Link href={`users/${user.id}/edit`}><a>編集</a></Link>
    </div>
  )
}

export default UserDetailsPage;
