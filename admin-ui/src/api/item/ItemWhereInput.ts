import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryItemListRelationFilter } from "../inventoryItem/InventoryItemListRelationFilter";
import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";

export type ItemWhereInput = {
  cashPrice?: FloatNullableFilter;
  category?: "seed";
  creditsPrice?: FloatNullableFilter;
  displayName?: StringNullableFilter;
  id?: StringFilter;
  inventoryItem?: InventoryItemListRelationFilter;
  plant?: PlantWhereUniqueInput;
};
