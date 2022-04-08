import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CropListRelationFilter } from "../crop/CropListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PlantWhereInput = {
  actor?: StringNullableFilter;
  crops?: CropListRelationFilter;
  growthSpeed?: FloatNullableFilter;
  id?: StringFilter;
  items?: ItemWhereUniqueInput;
  stages?: IntNullableFilter;
};
