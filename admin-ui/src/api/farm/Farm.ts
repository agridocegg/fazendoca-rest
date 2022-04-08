import { Crop } from "../crop/Crop";
import { InventoryItem } from "../inventoryItem/InventoryItem";
import { User } from "../user/User";

export type Farm = {
  createdAt: Date;
  crops?: Array<Crop>;
  displayName: string | null;
  id: string;
  inventoryItems?: Array<InventoryItem>;
  owner?: User | null;
  updatedAt: Date;
};
