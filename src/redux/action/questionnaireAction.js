import Axios from "axios";
import {apiConstants} from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"


export const questionnaireAction = (additionalQuestionnaire, cb) => (dispatch) => {
    
    Axios({
        method: "post",
        mode: "no-cors",
        url: `${apiConstants.API_URL}customer-portal/additionalQuestionnaire`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization":'Bearer'+' '+localStorage.getItem("accessToken")
        },
        data: {
            "workFlowStage": "ADDITIONAL_QUESTIONNAIRE",
            "proposalNumber": "3107423902",
            "additionalQuestionnaire": additionalQuestionnaire
        },
    })
        .then((res) => {
            if(res.data.body){
                toaster('success',res.data.message)
            cb(res.data);
            }
            else{
            toaster('error',res.data.message)
            cb(res.data); // need to remobved
            }
        })
        .catch((error) => {
        });
};
