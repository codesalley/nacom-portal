import { useState } from 'react';
import Sidebar from './Sidebar';
import { useHistory, NavLink } from 'react-router-dom';
import './NavBar.css';
import { useAuthContext } from '../context/AuthContext';

const NavBar = ({ data }) => {
  const [toggledNav, setToggledNav] = useState(false);
  const history = useHistory();
  const { student } = useAuthContext();
  console.log(student);
  function toggledState() {
    setToggledNav((e) => !e);
  }

  function logout() {
    localStorage.setItem('x-token', JSON.stringify('invalid'));
    return history.push('/login');
  }

  return (
    <div className='flex  justify-between bg-blue-600 text-white transform duration-700 ease-in-out nav-height m-0 md:px-20 '>
      <div className='hidden md:flex text-white self-center gap-2 '>
        <NavLink
          exact
          to='/'
          activeStyle={{
            backgroundColor: '#60A5FA',
          }}
          className='font-semibold transform transition hover:bg-blue-400 duration-700 ease-in-out text-base text-gray-600 md:text-white rounded  px-3 py-2'
        >
          Announcements
        </NavLink>
        <NavLink
          to='/messages'
          className='font-semibold text-base transform transition hover:bg-blue-400 duration-700 ease-in-out text-gray-600 md:text-white  rounded  px-3 py-2'
          activeStyle={{
            backgroundColor: '#60A5FA',
          }}
        >
          Messages
        </NavLink>
        <NavLink
          to='/result'
          className='font-semibold text-base transform transition hover:bg-blue-400 duration-700 ease-in-out text-gray-600 md:text-white  px-3 py-2 rounded'
          activeStyle={{
            backgroundColor: '#60A5FA',
          }}
        >
          Results
        </NavLink>
      </div>
      <button onClick={toggledState} className='p-2 md:hidden'>
        {' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 '
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
          className={`hamburger md:hidden bg-gray-50 h-screen absolute w-3/4 transform -translate-x-full transition duration-700 ease-in-out m-0`}
        ></div>
      ) : (
        <div
          className={`hamburger md:hidden bg-gray-50 h-screen absolute w-3/4 transform transition duration-700 ease-in-out m-0`}
        >
          <Sidebar data={toggledState} />
        </div>
      )}
      <div className='p-2 font-semibold text-base text-white self-center md:hidden'>
        {data}
      </div>
      <div className='p-2 self-center flex gap-2 '>
        <div className='profile flex content-center gap-2'>
          <p className='font-semibold self-center'>
            {' '}
            {student.first_name} {student.last_name}{' '}
          </p>
          <span className='text-gray-300 text-2xl font-extralight'>|</span>
        </div>
        <button className='text-white font-semibold ' onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
