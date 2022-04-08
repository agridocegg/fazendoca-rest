import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlantService } from "./plant.service";
import { PlantControllerBase } from "./base/plant.controller.base";

@swagger.ApiTags("plants")
@common.Controller("plants")
export class PlantController extends PlantControllerBase {
  constructor(
    protected readonly service: PlantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
