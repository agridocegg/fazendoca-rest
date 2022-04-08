import { CropCreateNestedManyWithoutFarmsInput } from "./CropCreateNestedManyWithoutFarmsInput";
import { InventoryItemCreateNestedManyWithoutFarmsInput } from "./InventoryItemCreateNestedManyWithoutFarmsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FarmCreateInput = {
  crops?: CropCreateNestedManyWithoutFarmsInput;
  displayName?: string | null;
  inventoryItems?: InventoryItemCreateNestedManyWithoutFarmsInput;
  owner?: UserWhereUniqueInput | null;
};
