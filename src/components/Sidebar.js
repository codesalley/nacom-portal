import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import auth from '../utils/auth';
import Logo from '../assets/logo.png';
import './sidebar.css';

export default function Sidebar({ data }) {
  const [loading, setloading] = useState(true);
  const [pagedata, setPagedata] = useState();
  const url = 'https://nacomtest.herokuapp.com/me';

  async function getMe() {
    const data = await auth(url);
    setPagedata(data);
    setloading(false);
  }

  useEffect(() => {
    getMe();
    return getMe();
  }, []);

  return loading ? (
    <div className='md:hidden'>
      <div className='flex justify-between px-3'>
        <p></p>
        <button onClick={data} className='text-right p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='animate-pulse flex flex-col gap-4'>
        <div className=' bg-gray-300 w-28 h-28  rounded-full mx-auto'> </div>
        <div className='flex flex-col gap-2'>
          <div className='flex w-2/3 mx-auto gap-2'>
            <div className='h-6 bg-gray-300 w-2/3 mx-auto rounded'></div>
            <div className='h-6 bg-gray-300 w-2/3 mx-auto rounded'></div>
          </div>
          <div className='h-2 bg-gray-300 w-2/3 mx-auto rounded'></div>
          <div className='h-4 bg-gray-300 w-2/3 mx-auto rounded'></div>
          <div className='h-2 bg-gray-300 w-2/3 mx-auto rounded'></div>
          <div className='h-2 bg-gray-300 w-2/3 mx-auto rounded'></div>
        </div>
      </div>
    </div>
  ) : (
    <div className='transition md:hidden duration-700 ease-in-out px-2 flex flex-col absolute h-full overflow-hidden gap-1'>
      <div className='flex justify-between px-3'>
        <p></p>
        <button onClick={data} className='text-right p-2 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='profile p-2'>
        <img
          className='profile-img w-2/3 rounded-full mx-auto bg-gray-500'
          alt='test'
          src={Logo}
        />
      </div>
      <div className='name flex justify-center gap-1 flex-wrap subpixel-antialiased'>
        <p className='font-bold name text-sm'>{pagedata.first_name}</p>
        <p className='font-bold name text-sm'>{pagedata.middle_name}</p>
        <p className='font-bold name text-sm'>{pagedata.last_name}</p>
      </div>
      <div className='text-center email font-semibold text-xs text-gray-700'>
        Email: {pagedata.email}
      </div>
      <div className='text-center email font-semibold text-xs text-gray-700'>
        Index Number: {pagedata.index_number}
      </div>
      <div className='flex flex-col items-center divide-y divide-gray-600 gap-2'>
        <Link className='nav' to='/result'>
          Results
        </Link>
        <Link className='nav' to='/messages'>
          Messages
        </Link>
        <Link className='nav' to='/'>
          Anouncements
        </Link>
      </div>
    </div>
  );
}
