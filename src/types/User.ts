type UserRole = "ADMIN" | "NORMAL_USER";

export type User = {
  id: number;
  email: string;
  name: string;
  role: UserRole;
  description: string;
  avatarUri?: string;
}
