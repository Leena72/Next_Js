import React, { useState } from 'react'
import Image from 'next/image';
import questionMark from "../../Assets/images/qstn.png"
import Input from '@/component/Input'


const MedicalRequirement = ({ accDetails }) => {
    const [openAccordion, setOpenAccordion] = useState(null)
    const onlineBtnandler = () => { }
    const list = [1, 2, 3]
    return (
        <ul className='card-body med-body'>
            {list.map(() => {
                return (
                    <li className='rvsd_dwnld_outr med-card' key={'1'}>
                        <div className="rvsd_dwnld" >TPA Status 
                            <span>  </span><span>-</span>
                        </div>
                        <div className="rvsd_dwnld" >Click here
                            <span>    </span><span className="lnktxtbx" onClick={() => downloadHandler('REVISED_OFFER_DOC')}>Manual Retrigger</span>
                        </div>

                        <div className='mb-2 rvsd-conatiner'>
                            <div className='rvsd_blk'>
                                <div className='label'>Medical Test Category</div>
                            </div>
                            <div className='rvsd_blk-tooltip'>
                                <span className="tooltipbx"><Image src={questionMark} width="14" height="14" alt="" />
                                    <span className="tooltiptext">Check here Medical Test Category</span>
                                </span>
                            </div>
                        </div>

                    </li>
                )
            })

            }
        </ul>
    )
}

export default MedicalRequirement
