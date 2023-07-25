import React from 'react'
import { questions } from '../../data'
import Input from '@/component/Input'
const AddNonMedForm = () => {
  return (
    <div>
      <div>
        I hereby agree that the statements below shall form part of my proposal for insurance and I declare that stuch statements together with the said proposal and declaration shall be the basis of the contract between Bharti AXA Life Insurance Company Limited and myself.
      </div>
      {/* {
        questions.map(item => (
          <>
            <div>
              {item.question}
            </div>
            <div>
              <Input
                type={item.type}
              />
            </div>
          </>
        ))
      } */}
    </div>
  )
}

export default AddNonMedForm
