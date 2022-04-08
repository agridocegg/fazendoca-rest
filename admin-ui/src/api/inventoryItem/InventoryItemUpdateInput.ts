import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type InventoryItemUpdateInput = {
  farm?: FarmWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
  quantity?: number | null;
};
