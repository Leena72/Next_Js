import React from 'react'
import Button from '@/component/Button';
import { Field } from 'formik';

const Layout1 = ({ formName, formData, formChangeHandler, formik}) => {
    console.log('formData',formData)
    const changeHandler = (e, quesData,handleChange) => {
        // console.log('>>>>')
        const { name, value } = e.target;
        handleChange(e)
        formChangeHandler({ name, value, quesData, formName, formData })
    }
    return (
        <>
            {
                formData.map(item => {
                    return (
                        <div className='form-block' key={item.id}>
                            <div className={`${item.declaration !== '' ? 'form-declaration' : 'hide'}`}>{item.declaration}</div>
                            <div className={`${item.heading !== '' ? 'form-question' : 'hide'}`}>{item.heading}</div>
                            {/* {console.log('errors>>',errors,touched)} */}
                            {
                                item.subQuestions?.map(ele => (
                                    <div className='form-quesAns' key={ele.id}>
                                        <div className='form-question'>{ele.question}</div>
                                        <div className='form-answer'>
                                            <Field  
                                            as="textarea" 
                                            id={ele.id} 
                                            name={ele.name}
                                            value={ele.answer}
                                            onChange={(e) => changeHandler(e, { ques: ele, type: 'subQues', parent: item },formik.handleChange)} 
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
                                    {item.ansBtn ?
                                        <div className='form-quesbtn'>
                                            <Button
                                                className=''
                                                clickHandler={''}
                                                type='button'
                                                buttonText={'Yes'}
                                            />
                                            <Button
                                                className=''
                                                clickHandler={''}
                                                type='button'
                                                buttonText={'No'}
                                            />
                                        </div>
                                        :
                                        <div className='form-answer'>
                                            <textarea id={item.id} name={item.name}  onChange={(e) =>
                                                changeHandler(e, { ques: item, type: 'ques', parent: null },formik.handleChange)}  />
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
