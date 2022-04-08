import { InventoryItem as TInventoryItem } from "../api/inventoryItem/InventoryItem";

export const INVENTORYITEM_TITLE_FIELD = "id";

export const InventoryItemTitle = (record: TInventoryItem): string => {
  return record.id || record.id;
};
