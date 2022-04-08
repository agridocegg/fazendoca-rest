import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CropService } from "./crop.service";
import { CropControllerBase } from "./base/crop.controller.base";

@swagger.ApiTags("crops")
@common.Controller("crops")
export class CropController extends CropControllerBase {
  constructor(
    protected readonly service: CropService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
