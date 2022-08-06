import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "../../types/User";
import { userApi } from "../gateways/UserApi";
import { FindUsersListResponse } from "../responses/FindUsersListResponse";
import { FindUsersListRequest } from "../requests/FindUsersListRequest";

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
    queryKey: ["useUser", userId],
    queryFn: () => userApi.findById(userId)
  })
}

export const useMutateUser = () => {

  const createUser = useMutation((user: Omit<User, "id">) => userApi.create(user))
  const updateUser = useMutation((user: User) => userApi.update(user))
  const deleteUser = useMutation((userId: number) => userApi.delete(userId))

  return { createUser, updateUser, deleteUser }
}
