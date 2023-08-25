import Axios from "axios";
import {apiConstants} from "../../constants/apiConstants";
import { toaster } from "../../utils/toaster"
import axios from "axios";

// add non medical
export const uploadAction = (headerData, fileData, cb) => (dispatch) => {
    axios
    .post(
      `${apiConstants.API_URL}proposal/document/addInfo/uploadFile?documentCd=${''}&docCategoryCd=${'COCL'}&docCategoryTypeCd=${'CO'}&documentSide=FRONT_SIDE&documentNumber=${''}&partyType=${'OWNER'}&proposalNo=${'3108426548'}&policyNo=${''}&serviceDocListId=${'1'}&uwId=${'46914'}`,
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
    `${apiConstants.API_URL}proposal/document/uploadFile`,
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
          if(res.data.body){
            cb(res.data.body)
          }
          else if (res.data.status === "LOCKED") {
              toaster("error", res.data.message);
            cb(res.data)

            }
      })
      .catch((error) => {
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
      .catch((err) => {
  // console.log('err',err)
      });
  };
