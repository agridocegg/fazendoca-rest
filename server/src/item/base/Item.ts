/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  IsEnum,
  IsDate,
  IsString,
  ValidateNested,
} from "class-validator";
import { EnumItemCategory } from "./EnumItemCategory";
import { Type } from "class-transformer";
import { InventoryItem } from "../../inventoryItem/base/InventoryItem";
import { Plant } from "../../plant/base/Plant";
@ObjectType()
class Item {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  cashPrice!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumItemCategory,
  })
  @IsEnum(EnumItemCategory)
  @IsOptional()
  @Field(() => EnumItemCategory, {
    nullable: true,
  })
  category?: "seed" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  creditsPrice!: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  displayName!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [InventoryItem],
  })
  @ValidateNested()
  @Type(() => InventoryItem)
  @IsOptional()
  inventoryItem?: Array<InventoryItem>;

  @ApiProperty({
    required: false,
    type: () => Plant,
  })
  @ValidateNested()
  @Type(() => Plant)
  @IsOptional()
  plant?: Plant;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Item };
