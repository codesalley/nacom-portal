import { useEffect, useState } from 'react';
import auth from '../utils/auth';
import Skenton from './skenton';
import Card from './Card';
import { Redirect } from 'react-router-dom';
import './announcement.css';

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
    return setPagedata();
  }, []);

  return (
    <div className='bg-white '>
      {data}
      {loading ? (
        <div className='flex flex-col bg-gray-200 h-screen'>
          <Skenton />
          <Skenton />
          <Skenton />
          <Skenton />
          <Skenton />
          <Skenton />
        </div>
      ) : !pageData.msg ? (
        <div className='bg-gray-200 h-screen overflow-scroll '>
          <Card data={pageData} />
        </div>
      ) : (
        <Redirect to='/login' />
      )}
    </div>
  );
};

export default Announcements;
