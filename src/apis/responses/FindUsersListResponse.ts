import {User} from "../../types/User";

export type FindUsersListResponse = {
  itemsCountInSelection: number;
  totalItemsCount: number;
  users: User[];
}
