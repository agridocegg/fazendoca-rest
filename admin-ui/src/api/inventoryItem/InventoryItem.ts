import { Farm } from "../farm/Farm";
import { Item } from "../item/Item";

export type InventoryItem = {
  createdAt: Date;
  farm?: Farm | null;
  id: string;
  item?: Item | null;
  quantity: number | null;
  updatedAt: Date;
};
