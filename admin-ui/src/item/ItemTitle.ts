import { Item as TItem } from "../api/item/Item";

export const ITEM_TITLE_FIELD = "displayName";

export const ItemTitle = (record: TItem): string => {
  return record.displayName || record.id;
};
