import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InventoryItemWhereInput = {
  farm?: FarmWhereUniqueInput;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  quantity?: IntNullableFilter;
};
