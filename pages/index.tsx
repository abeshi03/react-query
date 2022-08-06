import type { NextPage } from 'next'
import {ChangeEvent, useState} from "react";
import {useQueryUsers} from "../src/apis/hooks/useQueryUsers";
import {useRouter} from "next/router";

const Home: NextPage = () => {

  const [searchName, setSearchName] = useState<string | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const router = useRouter();

  const { isLoading, error, data } = useQueryUsers({
    searchByUserName: searchName,
    paginationPageNumber: pageNumber,
    itemsCountPerPaginationPage: 15
  })

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPageNumber(1);
    setSearchName(e.target.value);
  }

  const goToUserDetailsPage = async (userId: number) => {
    await router.push(`users/${userId}`)
  }

  if (isLoading) return <p>...loading</p>
  if (error) return <p>error</p>

  return (
    <div>
      <input onChange={(e) => search(e)} />
      {!!data && data.users.map((user) => (
        <p key={user.id} onClick={() => goToUserDetailsPage(user.id)}>{ user.name }</p>
      ))}

      <button onClick={() => setPageNumber((prevPage) => prevPage - 1)}>前のページ</button>
      <button onClick={() => setPageNumber((prevPage) => prevPage + 1)}>次のページ</button>
    </div>
  )
}

export default Home
