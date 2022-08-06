import { User } from "../../types/User";

import { FindUsersListRequest } from "../requests/FindUsersListRequest";
import { FindUsersListResponse } from "../responses/FindUsersListResponse";

export interface UserApiImpl {
  findList: (query: FindUsersListRequest) => Promise<FindUsersListResponse>

  findById: (userId: number) => Promise<User>

  create: (requestBody: Omit<User, "id">) => Promise<number>

  update: (requestBody: User) => Promise<void>

  delete: (userId: number) => Promise<void>
}
