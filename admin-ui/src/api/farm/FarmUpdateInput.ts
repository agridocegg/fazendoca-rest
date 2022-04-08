import { CropUpdateManyWithoutFarmsInput } from "./CropUpdateManyWithoutFarmsInput";
import { InventoryItemUpdateManyWithoutFarmsInput } from "./InventoryItemUpdateManyWithoutFarmsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FarmUpdateInput = {
  crops?: CropUpdateManyWithoutFarmsInput;
  displayName?: string | null;
  inventoryItems?: InventoryItemUpdateManyWithoutFarmsInput;
  owner?: UserWhereUniqueInput | null;
};
