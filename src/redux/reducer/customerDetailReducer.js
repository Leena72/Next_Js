import { statusApi } from "@/data";
const initialState = {};
const customerDetailReducer = (state = statusApi, action) => {
  switch (action.type) {
    case "CUSTOMER_INFO_SUCCESS":
      return (action.info ? action.info.body : state);
    case "CUSTOMER__INFO_FAILED":
      return (action.error ? action.info.body : state);
    default:
      return state;
  }
};

export default customerDetailReducer;