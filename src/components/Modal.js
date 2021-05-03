import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';
import passport from '../assets/passport.png';
import './modal.css';

const ModalData = ({ data }) => {
  const url = 'https://nacomtest.herokuapp.com/me';
  const [pageData, setPageData] = useState();
  const [loading, setLoading] = useState(true);

  async function getMe() {
    const data = await auth(url);
    setPageData(data);
    setLoading(false);
  }

  useEffect(() => {
    getMe();
  }, []);

  return loading ? (
    <h2> loading</h2>
  ) : (
    <div className='flex-col flex gap-3 divide-y-2  mx-auto w-2/3 '>
      <h2 className='text-center text-xl font-bold p-5 text-gray-500'>
        {' '}
        Result Slip{' '}
      </h2>
      <div className='profile flex flex-row justify-between content-center items-center overflow-hidden py-5'>
        <img
          className='result-pp'
          alt='passport'
          src={pageData.passport ? pageData.passport : passport}
        />
        <div className='result-info'>
          <p className='text-gray-500 font-semibold text-xs'>
            {pageData.first_name} {pageData.last_name}{' '}
          </p>

          <p className='text-gray-500 font-medium text-xs italic'>
            {pageData.index_number}{' '}
          </p>
        </div>
      </div>
      <div className='text-sm font-light text-gray-500'>
        Anatomy: {data.anatomy}{' '}
      </div>
      <div className='text-sm font-light text-gray-500'>
        {' '}
        Another demo: {data.another_demo}{' '}
      </div>
      <div className='text-sm font-light text-gray-500'>
        Basic nursing: {data.basic_nursing}{' '}
      </div>
      <div className='text-sm font-light text-gray-500'>
        Demo course: {data.last_demo_course}{' '}
      </div>
      <div className='text-sm font-light text-gray-500'>
        Midwifery: {data.midwifery}{' '}
      </div>
      <div className='text-sm font-light text-gray-500'>
        Statictis: {data.statictis}{' '}
      </div>
    </div>
  );
};

export default ModalData;
