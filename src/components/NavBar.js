import { useState } from 'react';
import Sidebar from './Sidebar';
import { useAuthContext } from '../context/AuthContext';
import { useHistory, NavLink } from 'react-router-dom';

const NavBar = ({ data }) => {
  const [toggledNav, setToggledNav] = useState(false);
  const { student } = useAuthContext();
  const history = useHistory();

  function toggledState() {
    setToggledNav((e) => !e);
  }

  function logout() {
    localStorage.setItem('x-token', JSON.stringify('invalid'));
    return history.push('/login');
  }

  return (
    <div className='flex justify-between bg-white h-20 m-0'>
      <div className='hidden lg:flex self-center gap-2 px-2'>
        <NavLink
          exact
          to='/'
          activeStyle={{
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
          className='font-semibold text-base text-gray-500'
        >
          Announcements
        </NavLink>
        <NavLink
          to='/messages'
          className='font-semibold text-base text-gray-500'
          activeStyle={{
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          Messages
        </NavLink>
        <NavLink
          to='/result'
          className='font-semibold text-base text-gray-500'
          activeStyle={{
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          Results
        </NavLink>
      </div>
      <button onClick={toggledState} className='p-2 lg:hidden'>
        {' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      {!toggledNav ? (
        <div
          className={`hamburger bg-gray-50 h-screen absolute w-1/2 transform -translate-x-full transition duration-700 ease-in-out m-0`}
        ></div>
      ) : (
        <div
          className={`hamburger bg-gray-50 h-screen absolute w-1/2 transform transition duration-700 ease-in-out m-0`}
        >
          <Sidebar data={toggledState} />
        </div>
      )}
      <div className='p-2 font-semibold text-base text-gray-500 self-center lg:hidden'>
        {data}
      </div>
      <button onClick={logout} className='p-2 font-semibold text-gray-600'>
        Logout
      </button>
    </div>
  );
};

export default NavBar;
