import Axios from "axios";
import { toaster } from "../../utils/toaster"

export const downloadAction = (proposalNo, file, cb) => (dispatch) => {
    Axios({
        method: "get",
        mode: "no-cors",
        url: `https://dev-api-proposal.bhartiaxa.com/public/api/v1/proposal/document/download?proposalNo=${proposalNo}&file=${file}`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
        },
        responseType: "blob",
    })
        .then((res) => {
            // console.log('res', res)
            let blobURL;
            var downloadLink = document.createElement("a");
            downloadLink.target = "_blank";

            // convert downloaded data to a Blob
            // var blob = new Blob([res.data], { type: "application/octet-stream" });
            var blob = new Blob([res.data], { type: "application/pdf" });

            // create an object URL from the Blob
            var URL = window.URL || window.webkitURL;
            var downloadUrl = URL.createObjectURL(blob);

            // set object URL as the anchor's href
            downloadLink.href = downloadUrl;

            // append the anchor to document body
            document.body.appendChild(downloadLink);

            // fire a click event on the anchor
            downloadLink.click();

            // cleanup: remove element and revoke object URL
            document.body.removeChild(downloadLink);
            // URL.revokeObjectURL(downloadUrl);
            setTimeout(() => {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(blobURL);
            }, 100);
        })
        .catch((error) => {
        });
};

