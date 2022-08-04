import type { NextPage } from 'next'
import {userApi} from "../src/apis/gateways/UserApi";
import { useQuery } from "@tanstack/react-query";

const Home: NextPage = () => {

  const { isLoading, error, data } = useQuery(['users'], () => userApi.findList({paginationPageNumber: 1, itemsCountPerPaginationPage: 15}))

  if (isLoading) return <p>...loading</p>
  if (error) return <p>error</p>

  return (
    <div>
      {!!data && data.users.map((user: any) => (
        <p key={user.id}>{ user.name }</p>
      ))}
    </div>
  )
}

export default Home
