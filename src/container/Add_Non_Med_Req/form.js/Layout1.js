import React from 'react'

const Layout1 = ({formName, formData, formChangeHandler }) => {
    const changeHandler = (e, quesData) => {
        const { name, value } = e.target;
        console.log('e', e.target.value)
        formChangeHandler({name, value, quesData,formName})
    }
    return (
        <>
            {
                formData.map(item => {
                    return (
                        <div className='form-block' key={item.id}>
                            <div className='form-declaration'>{item.declaration}</div>
                            <div className='form-question'>{item.heading}</div>
                            {
                                item.subQuestions.map(ele => (
                                    <div className='form-quesAns' key={ele.id}>
                                        <div className='form-question'>{ele.question}</div>
                                        <div className='form-answer'>
                                            <textarea id={ele.id} name={ele.name} 
                                            onChange={(e) => changeHandler(e, {ques:ele,type:'subQues',parent:item})} />
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='form-quesAns'>
                                <div className='form-question'>{item.question}</div>
                                <div className='form-answer'>
                                <textarea id={item.id} name={item.name} onChange={(e) => 
                                    changeHandler(e, {ques:item, type:'ques',parent:null})} />

                                    </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Layout1
