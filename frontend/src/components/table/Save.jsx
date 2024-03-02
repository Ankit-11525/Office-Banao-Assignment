import React, { useState } from 'react';
import { ImCross } from "react-icons/im";

const Save = ({active,setActive}) => {
  const [formValues, setFormValues] = useState({
    client: '',
    dateOfCommencement: '',
    dateOfCompletion: '',
    rfqCode: '',
  });
  const handleInputChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleDoneClick = () => {
    console.log('Form Values:', formValues);
    setActive(false);
  };

  return (
    <div className='w-1/3 h-screen absolute top-0 right-0 bg-white rounded-l-3xl shadow'>
        <div className='p-6'>
          <div className='w-full flex items-center justify-between mb-12'>
            <div className='text-2xl'>
              Workorder
            </div>
            <button className='p-5 text-slate-500'
            onClick={()=>setActive(false)}>
                <ImCross />
            </button>
          </div>
          <div className='flex-col items-start pb-4'>
            <div className='pb-2'>
              Client
            </div>
            <div>
              <select className='w-full px-4 py-2.5 border-2 border-slate-200 rounded-md'
              onChange={(e) => handleInputChange('client', e.target.value)}>
                <option>Client 1</option> 
                <option>Client 2</option>
                <option>Client 3</option>
                <option>Client 4</option>
                <option>Client 5</option>
              </select>
            </div>
          </div>
          <div className='flex-col items-start pb-4'>
            <div className='pb-2'>
              Date of Commencement
            </div>
            <div>
              <input
                  type='date'
                  className='w-full px-4 py-2 border-2 border-slate-200 rounded-md'
                  onChange={(e) => handleInputChange('dateOfCommencement', e.target.value)}
              />
            </div>
          </div>
          <div className='flex-col items-start pb-4'>
            <div className='pb-2'>
              Date of Completion
            </div>
            <div>
              <input
                  type='date'
                  className='w-full px-4 py-2 border-2 border-slate-200 rounded-md'
                  onChange={(e) => handleInputChange('dateOfCompletion', e.target.value)}
              />
            </div>
          </div>
          <div className='flex-col items-start pb-4'>
            <div className='pb-2'>
              RFQ code
            </div>
            <div>
              <input
                  type='text'
                  className='w-full px-4 py-2 border-2 border-slate-200 rounded-md'
                  placeholder='RFQ code'
                  onChange={(e) => handleInputChange('rfqCode', e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 right-0 p-8'>
          <button className='text-lg text-white px-12 py-2 rounded-md bg-teal-300 hover:bg-teal-400'
          onClick={handleDoneClick}
            >
              Done
          </button>
        </div>
    </div>
  )
}

export default Save