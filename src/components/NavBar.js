import { useState } from 'react';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  const [toggledNav, setToggledNav] = useState(false);

  function toggledState() {
    setToggledNav((e) => !e);
  }
  console.log(toggledNav);
  return (
    <div className='flex justify-between relative '>
      <button onClick={toggledState} className='p-2'>
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
          className={`hamburger bg-gray-50 h-screen absolute w-1/2 transform -translate-x-full transition duration-700 ease-in-out`}
        ></div>
      ) : (
        <div
          className={`hamburger bg-gray-50 h-screen absolute w-1/2 transform transition duration-700 ease-in-out`}
        >
          <Sidebar data={toggledState} />
        </div>
      )}
      <div className='p-2 font-semibold text-xl'>General Announcements </div>
      <div className='p-2'>Logout</div>
    </div>
  );
};

export default NavBar;
