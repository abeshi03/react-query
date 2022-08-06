import {QueryClient, useMutation, useQuery} from "@tanstack/react-query";
import {User} from "../../types/User";
import {FindUsersListResponse} from "../responses/FindUsersListResponse";
import {userApi} from "../gateways/UserApi";
import {FindUsersListRequest} from "../requests/FindUsersListRequest";

export const useQueryUsers = (query: FindUsersListRequest) => {
  return useQuery<FindUsersListResponse, Error>({
    queryKey: ["users", query.searchByUserName, query.paginationPageNumber],
    queryFn: () => userApi.findList({
      paginationPageNumber: query.paginationPageNumber,
      itemsCountPerPaginationPage: 5,
      searchByUserName: query.searchByUserName
    })
  })
}

export const useQueryUser = (userId: number) => {
  return useQuery<User, Error>({
    queryKey: ["user", userId],
    queryFn: () => userApi.findById(userId)
  })
}

export const useMutateUser = () => {
  const queryClient = new QueryClient()

  const updateUser = useMutation((user: User) => userApi.update(user))

  return { updateUser }
}
