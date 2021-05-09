import { NavLink } from 'react-router-dom';
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
    <div className='md:hidden bg-blue-600 px-5 h-screen'>
      <div className='flex justify-between  '>
        <p></p>
        <button onClick={data} className='text-right p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='white'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='animate-pulse flex  flex-col gap-4'>
        <div className='flex rounded-xl '>
          <div className=' bg-gray-300  w-20  h-20  rounded-full mx-auto'>
            {' '}
          </div>
          <div className='w-3/5 gap-3 flex flex-col items-start'>
            <div className='h-6 bg-gray-300 w-2/3 mx-auto rounded'></div>
            <div className='h-6 bg-gray-300 w-2/3 mx-auto rounded'></div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='h-20 bg-gray-300 w-full mx-auto rounded'></div>
          <div className='h-4 bg-gray-300 w-full mx-auto rounded'></div>
          <div className='h-2 bg-gray-300 w-full mx-auto rounded'></div>
          <div className='h-2 bg-gray-300 w-full mx-auto rounded'></div>
          <div className='h-20 absolute  left-0 bottom-10 bg-gray-300 w-full  rounded'></div>
          <div className='h-2 absolute left-0 bottom-5 bg-gray-300 w-full rounded'></div>
        </div>
      </div>
    </div>
  ) : (
    <div className='transition md:hidden px-5  duration-700 w-full bg-blue-600 ease-in-out flex flex-col absolute h-full overflow-hidden gap-5'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl font-semibold'>NACOM</h2>
        <button onClick={data} className='text-right p-2 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            viewBox='0 0 20 20'
            fill='white'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='profile rounded-xl p-2 bg-blue-100 bg-opacity-40 flex items-center gap-2'>
        <img
          className='profile-img w-12 rounded-full  bg-gray-500 border-2 border-gray-200'
          alt='test'
          src={Logo}
        />
        <div className='flex flex-col items-start'>
          <div className='name flex  gap-1 flex-wrap subpixel-antialiased'>
            <p className='font-bold name text-xl'>{pagedata.first_name}</p>
            <p className='font-bold name text-xl'>{pagedata.middle_name}</p>
            <p className='font-bold name text-xl'>{pagedata.last_name}</p>
          </div>
          <div className='text-start email font-semibold text-xs text-gray-100'>
            Email: {pagedata.email}
          </div>
          <div className='text-start email font-semibold text-xs overflow-scroll text-gray-100'>
            Index Number: {pagedata.index_number}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center  gap-2'>
        <NavLink
          className='nav  flex self-start items-center gap-5  text-gray-50 px-3 py-2 rounded-lg w-full'
          exact
          to='/'
          activeStyle={{
            backgroundColor: '#60A5FA',
          }}
          activeClassName='active-link'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            class='bi bi-ui-checks-grid'
            viewBox='0 0 16 16'
          >
            <path d='M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z' />
          </svg>
          <h2> Anouncements</h2>
        </NavLink>
        <NavLink
          className='nav  px-3 py-2 rounded-lg w-full flex self-start items-center gap-5  text-gray-50'
          to='/messages'
          activeClassName='active-link'
          activeStyle={{
            backgroundColor: '#60A5FA',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            class='bi bi-chat-text-fill'
            viewBox='0 0 16 16'
          >
            <path d='M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z' />
          </svg>
          <h2>Messages </h2>
        </NavLink>
        <NavLink
          className='nav  px-3 py-2 rounded-lg w-full flex self-start items-center gap-5  text-gray-50'
          to='/result'
          activeClassName='active-link'
          activeStyle={{
            backgroundColor: '#60A5FA',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            fill='currentColor'
            class='bi bi-file-text-fill'
            viewBox='0 0 16 16'
          >
            <path d='M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z' />
          </svg>{' '}
          <h2 className='text-lg'> Results</h2>
        </NavLink>
      </div>
      <div className='absolute bottom-2'>
        {' '}
        <p> Contact Adminstration</p> <small>Example@email.com</small>
      </div>
    </div>
  );
}
