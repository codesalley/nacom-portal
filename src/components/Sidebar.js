import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import auth from '../utils/auth';
import Logo from '../assets/logo.png';

export default function Sidebar({ data }) {
  const [loading, setloading] = useState(true);
  const [pagedata, setPagedata] = useState();
  const url = 'https://nacomtest.herokuapp.com/me';

  async function getMe() {
    const data = await auth(url);
    setPagedata(data);
  }

  useEffect(() => {
    getMe();
  }, []);
  console.log(pagedata);

  return (
    <div>
      <button onClick={data} className='text-right'>
        close{' '}
      </button>
      <div className='profile p-2'>
        <img
          className='profile-img w-2/3 rounded-full mx-auto bg-gray-500'
          alt='test'
          src={Logo}
        />
      </div>
      <div> Profile Info</div>
      <div> Results</div>
      <div> Messages</div>
      <div> Announceents</div>
    </div>
  );
}
