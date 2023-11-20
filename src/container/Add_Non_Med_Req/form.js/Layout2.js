import React from 'react'
import Button from '@/component/Button';
import Input from '@/component/Input';
import AddImg from '../../../Assets/images/add.png'
const Layout2 = ({ formName, formData, formChangeHandler, radioID }) => {

    const changeHandler = (e, quesData, radioInput, referenceAns) => {
        let value = e.target.value
        let name = e.target.name
        if (e.target.checked === true) {
            value = radioInput
        }
        else {
            value = e.target.value
        }
        formChangeHandler({ name, value, formData, formName, referenceAns })
    }
    const addMoreHandler = (e, item) => {
        // console.log(item)
        const data = { ...item };
        const addMoreQuestions = data?.subQuestions.map((ele, i) => {
            ele.answer = ''
            ele.id = ele.id + 1;
            return ele;
        })
        // console.log(data.subQuestions.concat(addMoreQuestions))
    }
    const deleteMoreHandler = (e, item, ele) => {
        // console.log(item, ele)
    }
    console.log('formdata>>>', formData)
    const forMultipleYes = formData && formData[9].subQuestions.filter(ele => ele.answer === 'Yes')
    // console.log('forMu>>', forMultipleYes, forMultipleYes.length)
    return (
        <>
            {/* field[1] */}
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
                    {
                        formData && formData[0] && formData[0].answer === "Yes" &&
                        <>
                            {/* form[0] subquestion 1 */}
                            <div className='form-block'>
                                <div className={`form-declaration`}>{formData[0].subQuestions[0].question}</div>
                                <div className='form-answer'>
                                    <textarea id={formData[0].subQuestions[0].id} name={formData[0].subQuestions[0].name} value={formData[0].subQuestions[0].answer}
                                        onChange={(e) => changeHandler(e, { ques: formData[0].subQuestions[0], type: 'ques', parent: formData[0] })} />
                                </div>
                            </div>
                            {/* form[0] subqusetion 2 */}
                            <div className='form-block'>
                                <div className={`form-declaration`}>{formData[0].subQuestions[1].question}</div>
                                <div className='form-inputbtn'>
                                    <div className="radio">
                                        <Input
                                            type='radio'
                                            value={'Yes'}
                                            name={formData[0].subQuestions[1].name}
                                            checked={formData[0].subQuestions[1].answer === "Yes"}
                                            changeHandler={(e) =>
                                                changeHandler(e, { ques: formData[0].subQuestions[1], type: 'ques', parent: formData[0], }, 'Yes')}
                                        />
                                        <label className="radio-label">Type I</label>
                                    </div>
                                    <div className="radio">
                                        <Input
                                            type='radio'
                                            value={'No'}
                                            name={formData[0].subQuestions[1].name}
                                            checked={formData[0].subQuestions[1].answer === "No"}
                                            changeHandler={(e) =>
                                                changeHandler(e, { ques: formData[0].subQuestions[1], type: 'ques', parent: formData[0] }, 'No')}
                                        />
                                        <label className="radio-label">Type II</label>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            }
            {/* reflexive */}
            {
                formData && formData[0] && formData[0].answer === "Yes" &&
                <>
                    {/*field[2]*/}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[1].heading}</div>
                        {
                            formData[1].subQuestions.map((ele) => {
                                return (
                                    <div key={ele.id}>
                                        <div className='form-quesAns'>{ele.question}
                                        </div>
                                        <div className='form-answer'>
                                            <textarea id={ele.id} name={ele.name} value={ele.answer}
                                                onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: formData[1] })} />
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                        <div className='add-more-container'>
                            <Button
                                className='add-more-btn'
                                clickHandler={(e) => addMoreHandler(e, formData[1])}
                                type='button'
                                buttonText={'Add More'}
                            />
                        </div>
                    </div>
                    {/* field[3] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[2].heading}</div>
                        {
                            formData[2].subQuestions.map(ele => {
                                return (
                                    <div key={ele.id}>
                                        <div className='form-quesAns' >{ele.question}
                                        </div>
                                        <div className='form-answer'>
                                            <textarea id={ele.id} name={ele.name} value={ele.answer}
                                                onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: formData[2] })} />
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                        <div className='add-more-container'>
                            <Button
                                className='add-more-btn'
                                clickHandler={(e) => addMoreHandler(e, formData[2])}
                                type='button'
                                buttonText={'Add More'}
                            />
                        </div>
                    </div>
                    {/* field[4] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[3].question}</div>
                        <div className='form-inputbtn'>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'Yes'}
                                    name={formData[3].name}
                                    checked={formData[3].answer === "Yes"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[3], type: 'ques', parent: null, }, 'Yes')}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'No'}
                                    name={formData[3].name}
                                    checked={formData[3].answer === "No"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[3], type: 'ques', parent: null }, 'No')}
                                />
                                <label className="radio-label">No</label>
                            </div>
                        </div>
                        {
                            formData[3].answer === "Yes" &&
                            <div>
                                <div className={`form-declaration`}>{formData[3].subQuestions[0].question}</div>
                                <div className='form-answer'>
                                    <textarea id={formData[3].subQuestions[0].id} name={formData[3].subQuestions[0].name} value={formData[3].subQuestions[0].answer}
                                        onChange={(e) => changeHandler(
                                            e,
                                            { ques: formData[3].subQuestions[0], type: 'ques', parent: formData[3] },
                                            formData[3].answer,
                                            true //if reference ans is yes
                                        )} />
                                </div>
                            </div>
                        }
                    </div>
                    {/* field[5] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[4].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[4].id} name={formData[4].name} value={formData[4].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[4], type: 'ques', parent: null })} />
                        </div>
                    </div>
                    {/* field[6] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[5].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[5].id} name={formData[5].name} value={formData[5].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[5], type: 'ques', parent: null })} />
                        </div>
                    </div>
                    {/* field[7] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[6].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[6].id} name={formData[6].name} value={formData[6].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[6], type: 'ques', parent: null })} />
                        </div>
                    </div>
                    {/* field[8] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[7].heading}</div>
                        {
                            formData[7].subQuestions.map(ele => (
                                <div key={ele.id}>
                                    <div className={`form-declaration`}>{ele.question}</div>
                                    <div className='form-answer'>
                                        <textarea id={ele.id} name={ele.name} value={ele.answer}
                                            onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: formData[7] })} />
                                    </div>
                                </div>
                            ))
                        }
                    </div >
                    {/* field[9] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[8].heading}</div>
                        {
                            formData[8].subQuestions.map(ele => (
                                <div key={ele.id}>
                                    <div className={`form-declaration`}>{ele.question}</div>
                                    <div className='form-answer'>
                                        <textarea id={ele.id} name={ele.name} value={ele.answer}
                                            onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: formData[8] })} />
                                    </div>
                                </div>
                            ))
                        }
                    </div >
                    {/* field[10] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[9].heading}</div>
                        {
                            formData[9].subQuestions.map(ele => (
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
                                                    changeHandler(e, { ques: ele, type: 'subQues', parent: formData[9], }, 'Yes')}
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
                                                    changeHandler(e, { ques: ele, type: 'subQues', parent: formData[9] }, 'No')}
                                            />
                                            <label className="radio-label">No</label>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            forMultipleYes && forMultipleYes.length > 0 &&
                            <div>
                                <div className={`form-declaration`}>{formData[9].refQues}</div>
                                <div className='form-answer'>
                                    <textarea id={formData[9].id} name={formData[9].name} value={formData[9].answer}
                                        onChange={(e) => changeHandler(
                                            e,
                                            { ques: formData[9], type: 'ques', parent: null },
                                            forMultipleYes && forMultipleYes.length > 0 && 'Yes',
                                            false
                                        )} />
                                </div>
                            </div>
                        }
                    </div>
                    {/* field[11] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[10].question}</div>
                        <div className='form-inputbtn'>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'Yes'}
                                    name={formData[10].name}
                                    checked={formData[10].answer === "Yes"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[10], type: 'ques', parent: null, }, 'Yes')}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'No'}
                                    name={formData[10].name}
                                    checked={formData[10].answer === "No"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[10], type: 'ques', parent: null }, 'No')}
                                />
                                <label className="radio-label">No</label>
                            </div>
                        </div>
                        {
                            formData[10].answer === "Yes" &&
                            <div>
                                <div className={`form-declaration`}>{formData[10].subQuestions[0].question}</div>
                                <div className='form-answer'>
                                    <textarea id={formData[10].subQuestions[0].id} name={formData[10].subQuestions[0].name} value={formData[10].subQuestions[0].answer}
                                        onChange={(e) => changeHandler(
                                            e,
                                            { ques: formData[10].subQuestions[0], type: 'ques', parent: formData[10] },
                                            formData[10].answer,
                                            true //if reference ans is yes
                                        )} />
                                </div>
                            </div>
                        }
                    </div>
                    {/* field[12] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[11].question}</div>
                        <div className='form-inputbtn'>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'Yes'}
                                    name={formData[11].name}
                                    checked={formData[11].answer === "Yes"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[11], type: 'ques', parent: null, }, 'Yes')}
                                />
                                <label className="radio-label">Yes</label>
                            </div>
                            <div className="radio">
                                <Input
                                    type='radio'
                                    value={'No'}
                                    name={formData[11].name}
                                    checked={formData[11].answer === "No"}
                                    changeHandler={(e) =>
                                        changeHandler(e, { ques: formData[11], type: 'ques', parent: null }, 'No')}
                                />
                                <label className="radio-label">No</label>
                            </div>
                        </div>
                        {
                            formData[11].answer === "Yes" &&
                            <div >
                                <div className={`form-declaration`}>{formData[11].heading}</div>
                                {
                                    formData[11].subQuestions.map(ele => {
                                        return (
                                            <div key={ele.id}>
                                                <div className='form-quesAns' >{ele.question}
                                                </div>
                                                <div className='form-answer'>
                                                    <textarea id={ele.id} name={ele.name} value={ele.answer}
                                                        onChange={(e) => changeHandler(
                                                            e,
                                                            { ques: ele, type: 'subQues', parent: formData[11] },
                                                            formData[11].answer === "Yes",
                                                            false
                                                        )} />
                                                </div>
                                            </div>
                                        )
                                    }
                                    )
                                }
                                <div className='add-more-container'>
                                    <Button
                                        className='add-more-btn'
                                        clickHandler={(e) => addMoreHandler(e, formData[11])}
                                        type='button'
                                        buttonText={'Add More'}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                    {/* field[13] */}
                    <div className='form-block'>
                        <div className={`form-declaration`}>{formData[12].question}</div>
                        <div className='form-answer'>
                            <textarea id={formData[12].id} name={formData[12].name} value={formData[12].answer}
                                onChange={(e) => changeHandler(e, { ques: formData[12], type: 'ques', parent: formData[12] })} />
                        </div>
                    </div>
                </>
            }
        </>
    )
}


export default Layout2
