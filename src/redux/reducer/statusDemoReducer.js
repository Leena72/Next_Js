import {statusApi} from '../../data'
const initialState = {};
const customerDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STATUS_SUCCESS":
      return (action.info?action.info:state);
    case "STATUS_FAILED":
        return (action.error?action.info:state);
    default:
      return state;
  }
};

export default customerDetailReducer;