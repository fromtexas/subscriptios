import { SELECT_PRICE_PER_TIME } from "../constants";

export const selectPricePerTime = price => ({
  type: SELECT_PRICE_PER_TIME,
  payload: price
});
