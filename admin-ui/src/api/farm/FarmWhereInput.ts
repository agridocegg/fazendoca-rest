import { StringFilter } from "../../util/StringFilter";
import { InventoryItemListRelationFilter } from "../inventoryItem/InventoryItemListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FarmWhereInput = {
  id?: StringFilter;
  inventoryItems?: InventoryItemListRelationFilter;
  owner?: UserWhereUniqueInput;
};
