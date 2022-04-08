import { InventoryItem } from "../inventoryItem/InventoryItem";
import { User } from "../user/User";

export type Farm = {
  createdAt: Date;
  id: string;
  inventoryItems?: Array<InventoryItem>;
  owner?: User | null;
  updatedAt: Date;
};
