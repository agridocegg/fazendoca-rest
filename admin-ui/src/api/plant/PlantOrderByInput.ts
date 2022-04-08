import { SortOrder } from "../../util/SortOrder";

export type PlantOrderByInput = {
  actor?: SortOrder;
  createdAt?: SortOrder;
  growthSpeed?: SortOrder;
  id?: SortOrder;
  itemsId?: SortOrder;
  stages?: SortOrder;
  updatedAt?: SortOrder;
};
