/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Farm, InventoryItem, User } from "@prisma/client";

export class FarmServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FarmFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmFindManyArgs>
  ): Promise<number> {
    return this.prisma.farm.count(args);
  }

  async findMany<T extends Prisma.FarmFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmFindManyArgs>
  ): Promise<Farm[]> {
    return this.prisma.farm.findMany(args);
  }
  async findOne<T extends Prisma.FarmFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmFindUniqueArgs>
  ): Promise<Farm | null> {
    return this.prisma.farm.findUnique(args);
  }
  async create<T extends Prisma.FarmCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmCreateArgs>
  ): Promise<Farm> {
    return this.prisma.farm.create<T>(args);
  }
  async update<T extends Prisma.FarmUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmUpdateArgs>
  ): Promise<Farm> {
    return this.prisma.farm.update<T>(args);
  }
  async delete<T extends Prisma.FarmDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FarmDeleteArgs>
  ): Promise<Farm> {
    return this.prisma.farm.delete(args);
  }

  async findInventoryItems(
    parentId: string,
    args: Prisma.InventoryItemFindManyArgs
  ): Promise<InventoryItem[]> {
    return this.prisma.farm
      .findUnique({
        where: { id: parentId },
      })
      .inventoryItems(args);
  }

  async getOwner(parentId: string): Promise<User | null> {
    return this.prisma.farm
      .findUnique({
        where: { id: parentId },
      })
      .owner();
  }
}
