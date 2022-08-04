import { AxiosResponse } from "axios";

export type ApiResponse<TData> = AxiosResponse<{
  code: number;
  data: TData;
  responseAt: string;
}>;
