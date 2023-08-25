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
            "additionalQuestionnaire": additionalQuestionnaire,
            "docCategoryCd": "COCL",
            "docCategoryTypeCd": "CO",
            "documentCd": "string",
            "documentNumber": "string",
            "documentSide": "FRONT_SIDE",
            "partyType": "OWNER",
            "policyNumber": "506-8151645",
            "proposalNumber": "3308408976",
            "serviceDocListId": 970310,
            "uwId": 46993
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


