import Axios from "axios";
import {apiConstants} from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"

export const downloadAction = (proposalNo, file, cb) => (dispatch) => {
    Axios({
        method: "get",
        mode: "no-cors",
        url: `${apiConstants.API_URL}proposal/document/download?proposalNo=${proposalNo}&file=${file}`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
        },
        responseType: "blob",
    }) .then((response) => {
            // create file link in browser's memory
            const href = URL.createObjectURL(response.data);
        
            // create "a" HTML element with href to file & click
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', 'file.pdf'); //or any other extension
            document.body.appendChild(link);
            link.click();
        
            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        })
        .catch((error) => {
            toaster('error', error.message);
        });
};

