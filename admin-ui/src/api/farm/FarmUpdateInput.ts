import { InventoryItemUpdateManyWithoutFarmsInput } from "./InventoryItemUpdateManyWithoutFarmsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FarmUpdateInput = {
  inventoryItems?: InventoryItemUpdateManyWithoutFarmsInput;
  owner?: UserWhereUniqueInput | null;
};
