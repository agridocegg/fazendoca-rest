import { SortOrder } from "../../util/SortOrder";

export type FarmOrderByInput = {
  createdAt?: SortOrder;
  displayName?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  updatedAt?: SortOrder;
};
