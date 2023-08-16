import Axios from "axios";
import { toaster } from "../../utils/toaster"


export const questionnaireAction = (additionalQuestionnaire, cb) => (dispatch) => {
    
    Axios({
        method: "post",
        mode: "no-cors",
        url: `https://dev-api-proposal.bhartiaxa.com/public/api/v1/customer-portal/additionalQuestionnaire`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + ' ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzMTA3NDIzOTAyIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IkNVU1RPTUVSIn1dLCJpYXQiOjE2OTIxNzkzODQsImV4cCI6MTY5MjI2NTc4NH0.bN6P1GI5C-jveLMH-QByOUIVqoXSVMnrcannc85orFY4OMFzUpFli2QvdP-FRCgZ7JWUPSX4heM59QVMg9ZmSw'
        },
        data: {
            "workFlowStage": "ADDITIONAL_QUESTIONNAIRE",
            "proposalNumber": "3107423902",
            "additionalQuestionnaire": additionalQuestionnaire
        },
    })
        .then((res) => {
            console.log('res', res)
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
