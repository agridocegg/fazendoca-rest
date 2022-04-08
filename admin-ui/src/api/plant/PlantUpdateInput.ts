import { CropUpdateManyWithoutPlantsInput } from "./CropUpdateManyWithoutPlantsInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type PlantUpdateInput = {
  actor?: string | null;
  crops?: CropUpdateManyWithoutPlantsInput;
  growthSpeed?: number | null;
  items?: ItemWhereUniqueInput | null;
  stages?: number | null;
};
