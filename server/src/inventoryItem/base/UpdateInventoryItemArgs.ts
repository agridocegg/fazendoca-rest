/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { InventoryItemWhereUniqueInput } from "./InventoryItemWhereUniqueInput";
import { InventoryItemUpdateInput } from "./InventoryItemUpdateInput";

@ArgsType()
class UpdateInventoryItemArgs {
  @Field(() => InventoryItemWhereUniqueInput, { nullable: false })
  where!: InventoryItemWhereUniqueInput;
  @Field(() => InventoryItemUpdateInput, { nullable: false })
  data!: InventoryItemUpdateInput;
}

export { UpdateInventoryItemArgs };