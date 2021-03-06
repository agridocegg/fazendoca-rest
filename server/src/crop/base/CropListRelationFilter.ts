/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CropWhereInput } from "./CropWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CropListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CropWhereInput,
  })
  @ValidateNested()
  @Type(() => CropWhereInput)
  @IsOptional()
  @Field(() => CropWhereInput, {
    nullable: true,
  })
  every?: CropWhereInput;

  @ApiProperty({
    required: false,
    type: () => CropWhereInput,
  })
  @ValidateNested()
  @Type(() => CropWhereInput)
  @IsOptional()
  @Field(() => CropWhereInput, {
    nullable: true,
  })
  some?: CropWhereInput;

  @ApiProperty({
    required: false,
    type: () => CropWhereInput,
  })
  @ValidateNested()
  @Type(() => CropWhereInput)
  @IsOptional()
  @Field(() => CropWhereInput, {
    nullable: true,
  })
  none?: CropWhereInput;
}
export { CropListRelationFilter };
