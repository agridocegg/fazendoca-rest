import { InventoryItemWhereInput } from "./InventoryItemWhereInput";
import { InventoryItemOrderByInput } from "./InventoryItemOrderByInput";

export type InventoryItemFindManyArgs = {
  where?: InventoryItemWhereInput;
  orderBy?: Array<InventoryItemOrderByInput>;
  skip?: number;
  take?: number;
};
