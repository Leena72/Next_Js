import Axios from "axios";
import { toaster } from "../../utils/toaster"
import axios from "axios";

export const uploadAction = (headerData, fileData, cb) => (dispatch) => {
    axios
    .post(
      `https://dev-api-proposal.bhartiaxa.com/public/api/v1/proposal/document/addInfo/uploadFile`,
      fileData,
      {
        headers: {
          ...headerData,
          accept: "*/*",
          Authorization:'Bearer'+' '+localStorage.getItem("accessToken"),
        },
      }
    )

        .then((res) => {
            console.log('res', res)
            if (res.data.status === "NOT_ACCEPTABLE") {
                toaster("error", res.data.message);
              }
              if (cb) {
                cb(res.data.body);
              }
        })
        .catch((error) => {
        });
};
