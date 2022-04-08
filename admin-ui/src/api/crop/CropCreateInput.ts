import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";
import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";

export type CropCreateInput = {
  farm?: FarmWhereUniqueInput | null;
  isPlowed?: boolean | null;
  nextGrowth?: Date | null;
  plant?: PlantWhereUniqueInput | null;
  stage?: number | null;
  wateredAt?: Date | null;
};
