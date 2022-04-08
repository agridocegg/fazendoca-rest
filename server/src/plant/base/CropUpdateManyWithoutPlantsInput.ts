/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CropWhereUniqueInput } from "../../crop/base/CropWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class CropUpdateManyWithoutPlantsInput {
  @Field(() => [CropWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CropWhereUniqueInput],
  })
  connect?: Array<CropWhereUniqueInput>;

  @Field(() => [CropWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CropWhereUniqueInput],
  })
  disconnect?: Array<CropWhereUniqueInput>;

  @Field(() => [CropWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CropWhereUniqueInput],
  })
  set?: Array<CropWhereUniqueInput>;
}
export { CropUpdateManyWithoutPlantsInput };
