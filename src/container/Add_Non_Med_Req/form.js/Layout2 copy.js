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
            {
                formData && formData.length > 0 && formData.map(item => {
                    return (
                        <div className='form-block' key={item.id}>
                            <div className={`${item.declaration !== '' ? 'form-declaration' : 'hide'}`}>{item.declaration}</div>
                            <div className={`${item.heading !== '' ? 'form-question' : 'hide'}`}>{item.heading}</div>
                            {item.addMore 
                            && 
                            // ele.id > 1 &&
                                <div className='add-more-container'>
                                    <Button
                                        className='add-more-btn'
                                        clickHandler={(e) => deleteMoreHandler(e, item, ele)}
                                        type='button'
                                        buttonText={'delete'}
                                    // buttonIcon={AddImg}
                                    />
                                </div>
                            }
                            {
                                item.subQuestions.map(ele => (
                                    <div className='form-quesAns' key={ele.id}>
                                        {((ele.ansBtn || ele.ansBtn == "true") && ele.ansBtn != "false")}
                                        <div className='form-question'>{ele.question}</div>

                                        {((ele.ansBtn || ele.ansBtn == "true") && ele.ansBtn != "false") ?
                                            <div className='form-inputbtn'>
                                                <div className="radio">
                                                    <Input
                                                        type='radio'
                                                        value={'Yes'}
                                                        name={ele.name}
                                                        checked={ele.answer === "Yes"}
                                                        changeHandler={(e) =>
                                                            changeHandler(e, { ques: item, type: 'ques', parent: null, }, 'Yes')}

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
                                                            changeHandler(e, { ques: item, type: 'ques', parent: null }, 'No')}
                                                    />
                                                    <label className="radio-label">No</label>
                                                </div>
                                            </div>
                                            :
                                            <div className='form-answer'>
                                                <textarea id={ele.id} name={ele.name} value={ele.answer}
                                                    onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: item })} />
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                            {item.addMore &&
                                <div className='add-more-container'>
                                    <Button
                                        className='add-more-btn'
                                        clickHandler={(e) => addMoreHandler(e, item)}
                                        type='button'
                                        buttonText={'Add More'}
                                    // buttonIcon={AddImg}
                                    />
                                </div>
                            }
                            {item.type != 'HEADING' &&
                                <div className='form-quesAns'>
                                    <div className='form-question'>{item.question}</div>
                                    {((item.ansBtn || item.ansBtn == "true") && item.ansBtn != "false") ?
                                        <div className='form-inputbtn'>
                                            <div className="radio">
                                                <Input
                                                    type='radio'
                                                    value={'Yes'}
                                                    name={item.name}
                                                    checked={item.answer === "Yes"}
                                                    changeHandler={(e) =>
                                                        changeHandler(e, { ques: item, type: 'ques', parent: null }, 'Yes')}
                                                />
                                                <label className="radio-label">Yes</label>
                                            </div>
                                            <div className="radio">
                                                <Input
                                                    type='radio'
                                                    value={'No'}
                                                    name={item.name}
                                                    checked={item.answer === "No"}
                                                    changeHandler={(e) =>
                                                        changeHandler(e, { ques: item, type: 'ques', parent: null }, 'No')}
                                                />
                                                <label className="radio-label">No</label>
                                            </div>
                                        </div>
                                        :
                                        <div className='form-answer'>
                                            <textarea id={item.id} name={item.name} value={item.answer} onChange={(e) =>
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
