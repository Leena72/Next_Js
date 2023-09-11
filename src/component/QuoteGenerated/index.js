import React from 'react'
import { downloadAction } from "../../redux/action/downloadAction";
import { useDispatch } from 'react-redux';
import { convertToIST } from '../../utils/utils'

const QuoteGenerated = ({ quoteDetail, policyDocumentFile }) => {
  const dispatch = useDispatch()
  const downloadHandler = () => {
    let proposalNo = localStorage.getItem("proposalNo")
    // let proposalNo="3108426548"
    let file = policyDocumentFile
    dispatch(downloadAction(proposalNo, file))
  }
  const renderDate = (date) => {
    const istDate = convertToIST(date);
    return istDate
  }
  return (
    <div className='quote text-center'>
      <div className='mb-3 quote-text'>
        {renderDate(quoteDetail?.updatedOn)}
      </div>
      <button onClick={downloadHandler} className='quote-btn'>Download BI</button>
    </div>
  )
}

export default QuoteGenerated