import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  cashPrice?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  creditsPrice?: SortOrder;
  displayName?: SortOrder;
  id?: SortOrder;
  plantId?: SortOrder;
  updatedAt?: SortOrder;
};
