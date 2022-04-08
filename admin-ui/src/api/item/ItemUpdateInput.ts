import { InventoryItemUpdateManyWithoutItemsInput } from "./InventoryItemUpdateManyWithoutItemsInput";
import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";

export type ItemUpdateInput = {
  cashPrice?: number | null;
  category?: "seed" | null;
  creditsPrice?: number | null;
  displayName?: string | null;
  inventoryItem?: InventoryItemUpdateManyWithoutItemsInput;
  plant?: PlantWhereUniqueInput;
};
