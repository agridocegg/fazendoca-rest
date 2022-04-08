import { FarmWhereUniqueInput } from "../farm/FarmWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CropWhereInput = {
  farm?: FarmWhereUniqueInput;
  id?: StringFilter;
  isPlowed?: BooleanNullableFilter;
  nextGrowth?: DateTimeNullableFilter;
  plant?: PlantWhereUniqueInput;
  stage?: IntNullableFilter;
  wateredAt?: DateTimeNullableFilter;
};
