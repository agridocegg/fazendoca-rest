import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";

export type CropCreateInput = {
  isPlowed?: boolean | null;
  nextGrowth?: Date | null;
  plant?: PlantWhereUniqueInput | null;
  stage?: number | null;
  wateredAt?: Date | null;
};
