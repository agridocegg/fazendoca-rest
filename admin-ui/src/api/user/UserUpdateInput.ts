import { FarmUpdateManyWithoutUsersInput } from "./FarmUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  farms?: FarmUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
