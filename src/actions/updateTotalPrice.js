import { UPDATE_TOTAL_PRICE } from "../constants";

export const updateTotalPrice = (price = 0) => ({
  type: UPDATE_TOTAL_PRICE,
  payload: price
});
