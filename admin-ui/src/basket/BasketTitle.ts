import { Basket as TBasket } from "../api/basket/Basket";

export const BASKET_TITLE_FIELD = "id";

export const BasketTitle = (record: TBasket): string => {
  return record.id || record.id;
};
