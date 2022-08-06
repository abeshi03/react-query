import {FindUsersListRequest} from "../requests/FindUsersListRequest";
import {FindUsersListResponse} from "../responses/FindUsersListResponse";
import {User} from "../../types/User";

export interface UserApiImpl {
  findList: (query: FindUsersListRequest) => Promise<FindUsersListResponse>

  findById: (userId: number) => Promise<User>

  create: (requestBody: Omit<User, "id">) => Promise<number>

  update: (requestBody: User) => Promise<void>
}
