import Axios from "axios";
import { apiConstants } from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"
import axios from "axios";

// add non medical
export const uploadAction = (headerData, fileData, cb) => (dispatch) => {
  axios
    .post(
      `${apiConstants.API_URL}proposal/document/addInfo/uploadFile?documentCd=${headerData.documentCd}&docCategoryCd=${headerData.docCategoryCd}&docCategoryTypeCd=${headerData.docCategoryTypeCd}&documentSide=FRONT_SIDE&documentNumber=${''}&partyType=${headerData.partyType}&proposalNo=${'3209405777'}&policyNo=${'506-8150266'}&serviceDocListId=${headerData.id}&uwId=${'48521'}`,
      fileData,
      {
        headers: {
          accept: "*/*",
          Authorization: 'Bearer' + ' ' + localStorage.getItem("accessToken"),
        },
      }
    )

    .then((res) => {
      if(res.data.status ==='OK'){
        cb(res.data.body);
        toaster("success", res.data.message);
      }
      else {
        toaster("error", res.data.message);
      }
    })
    .catch((error) => {
      toaster("error", error.message);
    });
};


// form filling
export const uploadFormAction = (headerData, fileData, cb) => (dispatch) => {
  axios
    .post(
      `${apiConstants.API_URL}proposal/document/uploadFile`,
      fileData,
      {
        headers: {
          ...headerData,
          accept: "*/*",
          Authorization: 'Bearer' + ' ' + localStorage.getItem("accessToken"),
        },
      }
    )

    .then((res) => {
      if (res.data.body) {
        cb(res.data.body)
      }
      if (res.data.status === "LOCKED") {
        toaster("error", res.data.message);
        cb(res.data)
      }
    })
    .catch((error) => {
      toaster("error", error.message);
    });
};


// delete doc

export const deleteDoc =
  (fileName, proposalNumber, name, docCatg, type, cb) => (dispatch) => {
    axios
      .delete(
        `${apiConstants.API_URL}proposal/document/delete?file=${fileName}`,
        {
          headers: {
            "Content-Type": "application/json",
            documentCategory: 'Age Proof',
            documentType: 'PAN Card',
            partyType: 'OWNER',
            documentSide: "",
            policyNo: "",
            documentNumber: "",
            proposalNo: localStorage.getItem('proposalNo')
          },
        }
      )
      .then((resp) => {
        if (cb) {
          cb();
        }
      })
      .catch((error) => {
        toaster("error", error.message);
      });
  };
