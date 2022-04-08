import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InventoryItemResolverBase } from "./base/inventoryItem.resolver.base";
import { InventoryItem } from "./base/InventoryItem";
import { InventoryItemService } from "./inventoryItem.service";

@graphql.Resolver(() => InventoryItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InventoryItemResolver extends InventoryItemResolverBase {
  constructor(
    protected readonly service: InventoryItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
