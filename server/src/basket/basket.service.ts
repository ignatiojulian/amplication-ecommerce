import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BasketServiceBase } from "./base/basket.service.base";

@Injectable()
export class BasketService extends BasketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
