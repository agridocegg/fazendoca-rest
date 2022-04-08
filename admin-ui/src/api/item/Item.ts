import { InventoryItem } from "../inventoryItem/InventoryItem";
import { Plant } from "../plant/Plant";

export type Item = {
  cashPrice: number | null;
  category?: "seed" | null;
  createdAt: Date;
  creditsPrice: number | null;
  displayName: string | null;
  id: string;
  inventoryItem?: Array<InventoryItem>;
  plant?: Plant;
  updatedAt: Date;
};
