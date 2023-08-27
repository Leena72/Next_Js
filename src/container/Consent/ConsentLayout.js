import React, { useState } from 'react'
import Input from '@/component/Input'
const ConsentLayout = ({ data, title }) => {
    console.log('consentForChangeData', data, title)

    return (
        <div className='form-container'>
            <table className='form-table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Old details</th>
                        <th>Revised Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, id) => (
                        <tr>
                            <td>{item.title}</td>
                            <td>
                                <Input
                                    type='text'
                                    value={''}
                                    name={item.title}
                                    changeHandler={''}
                                />
                            </td>
                            <td>
                                <Input
                                    type='text'
                                    value={''}
                                    name={item.title}
                                    changeHandler={''}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ConsentLayout
