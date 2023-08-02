import React from 'react'
import { UploadDoc, Document, ViewDoc } from '../../component/Doc-Upload-Acc'
import { uploadData, docData, viewData } from '../../data'
const ProposedAcc = () => {
    return (
        <div className='nonMedListBlock'>
            {uploadData.map(item =>
                <UploadDoc
                    data={item}
                />
            )
            }
            {docData.map(item =>
                <Document
                    data={item}
                />
            )
            }
            {viewData.map(item =>
                <ViewDoc
                    data={item}
                />
            )
            }
        </div>
    )
}

export default ProposedAcc
