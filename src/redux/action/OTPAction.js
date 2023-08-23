import Axios from "axios";
import apiConstants from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"


export const sendOTPAction = (data, cb) => (dispatch) => {
    Axios({
        method: "post",
        mode: "no-cors",
        url: `${apiConstants.API_URL}customer-portal/customerConsent`,
        headers: {
            "Content-Type": "application/json",
            "Authorization":'Bearer'+' '+localStorage.getItem("accessToken")
        },
        data: data
    })
        .then((res) => {
            toaster('success', res?.data?.message);
            cb(res.data);
        })
        .catch((error) => {
            toaster('error', error?.message);
        });
};

export const verifyOTPAction = (data,proposalNo, cb) => (dispatch) => {
    Axios({
        method: "post",
        mode: "no-cors",
        url: `${apiConstants.API_URL}customer-portal/validateOtp?proposalNumber=${proposalNo}`,
        headers: {
            "Content-Type": "application/json",
            "Authorization":'Bearer'+' '+localStorage.getItem("accessToken")
        },
        data: data
    })
        .then((res) => {
            toaster('success', res?.data?.message);
            cb(res.data);
        })
        .catch((error) => {
            toaster('error', error?.message);
        });
};
