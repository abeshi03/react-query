import {UserApiImpl} from "../implements/UserApiImpl";
import {FindUsersListRequest} from "../requests/FindUsersListRequest";
import {FindUsersListResponse} from "../responses/FindUsersListResponse";
import axios from "axios";
import {ApiResponse} from "../responses/ApiResponse";
import {User} from "../../types/User";

class UserApi implements UserApiImpl {
  public async findList(query: FindUsersListRequest): Promise<FindUsersListResponse> {
    const res: ApiResponse<FindUsersListResponse> = await axios.get("http://localhost:5000/users", {
      params: {
        paginationPageNumber: query.paginationPageNumber,
        itemsCountPerPaginationPage: query.itemsCountPerPaginationPage,
        ...query.searchByUserName ? { searchByUserName: query.searchByUserName } : undefined
      }
    });

    return res.data.data;
  }

  public async findById(userId: number): Promise<User> {
    const res: ApiResponse<User> = await axios.get(`http://localhost:5000/users/${userId}`);
    return res.data.data;
  }

  public async create(requestBody: Omit<User, "id">): Promise<number> {
    const url = `http://localhost:5000/users/`
    const res = await axios.post(url, {
      email: requestBody.email,
      name: requestBody.name,
      role: requestBody.role,
      description: requestBody.description,
      avatarUri: requestBody.avatarUri ? requestBody.avatarUri : undefined
    });

    return (res.data).data.id;
  }

  public async update(requestBody: User): Promise<void> {
    const url = `http://localhost:5000/users/${requestBody.id}`
    await axios.patch(url, {
      id: requestBody.id,
      email: requestBody.email,
      name: requestBody.name,
      role: requestBody.role,
      description: requestBody.description,
      avatarUri: requestBody.avatarUri ? requestBody.avatarUri : undefined
    });
  }
}

export const userApi = new UserApi();
