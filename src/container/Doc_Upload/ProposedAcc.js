import React, { useState } from 'react'
import { UploadDoc, Document, ViewDoc } from '../../component/Doc-Upload-Acc'
import { uploadData, docData, viewData, uploadDocument, documentsUplaod } from '../../data'
import AccPopUp from '../../component/PopUpPage/AccPopUp'
import AccDocModal from '../../component/PopUpPage/AccDocModal'
import UploadDocModal from '../../component/PopUpPage/UploadDocModal'


const ProposedAcc = () => {
    const [openUploadModal, setopenUploadModal] = useState(false)
    const [openDocModal, setopenDocModal] = useState(false)
    const [uploadDocModal, setuploadDocModal] = useState(false)

    const clickHandler = (id, popUp) => {
        popUp && setopenUploadModal(!openUploadModal)
    }
    const docClickHandler = (id) => {
        setopenDocModal(!openDocModal)
    }
    const accPopUpHandler = () => {
        setopenUploadModal(false)
        setuploadDocModal(true)
    }
    const accDocModalHandler = () => { }

    return (<>
        <div className='nonMedListBlock'>
            {uploadData.map(item =>
                <UploadDoc
                    key={item.id}
                    data={item}
                    clickHandler={clickHandler}
                />
            )
            }
            {docData.map(item =>
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
                />
            )
            }
        </div>
        {openUploadModal &&
            <AccPopUp
                heading={'Select Permanent Address Proof'}
                subheading={'Any one document is mandatory'}
                children={uploadDocument}
                clickHandler={accPopUpHandler}
                onClose={() => setopenUploadModal(false)}
            />}
        {
            uploadDocModal && <UploadDocModal
                heading={'Upload Abhishek Arora’s'}
                subheading={'Passport'}
                onClose={() => setuploadDocModal(false)}
            />
        }
        {
            openDocModal && <AccDocModal
                heading={'Financial Document'}
                children={documentsUplaod}
                clickHandler={accDocModalHandler}
                onClose={docClickHandler}
            />
        }
    </>
    )
}

export default ProposedAcc
