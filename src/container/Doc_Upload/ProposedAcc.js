import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UploadDoc, Document, ViewDoc } from '../../component/Doc-Upload-Acc'
import { uploadDocument, documentsUplaod } from '../../data'
import AccPopUp from '../../component/PopUpPage/AccPopUp'
import AccDocModal from '../../component/PopUpPage/AccDocModal'
import UploadDocModal from '../../component/PopUpPage/UploadDocModal'
import { uploadFormAction, uploadAction, deleteDoc,deleteDocAddInfo } from '../../redux/action/uploadAction'

const ProposedAcc = ({ label, title, formFillDocDownload, addNonupload,uwId }) => {
    const [openUploadModal, setopenUploadModal] = useState(false)
    const [modalHeading, setmodalHeading] = useState('')
    const [uploadModalHeading, setuploadModalHeading] = useState('')
    const [documentList, setdocumentList] = useState(null)
    const [openDocModal, setopenDocModal] = useState(false)
    const [uploadDocModal, setuploadDocModal] = useState(false)
    const [proposedDocList, setproposedDocList] = useState(null)
    const [showViewDelete, setshowViewDelete] = useState(false)
    const [fileObject, setfileObject] = useState('')

    const customerDetail = useSelector((state) => state.customerDetailReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        let proposedDocList;
        if (title === 'INSURER') {
            proposedDocList = formFillDocDownload?.list?.filter(item => {
                return item.name === 'INSURER';
            })
        }
        else if (title === 'OWNER') {
            proposedDocList = formFillDocDownload?.list?.filter(item => {
                return item.name === 'OWNER';
            })
        }
        setproposedDocList(proposedDocList)
    }, [formFillDocDownload?.list, title])


    let demoDoc
    if (label === 'add-form') {
        demoDoc = addNonupload?.filter(item => item.questionnaire === false)
    }

    const clickHandler = (heading, documentList) => {
        setmodalHeading(heading)
        setdocumentList(documentList)
        setopenUploadModal(!openUploadModal)
    }
    const clickHandleraddNon = (heading) => {
        setuploadDocModal(true)
        setmodalHeading(heading)
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
        let headerData

        if (label === 'form-filling') {
            headerData = {
                documentCategory: 'Age Proof',
                documentType: 'PAN Card',
                partyType: 'OWNER',
                documentSide: "",
                policyNo: "",
                documentNumber: "",
                proposalNo: customerDetail?.proposalNumber
            };
            dispatch(uploadFormAction(headerData, formData, (res) => {
                if (res.status === 'OK') {
                    setuploadDocModal(false)
                    setshowViewDelete(true)
                }
            }))
        }
        else {
            console.log("===========>",demoDoc)
            headerData = {
                documentCd: demoDoc[0].documentCd,
                docCategoryCd: demoDoc[0].docCategoryCd,
                docCategoryTypeCd: demoDoc[0].docCategoryTypeCd,
                documentType: 'PAN Card',
                partyType: demoDoc[0].partyType,
                id: demoDoc[0].id,
                documentSide: "",
                policyNo: "",
                documentNumber: "",
                proposalNo: customerDetail?.proposalNumber
            };

            dispatch(uploadAction(headerData, formData, (res) => {
                if (res.status === 'OK') {
                    setuploadDocModal(false)
                    setshowViewDelete(true)
                    setfileObject(res.body)
                }
            }))
        }
    }

    const deleteDocHandler = () => {
        let payload = fileObject
        
        let fileName = 'camera.png'
        dispatch(deleteDoc(payload, (res) => {
            
        }))
    }
    const viewDocHandler = () => {
        let payload = fileObject
        
        let fileName = 'camera.png'
        // dispatch(viewDoc(payload, (res) => {
            
        // }))
    }
    const AddInfodeleteDocHandler=()=>{
        let payload = fileObject
        payload['uwId']=uwId
        dispatch(deleteDocAddInfo(payload, (res) => {
            
        }))
    }
    return (<>
        <div className='nonMedListBlock'>
            {proposedDocList && proposedDocList[0]?.documentList?.map((item, idx) =>
                <UploadDoc
                    label={label}
                    key={item.idx}
                    data={item}
                    showViewDelete={showViewDelete}
                    clickHandler={label === 'add-form' ? clickHandleraddNon : clickHandler}
                    deleteDocHandler={deleteDocHandler}
                    viewDocHandler={viewDocHandler}
                />
            )
            }
            {
                label === 'add-form' &&
                addNonupload?.map((item, idx) =>
                    <UploadDoc
                        label={label}
                        key={item.idx}
                        data={item}
                        showViewDelete={showViewDelete}
                        clickHandleraddNon={clickHandleraddNon}
                        deleteDocHandler={AddInfodeleteDocHandler}
                        viewDocHandler={viewDocHandler}
                        uwId={uwId}
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
                heading={label === 'form-filling' ? `Upload ${customerDetail?.customerName}’s`
                    : `Upload ${modalHeading}`}
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
