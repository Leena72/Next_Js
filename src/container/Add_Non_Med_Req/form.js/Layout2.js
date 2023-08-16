import React from 'react'

const Layout2 = ({ formData }) => {
    return (
        <>
            {
                formData.map(item => {
                    return (
                        <div className='form-block' key={item.id}>
                            <div className='form-declaration'>{item.declaration}</div>
                            <div className='form-quesAns'>
                                <div className='form-question'>{item.question}</div>
                                <div className='form-answer'><textarea id={item.id} /></div>
                            </div>
                            {
                                item.subQuestions.map(ele => (
                                    <div className='form-quesAns' key={ele.id}>
                                        <div className='form-question'>{ele.question}</div>
                                        <div className='form-answer'><textarea id={ele.id} /></div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                })
            }
        </>
    )
}


export default Layout2
