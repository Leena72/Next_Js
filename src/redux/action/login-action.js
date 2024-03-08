import Axios from "axios";
import { apiConstants, loginAPIConstant } from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"


export const loginHandler = (proposalNo, DOBPan,isDob, cb) => (dispatch) => {
    dispatch({
        type: "LOADER_ON",
    });
    Axios({
        method: "post",
        mode: "no-cors",
        url: `${loginAPIConstant.API_URL}auth/customer`,
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            "input1": proposalNo,
            "input2": isDob ? DOBPan + ' ' + '00:00:00':DOBPan
        },
    })
        .then((res) => {
            if (res.data.status === 'OK') {
                localStorage.setItem('accessToken', res.data.body.accessToken)
                localStorage.setItem('creationDate', res.data.body.creationDate)
                localStorage.setItem('expirationDate', res.data.body.expirationDate)
                // localStorage.setItem('proposalNo', JSON.stringify({ proposalNo }));
                localStorage.setItem('proposalNo', res.data.body.user.code);
                toaster('success', res.data.message)
                cb();
            }
            else {
                toaster('error', res.data.message)
            }
            dispatch({
                type: "LOADER_OFF",
            });
        })
        .catch((error) => {
            // console.log('>>')
            dispatch({
                type: "LOADER_OFF",
            });
        });
};
export const validateToken = (sso,cb) => (dispatch) => {
    dispatch({
        type: "LOADER_ON",
    });
    Axios.get(`${loginAPIConstant.API_URL}auth/tokenData/${sso}`, {
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then((res) => {
            if (res.data.status === 'OK') {
                localStorage.setItem('accessToken', res.data.body.accessToken)
                localStorage.setItem('creationDate', res.data.body.creationDate)
                localStorage.setItem('expirationDate', res.data.body.expirationDate)
                // localStorage.setItem('proposalNo', JSON.stringify({ proposalNo }));
                localStorage.setItem('proposalNo', res.data.body.user.code);
                toaster('success', res.data.message)
                cb();
            }
            else {
                // toaster('error', res.data.message)
            }
            dispatch({
                type: "LOADER_OFF",
            });
        })
        .catch((error) => {
            // console.log('>>')
            dispatch({
                type: "LOADER_OFF",
            });
        });
};