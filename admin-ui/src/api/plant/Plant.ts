import { Crop } from "../crop/Crop";
import { Item } from "../item/Item";

export type Plant = {
  actor: string | null;
  createdAt: Date;
  crops?: Array<Crop>;
  growthSpeed: number | null;
  id: string;
  items?: Item | null;
  stages: number | null;
  updatedAt: Date;
};
