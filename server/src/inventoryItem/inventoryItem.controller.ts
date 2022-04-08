import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InventoryItemService } from "./inventoryItem.service";
import { InventoryItemControllerBase } from "./base/inventoryItem.controller.base";

@swagger.ApiTags("inventoryItems")
@common.Controller("inventoryItems")
export class InventoryItemController extends InventoryItemControllerBase {
  constructor(
    protected readonly service: InventoryItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
