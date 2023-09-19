import Axios from "axios";
import { apiConstants } from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"
import axios from "axios";

// add non medical
export const uploadAction = (headerData, fileData, cb) => (dispatch) => {
  dispatch({
    type: "LOADER_ON",
  });
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
      dispatch({
        type: "LOADER_OFF",
      });
      if (res.data.status === 'OK') {
        cb(res.data);
        toaster("success", res.data.message);
      }
      else {
        toaster("error", res.data.message);
      }
    })
    .catch((error) => {
      dispatch({
        type: "LOADER_OFF",
      });
      toaster("error", error.message);
    });
};


// form filling
export const uploadFormAction = (headerData, fileData, cb) => (dispatch) => {
  dispatch({
    type: "LOADER_ON",
  });
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
      dispatch({
        type: "LOADER_OFF",
      });
      if (res.data.body) {
        cb(res.data.body)
      }
      if (res.data.status === "LOCKED") {
        toaster("error", res.data.message);
        cb(res.data)
      }
    })
    .catch((error) => {
      dispatch({
        type: "LOADER_OFF",
      });
      toaster("error", error.message);
    });
};


// delete doc form filling

export const deleteDoc = (payload, cb) => (dispatch) => {
  console.log('payload', payload)
  dispatch({
    type: "LOADER_ON",
  });
  axios
    .delete(
      `${apiConstants.API_URL}proposal/document/delete?file=${payload.fileName}`,
      {
        headers: {
          "Content-Type": "application/json",
          documentCategory: payload.docCategoryCd,
          documentType: payload.docCategoryTypeCd,
          partyType: payload.partyType,
          documentSide: "",
          policyNo: payload.policyNo,
          // documentNumber: '',
          proposalNo: payload.proposalNo
        },
      }
    )
    .then((resp) => {
      dispatch({
        type: "LOADER_OFF",
      });
      if (cb) {
        cb();
      }
    })
    .catch((error) => {
      dispatch({
        type: "LOADER_OFF",
      });
      toaster("error", error.message);
    });
};

// delete doc form add info

export const deleteDocAddInfo = (payload, cb) => (dispatch) => {
  console.log('payload', payload)
  dispatch({
    type: "LOADER_ON",
  });
  axios
    .delete(`${apiConstants.API_URL}proposal/document/addInfo/delete?file=${payload.fileName}&proposalNo=${payload.proposalNo}&uwId=${payload.uwId}`, {
    headers: {
      "Authorization": localStorage.getItem('agentAuth'),
    },
  })
    .then((resp) => {
      dispatch({
        type: "LOADER_OFF",
      });
      if (cb) {
        cb();
      }
    })
    .catch((error) => {
      dispatch({
        type: "LOADER_OFF",
      });
      toaster("error", error.message);
    });
};
