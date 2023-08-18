import Axios from "axios";
import { toaster } from "../../utils/toaster"


export const loginHandler = (proposalNo, DOB, cb) => (dispatch) => {
    Axios({
        method: "post",
        mode: "no-cors",
        url: `https://dev-api-auth.bhartiaxa.com/public/api/v1/auth/customer`,
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            "input1": proposalNo,
            "input2": DOB + ' ' + '00:00:00'
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
    })
    .catch((error) => {
        console.log('>>')
    });
};
