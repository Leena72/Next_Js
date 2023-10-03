import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UploadDoc, Document, ViewDoc } from '../../component/Doc-Upload-Acc'
import { uploadDocument, documentsUplaod } from '../../data'
import AccPopUp from '../../component/PopUpPage/AccPopUp'
import AccDocModal from '../../component/PopUpPage/AccDocModal'
import UploadDocModal from '../../component/PopUpPage/UploadDocModal'
import { uploadFormAction, uploadAction, deleteDoc, deleteDocAddInfo } from '../../redux/action/uploadAction'
import { dashboardAction } from '@/redux/action/dashboardAction'
import { downloadAction } from '@/redux/action/downloadAction'
import PopUpPage from '@/component/PopUpPage'
import Image from 'next/image'
import plaholderPdf from '../../Assets/images/placeholder.png'
import DeletePopUpPage from '../../component/PopUpPage/DeletePopUp'
import { Button } from 'bootstrap'
const ProposedAcc = ({ label, title, formFillDocDownload, addNonupload, uwId }) => {
    const [openUploadModal, setopenUploadModal] = useState(false)
    const [modalHeading, setmodalHeading] = useState('')
    const [uploadModalHeading, setuploadModalHeading] = useState('')
    const [documentList, setdocumentList] = useState(null)
    const [openDocModal, setopenDocModal] = useState(false)
    const [uploadDocModal, setuploadDocModal] = useState(false)
    const [proposedDocList, setproposedDocList] = useState(null)
    const [showViewDelete, setshowViewDelete] = useState(false)
    const [showDeletePopup, setShowDeletePopup] = useState(false)
    const [proposalHeader, setProposalHeader] = useState('')
    const [deleteItem, setDeleteItem] = useState('')
    const [fileObject, setfileObject] = useState('')
    const [preview, setPreview] = useState({ url: '', data: null })
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

    const clickHandler = (data) => {
        setmodalHeading(data.indexValue)
        setdocumentList(data.documents)
        setProposalHeader(data)
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
        // console.log('proposedDocList',proposedDocList)

        if (label === 'form-filling') {
            headerData = {
                documentCategory: proposalHeader?.category,
                documentType: proposalHeader?.indexValue,
                partyType: proposedDocList[0]?.name,
                documentSide: "",
                policyNo: customerDetail?.policyNumber,
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
            headerData = {
                documentCd: demoDoc[0].documentCd,
                docCategoryCd: demoDoc[0].docCategoryCd,
                docCategoryTypeCd: demoDoc[0].docCategoryTypeCd,
                documentType: demoDoc[0].indexValue,
                partyType: demoDoc[0].partyType,
                id: demoDoc[0].id,
                documentSide: demoDoc[0].side ? demoDoc[0].side : 'FRONT_SIDE',
                policyNo: customerDetail?.policyNumber,
                documentNumber: demoDoc[0].documentNumber,
                proposalNo: customerDetail?.proposalNumber,
                uwId: uwId
            };
            dispatch(uploadAction(headerData, formData, (res) => {
                if (res.status === 'OK') {
                    dispatch(dashboardAction(customerDetail.proposalNumber, (res) => {

                    }))
                    setuploadDocModal(false)
                    setshowViewDelete(true)
                    setfileObject(res.body)
                }
            }))
        }
    }

    const deleteDocHandler = () => {
        let payload = fileObject

        dispatch(deleteDoc(payload, (res) => {
            dispatch(dashboardAction(customerDetail.proposalNumber, (res) => {

            }))
        }))
    }
    const viewDocHandler = (item) => {
        dispatch(downloadAction(customerDetail.proposalNumber, item.url, 'preview', (res) => {
            if (res.indexOf('blob') > -1) {
                setPreview({ url: res, data: item })
            }
        }))
    }
    const AddInfodeleteDocHandler = () => {
        let item = deleteItem
        let payload = JSON.parse(JSON.stringify(item));
        payload['uwId'] = uwId
        payload['proposalNo'] = customerDetail.proposalNumber

        dispatch(deleteDocAddInfo(payload, (res) => {
            setShowDeletePopup(false)
            dispatch(dashboardAction(customerDetail.proposalNumber, (res) => {
            }))
        })
        )
    }
    const openDeletePopUp = (item) => {
        setShowDeletePopup(true)
        setDeleteItem(item)
    }
    const closeDeleteHandler = () => { }
    const deleteHandler = () => { }

    const closeHandler = () => {
        setPreview('')
    }
    // console.log('proposedDocList',proposedDocList)
    return (<>
        <ul className='nonMedListBlock'>
            {proposedDocList && proposedDocList[0]?.documentList?.map((item, idx) =>
            (<li key={idx}>
                <UploadDoc
                    label={label}
                    data={item}
                    showViewDelete={showViewDelete}
                    clickHandler={label === 'add-form' ? clickHandleraddNon : clickHandler}
                    deleteDocHandler={deleteDocHandler}
                    viewDocHandler={() => viewDocHandler(item)}
                // proposedDocList={proposedDocList}
                />
            </li>
            )
            )
            }
            {
                label === 'add-form' &&
                addNonupload?.map((item, idx) =>
                (<li key={idx}>
                    <UploadDoc
                        label={label}
                        data={item}
                        showViewDelete={showViewDelete || item.url}
                        clickHandleraddNon={clickHandleraddNon}
                        // deleteDocHandler={() => AddInfodeleteDocHandler(item)}
                        deleteDocHandler={() => openDeletePopUp(item)}
                        viewDocHandler={() => viewDocHandler(item)}
                        uwId={uwId}
                    />
                </li>)
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
        </ul>
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
                proposalNo={customerDetail.proposalNumber}
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
        {
            preview && preview.url && <PopUpPage
                heading={preview?.data.indexValue}
                onClose={closeHandler}
            >
                <div className="img-thumbnail-view">
                    {preview?.data?.url.indexOf(".pdf") < 0 ? <Image
                        src={
                            preview.url
                        }
                        alt="img"
                        height='300'
                        width='300'

                    /> : (<button
                        className="open-pdf-btn"
                        onClick={() => {
                            //const downloadFile = (blob, fileName) => {
                            // const blob = new Blob(
                            //     this.state.previewImg,
                            //     {
                            //         type: "application/pdf",
                            //     }
                            // );
                            if (typeof window !== "undefined") {
                                const fileName = "myDocument.pdf";
                                const link = document.createElement("a");
                                // create a blobURI pointing to our Blob
                                link.href = preview.url; //URL.createObjectURL(previewList[currentImgIndex]?.src);
                                link.download = fileName;
                                // some browser needs the anchor to be in the doc
                                document.body.append(link);
                                link.click();
                                link.remove();
                                // in case the Blob uses a lot of memory
                                setTimeout(
                                    () => URL.revokeObjectURL(link.href),
                                    7000
                                );
                                // };
                                // window.open(
                                //   window.URL.createObjectURL(new Blob(previewList[currentImgIndex]?.src, {type: "pdf"})),
                                //  // window.URL.createObjectURL(previewList[currentImgIndex]?.src),
                                //   "_blank"
                                // )
                            }
                            }
                        }
                    >
                        <Image src={plaholderPdf} width='200' alt="pdf placeholder" />
                    </button>)}
                </div>
            </PopUpPage>

        }
        {
            showDeletePopup && <DeletePopUpPage
                onClose={() => setShowDeletePopup(false)}
                deleteHandler={AddInfodeleteDocHandler}
            />
        }
    </>
    )
}

export default ProposedAcc
