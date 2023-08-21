import Axios from "axios";
import { toaster } from "../../utils/toaster"
import axios from "axios";

// add non medical
export const uploadAction = (headerData, fileData, cb) => (dispatch) => {
    axios
    .post(
      `https://dev-api-proposal.bhartiaxa.com/public/api/v1/proposal/document/addInfo/uploadFile?documentCd=${data.documentCd}&docCategoryCd=${data.docCategoryCd}&documentSide=FRONT_SIDE&docCategoryTypeCd=${data.docCategoryTypeCd}&documentNumber=${docNumber}&partyType=${this.state.docType}&proposalNo=${this.props.data && this.props.data.proposalNumber}&policyNo=${localStorage.getItem('policyNumberTpa')}&serviceDocListId=${data.id}&uwId=${this.props.data.id}`,
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


// form filling
export const uploadFormAction = (headerData, fileData, cb) => (dispatch) => { 
  axios
  .post(
    `https://dev-api-proposal.bhartiaxa.com/public/api/v1/proposal/document/uploadFile`,
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
