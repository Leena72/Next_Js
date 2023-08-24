const initialState = {
    isLoaderOn: false,
};
const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADER_ON":
            return {
                ...state,
                isLoaderOn: true
            }
        case "LOADER_OFF":
            return {
                ...state,
                isLoaderOn: false
            }
        default:
            return state;
    }
};

export default loaderReducer;
