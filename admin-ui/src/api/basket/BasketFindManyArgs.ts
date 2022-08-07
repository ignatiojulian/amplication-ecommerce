import { BasketWhereInput } from "./BasketWhereInput";
import { BasketOrderByInput } from "./BasketOrderByInput";

export type BasketFindManyArgs = {
  where?: BasketWhereInput;
  orderBy?: Array<BasketOrderByInput>;
  skip?: number;
  take?: number;
};
