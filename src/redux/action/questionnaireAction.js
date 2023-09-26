import Axios from "axios";
import { apiConstants } from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"


export const questionnaireAction = (additionalQuestionnaire, cb) => (dispatch) => {
    dispatch({
        type: "LOADER_ON",
    });
    Axios({
        method: "post",
        mode: "no-cors",
        url: `${apiConstants.API_URL}customer-portal/additionalQuestionnaire`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
        },
        data:additionalQuestionnaire
    })
        .then((res) => {
            dispatch({
                type: "LOADER_OFF",
            });
            if (res.data.status==='OK') {
                toaster('success', res.data.message)
                cb(res.data);
            }
            else {
                toaster('error', res.data.message)
                // cb(res.data); // need to remobved
            }
        })
        .catch((error) => {
            dispatch({
                type: "LOADER_OFF",
            });
        });
};


export const saveQuestionnaireAction = (payload, cb) => (dispatch) => {
    dispatch({
        type: "LOADER_ON",
    });
    Axios({
        method: "post",
        mode: "no-cors",
        url: `${apiConstants.API_URL}customer-portal/questionnaire/save`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
        },
        "data": payload
    })
        .then((res) => {
            dispatch({
                type: "LOADER_OFF",
            });
            if (res.data.status==='OK') {
                toaster('success', res.data.message)
                cb(res.data);
            }
        })
        .catch((error) => {
            dispatch({
                type: "LOADER_ON",
            });
        });
};


