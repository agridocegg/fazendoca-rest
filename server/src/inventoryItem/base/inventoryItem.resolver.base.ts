/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateInventoryItemArgs } from "./CreateInventoryItemArgs";
import { UpdateInventoryItemArgs } from "./UpdateInventoryItemArgs";
import { DeleteInventoryItemArgs } from "./DeleteInventoryItemArgs";
import { InventoryItemFindManyArgs } from "./InventoryItemFindManyArgs";
import { InventoryItemFindUniqueArgs } from "./InventoryItemFindUniqueArgs";
import { InventoryItem } from "./InventoryItem";
import { Farm } from "../../farm/base/Farm";
import { Item } from "../../item/base/Item";
import { InventoryItemService } from "../inventoryItem.service";

@graphql.Resolver(() => InventoryItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InventoryItemResolverBase {
  constructor(
    protected readonly service: InventoryItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "read",
    possession: "any",
  })
  async _inventoryItemsMeta(
    @graphql.Args() args: InventoryItemFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [InventoryItem])
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "read",
    possession: "any",
  })
  async inventoryItems(
    @graphql.Args() args: InventoryItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<InventoryItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "InventoryItem",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => InventoryItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "read",
    possession: "own",
  })
  async inventoryItem(
    @graphql.Args() args: InventoryItemFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<InventoryItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "InventoryItem",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => InventoryItem)
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "create",
    possession: "any",
  })
  async createInventoryItem(
    @graphql.Args() args: CreateInventoryItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<InventoryItem> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "InventoryItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"InventoryItem"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        farm: args.data.farm
          ? {
              connect: args.data.farm,
            }
          : undefined,

        item: args.data.item
          ? {
              connect: args.data.item,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => InventoryItem)
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "update",
    possession: "any",
  })
  async updateInventoryItem(
    @graphql.Args() args: UpdateInventoryItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<InventoryItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "InventoryItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"InventoryItem"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          farm: args.data.farm
            ? {
                connect: args.data.farm,
              }
            : undefined,

          item: args.data.item
            ? {
                connect: args.data.item,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => InventoryItem)
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "delete",
    possession: "any",
  })
  async deleteInventoryItem(
    @graphql.Args() args: DeleteInventoryItemArgs
  ): Promise<InventoryItem | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Farm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "read",
    possession: "any",
  })
  async farm(
    @graphql.Parent() parent: InventoryItem,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Farm | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Farm",
    });
    const result = await this.service.getFarm(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Item, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InventoryItem",
    action: "read",
    possession: "any",
  })
  async item(
    @graphql.Parent() parent: InventoryItem,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Item | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Item",
    });
    const result = await this.service.getItem(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
