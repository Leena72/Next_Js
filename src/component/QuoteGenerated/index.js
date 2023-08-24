import React from 'react'
import { downloadAction } from "../../redux/action/downloadAction";
import { useDispatch } from 'react-redux';
import {dateFormat} from '../../utils/utils'
const QuoteGenerated = ({ quoteDetail,policyDocumentFile }) => {
  const dispatch = useDispatch()
  const downloadHandler = () => {
    let proposalNo = localStorage.getItem("proposalNo")
    let file = policyDocumentFile
    dispatch(downloadAction(proposalNo, file))
  }
  return (
          <div className='quote text-center'>
            <div className='mb-3 quote-text'>
              {/* 26 JUNE, 2023 | 09:06 PM */}
              {dateFormat(quoteDetail?.createdOn)}
            </div>
            <button onClick={downloadHandler} className='quote-btn'>Download BI</button>
          </div>
  )
}

export default QuoteGenerated