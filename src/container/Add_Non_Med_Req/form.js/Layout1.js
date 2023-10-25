import React from 'react'
import Button from '@/component/Button';
import { Field } from 'formik';

const Layout1 = ({ formName, formData, formChangeHandler, formik }) => {
    // console.log('formData',formData)
    const changeHandler = (e, quesData, handleChange) => {
        // console.log('>>>>')
        const { name, value } = e.target;
        formChangeHandler({ name, value, formData })
    }
    return (
        <>
            {
                formData && formData.length > 0 && formData.map((item, index) => {
                    return (
                        <div className='form-block' key={index}>
                            <div className={`${item.declaration !== '' ? 'form-declaration' : 'hide'}`}>{item.declaration}</div>
                            <div className={`${item.heading !== '' ? 'form-question' : 'hide'}`}>{item.heading}</div>
                            {/* {console.log('errors>>',errors,touched)} */}
                            {
                                item.subQuestions?.map((ele, idx) => (
                                    <div className='form-quesAns' key={idx}>
                                        <div className='form-question'>{ele.question}</div>
                                        <div className='form-answer'>
                                            {/* {ele.answer} */}
                                            <Field
                                                as="textarea"
                                                id={ele.id}
                                                name={ele.name}
                                                value={ele.answer}
                                                onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: item }, formik.handleChange)}
                                            />
                                            {formik.errors?.[ele.name] && formik.touched?.[ele.name] ? (
                                                <div className='error-msg'>{formik.errors?.[ele.name]}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                ))
                            }
                            {item.type != 'HEADING' &&
                                <div className='form-quesAns'>
                                    <div className='form-question'>{item.question}</div>
                                    {/* {item.answer} */}
                                    {item.ansBtn && item.ansBtn != "false" ?
                                        <>
                                            <div className='form-quesbtn'>
                                                <Button
                                                    className={item.answer === 'Yes' && 'activebutton'}
                                                    type='button'
                                                    buttonText={'Yes'}
                                                    clickHandler={(e) => changeHandler(e)}
                                                    name={item.name}
                                                />
                                                <Button
                                                    className={item.answer === 'No' && 'activebutton'}
                                                    type='button'
                                                    buttonText={'No'}
                                                    clickHandler={(e) => changeHandler(e)}
                                                    name={item.name}
                                                />
                                            </div>
                                            {
                                                item.answer === 'Yes' && item.showTextbox &&
                                                <>
                                                    {/* <div className='form-question'>{item.question}</div> */}
                                                    <div className='form-answer'>
                                                    <textarea
                                                        id={item.id}
                                                        name={item.name}
                                                        value={item.answer}
                                                        onChange={(e) =>
                                                            changeHandler(e, { ques: item, type: 'ques', parent: null }, formik.handleChange)}
                                                    />
                                                    </div>
                                                </>
                                            }
                                        </>
                                        :
                                        <div className='form-answer'>
                                            {/* {item.answer} */}
                                            <textarea
                                                id={item.id}
                                                name={item.name}
                                                value={item.answer}
                                                onChange={(e) =>
                                                    changeHandler(e, { ques: item, type: 'ques', parent: null }, formik.handleChange)}
                                            />
                                            {formik.errors?.[item.name] && formik.touched?.[item.name] ? (
                                                <div className='error-msg'>{formik.errors?.[item.name]}</div>
                                            ) : null}
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

export default Layout1
