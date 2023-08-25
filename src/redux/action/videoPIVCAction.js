import Axios from "axios";
import { apiConstants } from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"

export const videoPIVCAction = (data, linkTo, cb) => (dispatch) => {
    dispatch({
        type: "LOADER_ON",
    });
    Axios({
        method: "post",
        mode: "no-cors",
        url: `${apiConstants.API_URL}proposal/send/${linkTo}Link`,
        headers: {
            "Content-Type": "application/json",
            "agentCode": localStorage.getItem('agentCode'),
            "Authorization": 'Bearer' + " " + localStorage.getItem('accessToken')
        },
        data
    })
        .then((res) => {
            dispatch({
                type: "LOADER_OFF",
            });
            if (res.data.status !== "FORBIDDEN") {
                toaster("success", res.data.message);
            }
            else {
                toaster("error", res.data.message);
            }
        })
        .catch((error) => {
            toaster("error", error.message);
            dispatch({
                type: "LOADER_OFF",
            });
        });
};
