import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { UploadDoc, Document, ViewDoc } from '../../component/Doc-Upload-Acc'
import { uploadData, docData, viewData, uploadDocument, documentsUplaod } from '../../data'
import AccPopUp from '../../component/PopUpPage/AccPopUp'
import AccDocModal from '../../component/PopUpPage/AccDocModal'
import UploadDocModal from '../../component/PopUpPage/UploadDocModal'
import { uploadFormAction, uploadAction,deleteDoc } from '../../redux/action/uploadAction'


const ProposedAcc = ({label,title,formFillDocDownload}) => {
    const proposedDocList=formFillDocDownload?.list?.filter(item=> {
        return item.name === 'OWNER';
      })
      const insuredDocList=formFillDocDownload?.list?.filter(item=> {
        return item.name === 'INSURED';
      })

    const customerDetail = useSelector((state)=>state.customerDetailReducer.body)
    const dispatch = useDispatch()

    const [openUploadModal, setopenUploadModal] = useState(false)
    const [modalHeading, setmodalHeading] = useState('')
    const [uploadModalHeading, setuploadModalHeading] = useState('')
    const [documentList, setdocumentList] = useState(null)
    const [openDocModal, setopenDocModal] = useState(false)
    const [uploadDocModal, setuploadDocModal] = useState(false)

    const clickHandler = (heading,documentList) => {
        setmodalHeading(heading)
        setdocumentList(documentList)
         setopenUploadModal(!openUploadModal)
    }
    const docClickHandler = (id) => {
        setopenDocModal(!openDocModal)
    }
    const accPopUpHandler = (data) => {
        setuploadModalHeading(data)
        setopenUploadModal(false)
        setuploadDocModal(true)
    }
    const accDocModalHandler = () => { }

    const uploadDocHandler = (fileValue) => {
        let file = fileValue
        let formData = new FormData();
        formData.append("file", file);
        const headerData = {
            documentCategory: 'Age Proof',
            documentType: 'PAN Card',
            partyType: 'OWNER',
            documentSide: "",
            policyNo: "",
            documentNumber: "",
            proposalNo: localStorage.getItem('proposalNo')
        };
        
        if (label === 'form-filling') {
            dispatch(uploadFormAction(headerData, formData, (res) => {
                toaster('success', res.description)
                setuploadDocModal(false)
            }))
        }
        else{
            dispatch(uploadAction(headerData, formData, (res) => {
                toaster('success', res.description)
            }))   
        }
    }

    const deleteDocHandler=()=>{
        let fileName='camera.png'
        dispatch(deleteDoc(fileName,()=>{
        }))
    }
    return (<>
        <div className='nonMedListBlock'>
            {proposedDocList && proposedDocList[0]?.documentList?.map((item,idx) =>
            
                <UploadDoc
                    key={item.idx}
                    data={item}
                    clickHandler={clickHandler}
                />
            )
            }
            {/* {docData.map(item =>
                <Document
                    key={item.id}
                    data={item}
                    clickHandler={docClickHandler}
                />
            )
            }
            {viewData.map(item =>
                <ViewDoc
                    key={item.id}
                    data={item}
                    deleteDocHandler={deleteDocHandler}
                />
            )
            } */}
        </div>
        {openUploadModal &&
            <AccPopUp
                heading={`Select ${modalHeading}`}
                subheading={'Any one document is mandatory'}
                documentList={documentList}
                content={uploadDocument}
                clickHandler={accPopUpHandler}
                onClose={() => setopenUploadModal(false)}
            />}
        {
            uploadDocModal && <UploadDocModal
                heading={`Upload ${customerDetail?.customerName}’s`}
                subheading={uploadModalHeading}
                onClose={() => setuploadDocModal(false)}
                label={label}
                uploadDocHandler={uploadDocHandler}
            />
        }
        {
            openDocModal && <AccDocModal
                heading={'Financial Document'}
                content={documentsUplaod}
                clickHandler={accDocModalHandler}
                onClose={docClickHandler}
            />
        }
    </>
    )
}

export default ProposedAcc
