import { Farm } from "../farm/Farm";

export type User = {
  createdAt: Date;
  farms?: Array<Farm>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
