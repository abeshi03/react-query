import {useQueryUser} from "../../../../src/apis/hooks/useQueryUsers";
import {useRouter} from "next/router";

const UserEditPage = () => {

  const router = useRouter();
  const userId = parseInt(router.query.id as string, 10);
  const { data: user, error, isLoading } = useQueryUser(userId)

  return (
    <div>

    </div>
  )
}

export default UserEditPage;
