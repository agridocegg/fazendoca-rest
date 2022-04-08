import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CropServiceBase } from "./base/crop.service.base";

@Injectable()
export class CropService extends CropServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
