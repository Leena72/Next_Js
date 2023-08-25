const initialState = {};
const customerDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CUSTOMER_INFO_SUCCESS":
      return (action.info?action.info:state);
    case "CUSTOMER__INFO_FAILED":
        return (action.error?action.info:state);
    default:
      return state;
  }
};

export default customerDetailReducer;