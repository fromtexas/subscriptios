import { SELECT_PAYMENT_METHOD } from "../constants";

export const selectPaymentMethod = method => ({
  type: SELECT_PAYMENT_METHOD,
  payload: method
});
