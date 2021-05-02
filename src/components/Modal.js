import React, { useEffect, useRef } from 'react';
const ModalData = ({ data }) => {
  useEffect(() => {
    console.log('dhow');
  }, []);

  return (
    <div className='flex-col flex gap-3 divide-y-2  mx-auto w-2/3 '>
      <div className='text-2xl font-bold text-gray-500'>
        Anatomy: {data.anatomy}{' '}
      </div>
      <div className='text-2xl font-bold text-gray-500'>
        {' '}
        Another demo: {data.another_demo}{' '}
      </div>
      <div className='text-2xl font-bold text-gray-500'>
        Basic nursing: {data.basic_nursing}{' '}
      </div>
      <div className='text-2xl font-bold text-gray-500'>
        Demo course: {data.last_demo_course}{' '}
      </div>
      <div className='text-2xl font-bold text-gray-500'>
        Midwifery: {data.midwifery}{' '}
      </div>
      <div className='text-2xl font-bold text-gray-500'>
        Statictis: {data.statictis}{' '}
      </div>
    </div>
  );
};

export default ModalData;
