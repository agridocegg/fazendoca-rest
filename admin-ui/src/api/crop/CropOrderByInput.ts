import { SortOrder } from "../../util/SortOrder";

export type CropOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isPlowed?: SortOrder;
  nextGrowth?: SortOrder;
  plantId?: SortOrder;
  stage?: SortOrder;
  updatedAt?: SortOrder;
  wateredAt?: SortOrder;
};
