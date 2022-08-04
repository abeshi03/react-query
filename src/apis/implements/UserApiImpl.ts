import {FindUsersListRequest} from "../requests/FindUsersListRequest";
import {FindUsersListResponse} from "../responses/FindUsersListResponse";

export interface UserApiImpl {
  findList: (query: FindUsersListRequest) => Promise<FindUsersListResponse>
}

