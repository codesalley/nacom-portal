import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import auth from '../utils/auth';
import Skenton from './skenton';
import nurse from '../assets/pngegg.png';
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
    return getAnnouncements();
  }, []);

  return (
    <div className='bg-white'>
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
      ) : (
        <div className='bg-gray-200 h-screen overflow-scroll'>
          {pageData.map((v, i) => {
            return (
              <div
                className='main-card flex gap-3 bg-white rounded p-3 mx-auto mt-2 max-w-sm '
                key={i}
              >
                <img alt='nurse logo' className='nurse-logo' src={nurse} />
                <div className='body'>
                  <p>{v.title}</p>
                  <p>{v.details}</p>
                  <small>{v.created_at}</small>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Announcements;
