import { useState } from 'react';
import Sidebar from './Sidebar';

const NavBar = () => {
  const [toggledNav, setToggledNav] = useState(false);

  function toggledState() {
    setToggledNav((e) => !e);
  }
  console.log(toggledNav);
  return (
    <div className='flex justify-between relative'>
      <button onClick={toggledState}> Nav</button>
      {!toggledNav ? (
        <div
          className={`hamburger bg-gray-50 h-screen absolute w-1/2 transform -translate-x-full`}
        >
          Nav
        </div>
      ) : (
        <div
          className={`hamburger bg-gray-50 h-screen absolute w-1/2 transform `}
        >
          <Sidebar data={toggledState} />
        </div>
      )}
      <div>Logo </div>
      <div>Profile</div>
    </div>
  );
};

export default NavBar;
