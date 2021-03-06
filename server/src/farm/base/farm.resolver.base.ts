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
import { CreateFarmArgs } from "./CreateFarmArgs";
import { UpdateFarmArgs } from "./UpdateFarmArgs";
import { DeleteFarmArgs } from "./DeleteFarmArgs";
import { FarmFindManyArgs } from "./FarmFindManyArgs";
import { FarmFindUniqueArgs } from "./FarmFindUniqueArgs";
import { Farm } from "./Farm";
import { CropFindManyArgs } from "../../crop/base/CropFindManyArgs";
import { Crop } from "../../crop/base/Crop";
import { InventoryItemFindManyArgs } from "../../inventoryItem/base/InventoryItemFindManyArgs";
import { InventoryItem } from "../../inventoryItem/base/InventoryItem";
import { User } from "../../user/base/User";
import { FarmService } from "../farm.service";

@graphql.Resolver(() => Farm)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FarmResolverBase {
  constructor(
    protected readonly service: FarmService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "read",
    possession: "any",
  })
  async _farmsMeta(
    @graphql.Args() args: FarmFindManyArgs
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

  @graphql.Query(() => [Farm])
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "read",
    possession: "any",
  })
  async farms(
    @graphql.Args() args: FarmFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Farm[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Farm",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Farm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "read",
    possession: "own",
  })
  async farm(
    @graphql.Args() args: FarmFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Farm | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Farm",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Farm)
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "create",
    possession: "any",
  })
  async createFarm(
    @graphql.Args() args: CreateFarmArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Farm> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Farm",
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
        `providing the properties: ${properties} on ${"Farm"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        owner: args.data.owner
          ? {
              connect: args.data.owner,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Farm)
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "update",
    possession: "any",
  })
  async updateFarm(
    @graphql.Args() args: UpdateFarmArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Farm | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Farm",
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
        `providing the properties: ${properties} on ${"Farm"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          owner: args.data.owner
            ? {
                connect: args.data.owner,
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

  @graphql.Mutation(() => Farm)
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "delete",
    possession: "any",
  })
  async deleteFarm(@graphql.Args() args: DeleteFarmArgs): Promise<Farm | null> {
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

  @graphql.ResolveField(() => [Crop])
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "read",
    possession: "any",
  })
  async crops(
    @graphql.Parent() parent: Farm,
    @graphql.Args() args: CropFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Crop[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Crop",
    });
    const results = await this.service.findCrops(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [InventoryItem])
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "read",
    possession: "any",
  })
  async inventoryItems(
    @graphql.Parent() parent: Farm,
    @graphql.Args() args: InventoryItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<InventoryItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "InventoryItem",
    });
    const results = await this.service.findInventoryItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Farm",
    action: "read",
    possession: "any",
  })
  async owner(
    @graphql.Parent() parent: Farm,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getOwner(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
