import React from 'react'
import { UploadDoc, Document, ViewDoc } from '../../component/Doc-Upload-Acc'
import { uploadData, docData, viewData } from '../../data'
const ProposedAcc = () => {
    return (
        <div className='nonMedListBlock'>
            {uploadData.map(item =>
                <UploadDoc
                    key={item.id}
                    data={item}
                />
            )
            }
            {docData.map(item =>
                <Document
                    key={item.id}
                    data={item}
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
    )
}

export default ProposedAcc
