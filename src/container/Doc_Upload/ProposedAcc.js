import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UploadDoc, Document, ViewDoc } from '../../component/Doc-Upload-Acc'
import { uploadDocument, documentsUplaod } from '../../data'
import AccPopUp from '../../component/PopUpPage/AccPopUp'
import AccDocModal from '../../component/PopUpPage/AccDocModal'
import UploadDocModal from '../../component/PopUpPage/UploadDocModal'
import { uploadFormAction, uploadAction, deleteDoc } from '../../redux/action/uploadAction'

const ProposedAcc = ({ label, title, formFillDocDownload, addNonupload }) => {
    const [openUploadModal, setopenUploadModal] = useState(false)
    const [modalHeading, setmodalHeading] = useState('')
    const [uploadModalHeading, setuploadModalHeading] = useState('')
    const [documentList, setdocumentList] = useState(null)
    const [openDocModal, setopenDocModal] = useState(false)
    const [uploadDocModal, setuploadDocModal] = useState(false)
    const [proposedDocList, setproposedDocList] = useState(null)
    const [showViewDelete, setshowViewDelete] = useState(false)
    const customerDetail = useSelector((state) => state.customerDetailReducer.body)
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
    }, [title])


    let demoDoc
    if (label === 'add-form') {
        demoDoc = addNonupload?.filter(item => item.questionnaire === false)
        // console.log('demoDoc',demoDoc)
    }



    const clickHandler = (heading, documentList) => {
        setmodalHeading(heading)
        setdocumentList(documentList)
        setopenUploadModal(!openUploadModal)
    }
    const clickHandleraddNon = () => {
        setuploadDocModal(true)

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
                proposalNo: localStorage.getItem('proposalNo')
                // proposalNo:"3108426548"
            };
            dispatch(uploadFormAction(headerData, formData, (res) => {
                // toaster('success', res.description)
                if (res.status === 'OK') {
                    setuploadDocModal(false)
                    showViewDelete(true)
                }

            }))
        }
        else {
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
                proposalNo: localStorage.getItem('proposalNo')
            };

            dispatch(uploadAction(headerData, formData, (res) => {
                // console.log('res',res)
                if (res.status === 'OK') {

                    setuploadDocModal(false)
                    showViewDelete(true)
                }
                // toaster('success', res.description)
            }))
        }
    }

    const deleteDocHandler = () => {
        let fileName = 'camera.png'
        dispatch(deleteDoc(fileName, () => {
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
                    clickHandler={clickHandler}
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
