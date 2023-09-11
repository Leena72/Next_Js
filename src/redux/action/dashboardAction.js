import Axios from "axios";
import { apiConstants } from "../../constants/apiConstants";
import actionTypes from "./actionTypes/actionTypes";
import { toaster } from "../../utils/toaster"


export const dashboardAction = (proposalNo, cb) => (dispatch) => {
    dispatch({
        type: "LOADER_ON",
    });
    Axios({
        method: "get",
        mode: "no-cors",
        url: `${apiConstants.API_URL}customer-portal/status?proposalNumber=${proposalNo}`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
        },
    })
        .then((res) => {
            dispatch({
                type: actionTypes.customerInfoSuccess,
                info: res.data,
            });
            dispatch({
                type: "LOADER_OFF",
            });
            if (res.data.status === 'OK') {
                cb(res.data.body)
            }
        })
        .catch((error) => {
            dispatch({
                type: "LOADER_OFF",
            });
            toaster('error', error.message);
        });
};

