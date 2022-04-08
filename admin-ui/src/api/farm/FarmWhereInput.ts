import { CropListRelationFilter } from "../crop/CropListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryItemListRelationFilter } from "../inventoryItem/InventoryItemListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FarmWhereInput = {
  crops?: CropListRelationFilter;
  displayName?: StringNullableFilter;
  id?: StringFilter;
  inventoryItems?: InventoryItemListRelationFilter;
  owner?: UserWhereUniqueInput;
};
