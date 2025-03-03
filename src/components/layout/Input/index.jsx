import React from 'react'
import {Field, ErrorMessage } from "formik"
import { IoIosAlert } from "react-icons/io";

export default function Input({label, type, name, as='input'}) {
  return (
    <div className=''>
        <label htmlFor={name} className='font-bold text-lg'>{label}:</label>
        <Field type={type} id={name} name={name} as={as} autoComplete='off'
         className={`block w-full bg-transparent border-b-2 border-black outline-none
                     ${as == 'textarea' ? 'border-2 rounded-xl min-h-32 p-1' : ''}`}
        />
        <div className='flex justify-center items-center text-sm leading-none text-red-500 min-h-4 mt-0.5'>
            <ErrorMessage name={name}>
                {(msg) => (
                    <>
                    <IoIosAlert/>{msg}
                    </>
                )}
            </ErrorMessage>
        </div>
    </div>
  )
}
