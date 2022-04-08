import { SortOrder } from "../../util/SortOrder";

export type InventoryItemOrderByInput = {
  createdAt?: SortOrder;
  farmId?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
