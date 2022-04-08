import { Farm as TFarm } from "../api/farm/Farm";

export const FARM_TITLE_FIELD = "displayName";

export const FarmTitle = (record: TFarm): string => {
  return record.displayName || record.id;
};
