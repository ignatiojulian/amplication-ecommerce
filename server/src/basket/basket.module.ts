import { Module } from "@nestjs/common";
import { BasketModuleBase } from "./base/basket.module.base";
import { BasketService } from "./basket.service";
import { BasketController } from "./basket.controller";
import { BasketResolver } from "./basket.resolver";

@Module({
  imports: [BasketModuleBase],
  controllers: [BasketController],
  providers: [BasketService, BasketResolver],
  exports: [BasketService],
})
export class BasketModule {}
