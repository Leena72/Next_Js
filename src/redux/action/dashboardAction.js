import Axios from "axios";
import {apiConstants} from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"


export const dashboardAction = (proposalNo, cb) => (dispatch) => { 
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
            cb(res.data.body)
        })
        .catch((error) => {
        });
};

