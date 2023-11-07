import React from 'react'
import Button from '@/component/Button';
import Input from '@/component/Input';
import AddImg from '../../../Assets/images/add.png'
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
    const addMoreHandler = (e, item) => {
        console.log(item)
        const data = { ...item };
        const addMoreQuestions = data?.subQuestions.map((ele, i) => {
            ele.answer = ''
            ele.id = ele.id + 1;
            return ele;
        })
        console.log(data.subQuestions.concat(addMoreQuestions))
    }
    const deleteMoreHandler = (e, item, ele) => {
        console.log(item, ele)
    }
    return (
        <>
            {/* form[0] */}
            {formData && formData[0] &&
                <div className='form-block'>
                    <div className={`form-declaration`}>{formData[0].declaration}</div>
                    <div className={'form-question'}>{formData[0].question}</div>
                    <div className='form-inputbtn'>
                        <div className="radio">
                            <Input
                                type='radio'
                                value={'Yes'}
                                name={formData[0].name}
                                checked={formData[0].answer === "Yes"}
                                changeHandler={(e) =>
                                    changeHandler(e, { ques: formData[0], type: 'ques', parent: null, }, 'Yes')}
                            />
                            <label className="radio-label">Yes</label>
                        </div>
                        <div className="radio">
                            <Input
                                type='radio'
                                value={'No'}
                                name={formData[0].name}
                                checked={formData[0].answer === "No"}
                                changeHandler={(e) =>
                                    changeHandler(e, { ques: formData[0], type: 'ques', parent: null }, 'No')}
                            />
                            <label className="radio-label">No</label>
                        </div>
                    </div>
                </div>
            }
            {/* reflexive */}
            {
                formData && formData[0] && formData[0].answer === "Yes" &&
                <>
                    {/* form[1] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[1].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[1].id} name={formData[1].name} value={formData[1].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[1], type: 'ques', parent: formData[1] })} />
                        </div>
                    </div>
                    {/* form[2] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[2].question}</div>
                        <div className='form-inputbtn'>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'Yes'}
                                    name={formData[2].name}
                                    checked={formData[2].answer === "Yes"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[2], type: 'ques', parent: null, }, 'Yes')}
                                />
                                <label className="radio-label">Type I</label>
                            </div>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'No'}
                                    name={formData[2].name}
                                    checked={formData[2].answer === "No"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[2], type: 'ques', parent: null }, 'No')}
                                />
                                <label className="radio-label">Type II</label>
                            </div>
                        </div>
                    </div>
                    {/* form[3] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[3].heading}</div>
                        {
                            formData[3].subQuestions.map(ele => {
                                return (
                                    <div>
                                        <div className='form-quesAns' key={ele.id}>{ele.question}
                                        </div>
                                        <div className='form-answer'>
                                            <textarea id={ele.id} name={ele.name} value={ele.answer}
                                                onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: formData[3] })} />
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                        <div className='add-more-container'>
                            <Button
                                className='add-more-btn'
                                clickHandler={(e) => addMoreHandler(e, formData[3])}
                                type='button'
                                buttonText={'Add More'}
                            />
                        </div>
                    </div>
                    {/* form[4] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[4].heading}</div>
                        {
                            formData[4].subQuestions.map(ele => {
                                return (
                                    <div>
                                        <div className='form-quesAns' key={ele.id}>{ele.question}
                                        </div>
                                        <div className='form-answer'>
                                            <textarea id={ele.id} name={ele.name} value={ele.answer}
                                                onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: formData[4] })} />
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                        <div className='add-more-container'>
                            <Button
                                className='add-more-btn'
                                clickHandler={(e) => addMoreHandler(e, formData[4])}
                                type='button'
                                buttonText={'Add More'}
                            />
                        </div>
                    </div>
                    {/* form[5] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[5].question}</div>
                        <div className='form-inputbtn'>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'Yes'}
                                    name={formData[5].name}
                                    checked={formData[5].answer === "Yes"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[5], type: 'ques', parent: null, }, 'Yes')}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'No'}
                                    name={formData[5].name}
                                    checked={formData[5].answer === "No"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[5], type: 'ques', parent: null }, 'No')}
                                />
                                <label className="radio-label">No</label>
                            </div>
                        </div>
                        {
                            formData[5].answer === "Yes" &&
                            <div>
                                <div className={`form-declaration`}>{formData[5].refQues}</div>
                                <div className='form-answer'>
                                    <textarea id={formData[5].id} name={formData[5].name} value={formData[5].answer}
                                        onChange={(e) => changeHandler(e, { ques: formData[5], type: 'subQues', parent: formData[5] })} />
                                </div>
                            </div>
                        }
                    </div>

                    {/* _____ */}
                    {/* form[6] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[6].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[6].id} name={formData[6].name} value={formData[6].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[6], type: 'ques', parent: formData[6] })} />
                        </div>
                    </div>
                    {/* form[7] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[7].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[7].id} name={formData[7].name} value={formData[7].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[7], type: 'ques', parent: formData[7] })} />
                        </div>
                    </div>

                    {/* form[8] */}
                    <div className='form-block'>

                        <div className={`form-declaration`}>{formData[8].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[8].id} name={formData[8].name} value={formData[5].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[8], type: 'ques', parent: formData[8] })} />
                        </div>
                    </div>
                    {/* form[9] */}
                    <div className='form-block'>

                        <div className={`form-declaration`}>{formData[9].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[9].id} name={formData[9].name} value={formData[9].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[9], type: 'ques', parent: formData[9] })} />
                        </div>
                    </div>
                    {/* form[10] */}
                    <div className='form-block'>

                        <div className={`form-declaration`}>{formData[10].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[10].id} name={formData[10].name} value={formData[10].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[10], type: 'ques', parent: formData[10] })} />
                        </div>
                    </div>

                    {/* form[11] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[11].heading}</div>
                        {
                            formData[11].subQuestions.map(ele => (
                                <div className='form-quesAns' key={ele.id}>
                                    <div className='form-question'>{ele.question}</div>
                                    <div className='form-inputbtn'>
                                        <div className="radio">
                                            <Input
                                                type='radio'
                                                value={'Yes'}
                                                name={ele.name}
                                                checked={ele.answer === "Yes"}
                                                changeHandler={(e) =>
                                                    changeHandler(e, { ques: ele, type: 'ques', parent: null, }, 'Yes')}
                                            />
                                            <label className="radio-label">Yes</label>
                                        </div>
                                        <div className="radio">
                                            <Input
                                                type='radio'
                                                value={'No'}
                                                name={ele.name}
                                                checked={ele.answer === "No"}
                                                changeHandler={(e) =>
                                                    changeHandler(e, { ques: ele, type: 'ques', parent: null }, 'No')}
                                            />
                                            <label className="radio-label">No</label>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* form[12] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[12].question}</div>
                        <div className='form-inputbtn'>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'Yes'}
                                    name={formData[12].name}
                                    checked={formData[12].answer === "Yes"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[12], type: 'ques', parent: null, }, 'Yes')}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'No'}
                                    name={formData[5].name}
                                    checked={formData[5].answer === "No"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[12], type: 'ques', parent: null }, 'No')}
                                />
                                <label className="radio-label">No</label>
                            </div>
                        </div>
                        {
                            formData[12].answer === "Yes" &&
                            <div className='form-block'>
                                <div className={`form-declaration`}>{formData[12].refQues}</div>
                                <div className='form-answer'>
                                    <textarea id={formData[12].id} name={formData[12].name} value={formData[12].answer}
                                        onChange={(e) => changeHandler(e, { ques: formData[12], type: 'subQues', parent: formData[12] })} />
                                </div>
                            </div>
                        }
                    </div>
                    {/* form[13] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[13].question}</div>
                        <div className='form-inputbtn'>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'Yes'}
                                    name={formData[13].name}
                                    checked={formData[13].answer === "Yes"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[13], type: 'ques', parent: null, }, 'Yes')}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'No'}
                                    name={formData[13].name}
                                    checked={formData[13].answer === "No"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[13], type: 'ques', parent: null }, 'No')}
                                />
                                <label className="radio-label">No</label>
                            </div>
                        </div>
                        {
                            formData[13].answer === "Yes" &&
                            <div >
                                <div className={`form-declaration`}>{formData[13].refQues}</div>

                                {
                                    formData[13].subQuestions.map(ele => {
                                        return (
                                            <div>
                                                <div className='form-quesAns' key={ele.id}>{ele.question}
                                                </div>
                                                <div className='form-answer'>
                                                    <textarea id={ele.id} name={ele.name} value={ele.answer}
                                                        onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: formData[13] })} />
                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                }
                                <div className='add-more-container'>
                                    <Button
                                        className='add-more-btn'
                                        clickHandler={(e) => addMoreHandler(e, formData[13])}
                                        type='button'
                                        buttonText={'Add More'}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                    {/* form[14] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[14].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[14].id} name={formData[14].name} value={formData[14].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[14], type: 'ques', parent: formData[14] })} />
                        </div>
                    </div>
                </>
            }
        </>
    )
}


export default Layout2
