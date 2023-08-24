import { combineReducers } from 'redux';
import statusDemoReducer from './statusDemoReducer'
import loaderReducer from './loaderReducer';
import customerDetailReducer from './customerDetailReducer';

export default combineReducers({
    statusDemoReducer,
    loaderReducer,
    customerDetailReducer
})