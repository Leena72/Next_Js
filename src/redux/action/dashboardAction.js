import Axios from "axios";
import { toaster } from "../../utils/toaster"

export const dashboardAction = (proposalNo, cb) => (dispatch) => {
    Axios({
        method: "get",
        mode: "no-cors",
        url: `https://dev-api-proposal.bhartiaxa.com/public/api/v1/customer-portal/status?proposalNumber=${proposalNo}`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
        },
    })
        .then((res) => {
            console.log('res',res)
        })
        .catch((error) => {
        });
};

