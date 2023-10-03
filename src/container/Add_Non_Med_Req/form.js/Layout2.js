import React from 'react'
import Button from '@/component/Button';
import Input from '@/component/Input';

const Layout2 = ({ formName, formData, formChangeHandler, radioID }) => {

    const changeHandler = (e, quesData, radioInput) => {
        let value = e.target.value
        let name = e.target.name
        if (e.target.checked === true) {
            value = radioInput 
        }
        else {
            value = e.target.value
        }
        formChangeHandler({ name, value, formData, formName })
    }
    return (
        <>
            {
                formData && formData.length>0 && formData.map(item => {
                    return (
                        <div className='form-block' key={item.id}>
                            <div className={`${item.declaration !== '' ? 'form-declaration' : 'hide'}`}>{item.declaration}</div>
                            <div className={`${item.heading !== '' ? 'form-question' : 'hide'}`}>{item.heading}</div>
                            {
                                item.subQuestions.map(ele => (
                                    <div className='form-quesAns' key={ele.id}>
                                        <div className='form-question'>{ele.question}</div>
                                        {ele.ansBtn ?
                                            <div className='form-inputbtn'>
                                                <div className="radio">
                                                    <Input
                                                        type='radio'
                                                        value={'Yes'}
                                                        name={`radio_${item.id}_${ele.id}`}
                                                        // checked={''}
                                                        changeHandler={(e) =>
                                                            changeHandler(e, { ques: item, type: 'ques', parent: null, }, 'Yes')}

                                                    />
                                                    <label className="radio-label">Yes</label>
                                                </div>
                                                <div className="radio">
                                                    <Input
                                                        type='radio'
                                                        value={'No'}
                                                        name={`radio_${item.id}_${ele.id}`}
                                                        // checked={''}
                                                        changeHandler={(e) =>
                                                            changeHandler(e, { ques: item, type: 'ques', parent: null }, 'No')}
                                                    />
                                                    <label className="radio-label">No</label>
                                                </div>
                                            </div>
                                            :
                                            <div className='form-answer'>
                                                <textarea id={ele.id} name={ele.name}
                                                    onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: item })} />
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                            {item.type != 'HEADING' &&
                                <div className='form-quesAns'>
                                    <div className='form-question'>{item.question}</div>
                                    {item.ansBtn ?
                                        <div className='form-inputbtn'>
                                            <div className="radio">
                                                <Input
                                                    type='radio'
                                                    value={''}
                                                    name={`radio_${item.id}`}
                                                    // checked={''}
                                                    changeHandler={(e) =>
                                                        changeHandler(e, { ques: item, type: 'ques', parent: null },'yes')}
                                                />
                                                <label className="radio-label">Yes</label>
                                            </div>
                                            <div className="radio">
                                                <Input
                                                    type='radio'
                                                    value={''}
                                                    name={`radio_${item.id}`}
                                                    // checked={''}
                                                    changeHandler={(e) =>
                                                        changeHandler(e, { ques: item, type: 'ques', parent: null },'no')}
                                                />
                                                <label className="radio-label">No</label>
                                            </div>
                                        </div>
                                        :
                                        <div className='form-answer'>
                                            <textarea id={item.id} name={item.name} onChange={(e) =>
                                                changeHandler(e, { ques: item, type: 'ques', parent: null })} />
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    )
                })
            }
        </>
    )
}


export default Layout2
