import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";

export type CropUpdateInput = {
  isPlowed?: boolean | null;
  nextGrowth?: Date | null;
  plant?: PlantWhereUniqueInput | null;
  stage?: number | null;
  wateredAt?: Date | null;
};
