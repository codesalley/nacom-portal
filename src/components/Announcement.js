import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import auth from '../utils/auth';
import Skenton from './skenton';

const Announcements = ({ data }) => {
  const url = 'https://nacomtest.herokuapp.com/announce';
  const [loading, setLoading] = useState(true);
  const [pageData, setPagedata] = useState();
  const getAnnouncements = async () => {
    const data = await auth(url);
    setPagedata(data);
    setLoading(false);
  };

  useEffect(() => {
    getAnnouncements();
    return getAnnouncements();
  }, []);

  return (
    <div className='bg-white'>
      {data}
      {loading ? (
        <div className='flex flex-col bg-gray-200 h-screen'>
          <Skenton />
        </div>
      ) : (
        <div className='bg-gray-200 h-screen overflow-scroll'></div>
      )}
    </div>
  );
};

export default Announcements;
