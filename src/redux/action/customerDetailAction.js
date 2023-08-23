import Axios from "axios";
import {apiConstants} from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"

export const customerDetailAction = (proposalNo, cb) => (dispatch) => {
    Axios({
        method: "get",
        mode: "no-cors",
        url: `${apiConstants.API_URL}tracker/proposalDetails?proposalNumber=${proposalNo}`,
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

