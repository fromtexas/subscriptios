import {
  TOGGLE_GIFT_STATUS,
  SELECT_PAYMENT_METHOD,
  SELECT_PRICE_PER_TIME,
  TOGGLE_AUTOPAY_STATUS,
  TOGGLE_DISCOUNT_STATUS,
  UPDATE_TOTAL_PRICE
} from "../constants";

export function subscriptionsReducer(state = {}, action) {
  switch (action.type) {
    case SELECT_PRICE_PER_TIME:
      return {
        ...state,
        price: { ...action.payload }
      };
    case TOGGLE_AUTOPAY_STATUS:
      return {
        ...state,
        autopay: !state.autopay
      };
    case SELECT_PAYMENT_METHOD:
      return {
        ...state,
        payment: action.payload
      };
    case TOGGLE_GIFT_STATUS:
      return {
        ...state,
        gift: !state.gift
      };
    case TOGGLE_DISCOUNT_STATUS:
      return {
        ...state,
        discount: !state.discount
      };
    case UPDATE_TOTAL_PRICE:
      const { discount, price } = state;
      const parsedPrice = parseInt(price.val);
      return {
        ...state,
        totalPrice: discount ? parsedPrice + action.payload : parsedPrice
      };
    default:
      return state;
  }
}
