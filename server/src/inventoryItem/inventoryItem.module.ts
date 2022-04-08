import { Module } from "@nestjs/common";
import { InventoryItemModuleBase } from "./base/inventoryItem.module.base";
import { InventoryItemService } from "./inventoryItem.service";
import { InventoryItemController } from "./inventoryItem.controller";
import { InventoryItemResolver } from "./inventoryItem.resolver";

@Module({
  imports: [InventoryItemModuleBase],
  controllers: [InventoryItemController],
  providers: [InventoryItemService, InventoryItemResolver],
  exports: [InventoryItemService],
})
export class InventoryItemModule {}
