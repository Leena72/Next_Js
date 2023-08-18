import Axios from "axios";
import { toaster } from "../../utils/toaster"

export const customerDetailAction = (proposalNo, cb) => (dispatch) => {
    Axios({
        method: "get",
        mode: "no-cors",
        url: `https://dev-api-tracker.bhartiaxa.com/public/api/v1/tracker/proposalDetails?proposalNumber=${proposalNo}`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
        },
    })
        .then((res) => {
            if(res.data.status='OK'){
            toaster('success', res.data.message)
                cb(res.data.body)
            }
        })
        .catch((error) => {
        });
};

