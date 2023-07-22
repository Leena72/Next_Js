import Axios from "axios";

export const login = () => {
    Axios({
        method: "post",
        mode: 'no-cors',
        url: `${apiConstants.API_URL}api/v1/auth/customer`,
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            "input1": "3107423903",
            "input2": "2002-12-12 00:00:00"
        }
    })
    .then((res)=>{

    })
}