import React from 'react'
import { downloadAction } from "../../redux/action/downloadAction";
import { useDispatch } from 'react-redux';
import { convertToIST } from '../../utils/utils'

const QuoteGenerated = (props) => {
  const dispatch = useDispatch()
  const downloadHandler = () => {
    let file = props.policyDocumentFile
    dispatch(downloadAction(props.proposalNo, file))
  }
  const renderDate = (date) => {
    const istDate = convertToIST(date);
    return istDate
  }
  return (
    <div className='quote text-center'>
      <div className='mb-3 quote-text'>
        {renderDate(props.quoteDetail?.updatedOn)}
      </div>
      <button onClick={downloadHandler} className='quote-btn'>Download BI</button>
    </div>
  )
}

export default QuoteGenerated