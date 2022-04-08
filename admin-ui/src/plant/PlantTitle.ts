import { Plant as TPlant } from "../api/plant/Plant";

export const PLANT_TITLE_FIELD = "actor";

export const PlantTitle = (record: TPlant): string => {
  return record.actor || record.id;
};
