import { useEffect, useState } from 'react';
import auth from '../utils/auth';
import Skenton from './skenton';
import Card from './Card';
import { Redirect } from 'react-router-dom';
import './Messages.css';

const Message = ({ data }) => {
  const [pageData, setPagedata] = useState();
  const [loading, setLoading] = useState(true);
  const url = 'https://nacomtest.herokuapp.com/message';
  const getMessages = async () => {
    const data = await auth(url);
    setPagedata(data);
    console.log(data);
    setLoading(false);
  };

  useEffect(() => {
    getMessages();
    return () => {
      setPagedata();
    };
  }, []);

  return (
    <div>
      {data}
      {loading ? (
        <div className='bg-gray-200 pt-2 main-page-height'>
          {' '}
          <Skenton />
          <Skenton />
          <Skenton />
          <Skenton />
          <Skenton />
        </div>
      ) : !pageData.msg ? (
        <div className='bg-gray-200 main-page-height pt-2'>
          <Card data={pageData} />
        </div>
      ) : (
        <Redirect to='login' />
      )}
    </div>
  );
};

export default Message;
