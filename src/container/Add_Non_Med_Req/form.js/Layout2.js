import React from 'react'
import Button from '@/component/Button';
import Input from '@/component/Input';

const Layout2 = ({ formName, formData, formChangeHandler }) => {
    const changeHandler = (e, quesData) => {
        // console.log('>>>>',quesData?.ques)
        const { name, value } = e.target;
        // console.log('e', e.target.value)
        formChangeHandler({ name, value, quesData, formName })
    }
    return (
        <>
            {
                formData.map(item => {
                    return (
                        <div className='form-block' key={item.id}>
                            <div className={`${item.declaration!==''?'form-declaration':'hide'}`}>{item.declaration}</div>
                            <div className={`${item.heading!==''?'form-question':'hide'}`}>{item.heading}</div>
                            {
                                item.subQuestions.map(ele => (
                                    <div className='form-quesAns' key={ele.id}>
                                        <div className='form-question'>{ele.question}</div>
                                        {ele.ansBtn ?
                                            <div className='form-inputbtn'>
                                                <div className="radio">
                                                    <Input
                                                        type='radio'
                                                        value={''}
                                                        name='check'
                                                        // checked={''}
                                                        changeHandler={''}
                                                    />
                                                    <label className="radio-label">Yes</label>
                                                </div>
                                                <div className="radio">
                                                    <Input
                                                        type='radio'
                                                        value={''}
                                                        name='check'
                                                        // checked={''}
                                                        changeHandler={''}
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
                                                    name='check'
                                                    // checked={''}
                                                    changeHandler={''}
                                                />
                                                <label className="radio-label">Yes</label>
                                            </div>
                                            <div className="radio">
                                                <Input
                                                    type='radio'
                                                    value={''}
                                                    name='check'
                                                    // checked={''}
                                                    changeHandler={''}
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
