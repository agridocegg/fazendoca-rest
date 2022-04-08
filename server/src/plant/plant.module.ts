import { Module } from "@nestjs/common";
import { PlantModuleBase } from "./base/plant.module.base";
import { PlantService } from "./plant.service";
import { PlantController } from "./plant.controller";
import { PlantResolver } from "./plant.resolver";

@Module({
  imports: [PlantModuleBase],
  controllers: [PlantController],
  providers: [PlantService, PlantResolver],
  exports: [PlantService],
})
export class PlantModule {}
