import { Crop as TCrop } from "../api/crop/Crop";

export const CROP_TITLE_FIELD = "id";

export const CropTitle = (record: TCrop): string => {
  return record.id || record.id;
};
