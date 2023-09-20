import Axios from "axios";
import { apiConstants } from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"


export const sendOTPAction = (data, cb) => (dispatch) => {
    Axios({
        method: "post",
        mode: "no-cors",
        url: `${apiConstants.API_URL}customer-portal/customerConsent`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
        },
        data: data
    })
        .then((res) => {
            if (res.data.status === "OK") {
                toaster('success', res?.data?.message);
                cb(res.data);
            }
            else {
                toaster('error', res?.data?.message);
            }
        })
        .catch((error) => {
            toaster('error', error?.message);
        });
};

export const verifyOTPAction = (data, proposalNo, fileName, cb) => (dispatch) => {
    Axios({
        method: "post",
        mode: "no-cors",
        url: data.key ==='REVISED_OFFER'
        ? 
        `${apiConstants.API_URL}customer-portal/validateOtp?proposalNumber=${proposalNo}&fileName=${fileName[0]}&fileName=${fileName[1]}`
        :
        `${apiConstants.API_URL}customer-portal/validateOtp?proposalNumber=${proposalNo}&fileName=${fileName}`,

        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
        },
        data: data
    })
        .then((res) => {
            if (res.data.body !== null) {
                toaster('success', res?.data?.message);
                cb(res.data);
            }
            else{
                toaster('error', res?.data?.message);
            }
        }
        )
        .catch((error) => {
            toaster('error', error?.message);
        });
};
