import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BasketService } from "./basket.service";
import { BasketControllerBase } from "./base/basket.controller.base";

@swagger.ApiTags("baskets")
@common.Controller("baskets")
export class BasketController extends BasketControllerBase {
  constructor(
    protected readonly service: BasketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
