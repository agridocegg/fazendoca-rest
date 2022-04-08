import { PlantWhereInput } from "./PlantWhereInput";
import { PlantOrderByInput } from "./PlantOrderByInput";

export type PlantFindManyArgs = {
  where?: PlantWhereInput;
  orderBy?: Array<PlantOrderByInput>;
  skip?: number;
  take?: number;
};
