import { FarmCreateNestedManyWithoutUsersInput } from "./FarmCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  farms?: FarmCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
