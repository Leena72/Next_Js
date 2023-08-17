import Axios from "axios";
import { toaster } from "../../utils/toaster"

export function downloadFile(data, filename, mime) {
    const blob = new Blob([data], { type: mime || 'application/octet-stream' });
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        window.navigator.msSaveBlob(blob, filename);
        return;
    }
    if (isIOSTWA()) {
        const pdfData = new Blob([data], { type: mime || 'application/octet-stream' });
        const fileUrl = window.URL.createObjectURL(pdfData);

        // Create a functional component for the PDF viewer
        return fileUrl;
    }
    // For other browsers and Android, perform the regular file download
    const blobURL = window.URL.createObjectURL(blob);
    const tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', filename);
    if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank');
    }
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    setTimeout(() => {
        window.URL.revokeObjectURL(blobURL);
    }, 100);
}

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
            console.log('res',res)
            let d = new Date()
            let dformat = [d.getDate(),
            (d.getMonth() + 1).toString().padStart(2, '0'),
            d.getFullYear(),
            d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join('');
            downloadFile(res.data, `receipt_${dformat}.pdf`);

        })
        .catch((error) => {
        });
};
