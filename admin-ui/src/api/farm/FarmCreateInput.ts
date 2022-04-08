import { InventoryItemCreateNestedManyWithoutFarmsInput } from "./InventoryItemCreateNestedManyWithoutFarmsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FarmCreateInput = {
  inventoryItems?: InventoryItemCreateNestedManyWithoutFarmsInput;
  owner?: UserWhereUniqueInput | null;
};
