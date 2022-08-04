import {UserApiImpl} from "../implements/UserApiImpl";
import {FindUsersListRequest} from "../requests/FindUsersListRequest";
import {FindUsersListResponse} from "../responses/FindUsersListResponse";
import axios from "axios";
import {ApiResponse} from "../responses/ApiResponse";

class UserApi implements UserApiImpl {
  public async findList(query: FindUsersListRequest): Promise<FindUsersListResponse> {
    const res: ApiResponse<FindUsersListResponse> = await axios.get("http://localhost:5000/users", {
      params: {
        paginationPageNumber: query.paginationPageNumber,
        itemsCountPerPaginationPage: query.itemsCountPerPaginationPage
      }
    });

    return res.data.data;
  }
}

export const userApi = new UserApi();
