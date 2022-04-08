import { Farm } from "../farm/Farm";
import { Plant } from "../plant/Plant";

export type Crop = {
  createdAt: Date;
  farm?: Farm | null;
  id: string;
  isPlowed: boolean | null;
  nextGrowth: Date | null;
  plant?: Plant | null;
  stage: number | null;
  updatedAt: Date;
  wateredAt: Date | null;
};
