import { CropCreateNestedManyWithoutPlantsInput } from "./CropCreateNestedManyWithoutPlantsInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type PlantCreateInput = {
  actor?: string | null;
  crops?: CropCreateNestedManyWithoutPlantsInput;
  growthSpeed?: number | null;
  items?: ItemWhereUniqueInput | null;
  stages?: number | null;
};
