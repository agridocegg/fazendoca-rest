import { InventoryItemCreateNestedManyWithoutItemsInput } from "./InventoryItemCreateNestedManyWithoutItemsInput";
import { PlantWhereUniqueInput } from "../plant/PlantWhereUniqueInput";

export type ItemCreateInput = {
  cashPrice?: number | null;
  category?: "seed" | null;
  creditsPrice?: number | null;
  displayName?: string | null;
  inventoryItem?: InventoryItemCreateNestedManyWithoutItemsInput;
  plant?: PlantWhereUniqueInput;
};
