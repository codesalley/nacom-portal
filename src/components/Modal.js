import React, { useEffect, useState } from 'react';
import auth from '../utils/auth';
import { Redirect } from 'react-router-dom';
import passport from '../assets/passport.png';
import './modal.css';
import Skenton from './skenton';

const ModalData = ({ data }) => {
  const url = 'https://nacomtest.herokuapp.com/me';
  const [pageData, setPageData] = useState();
  const [loading, setLoading] = useState(true);
  console.log(data);

  async function getMe() {
    const data = await auth(url);
    setPageData(data);
    setLoading(false);
  }

  useEffect(() => {
    getMe();
  }, []);

  return loading ? (
    <div className='flex flex-col'>
      <Skenton />
      <Skenton />
      <Skenton />
    </div>
  ) : pageData && !pageData.msg ? (
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
        Anatomy: {data[0].anatomy}{' '}
      </div>
      <div className='text-sm font-light text-gray-500'>
        {' '}
        Another demo: {data[0].another_demo}{' '}
      </div>
      <div className='text-sm font-light text-gray-500'>
        Basic nursing: {data[0].basic_nursing}{' '}
      </div>
      <div className='text-sm font-light text-gray-500'>
        Demo course: {data[0].last_demo_course}{' '}
      </div>
      <div className='text-sm font-light text-gray-500'>
        Midwifery: {data[0].midwifery}{' '}
      </div>
      <div className='text-sm font-light text-gray-500'>
        Statictis: {data[0].statictis}{' '}
      </div>
    </div>
  ) : (
    <Redirect to='/login' />
  );
};

export default ModalData;
