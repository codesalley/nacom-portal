import { useEffect, useState } from 'react';
import auth from '../utils/auth';
import Skenton from './skenton';
import Card from './Card';

const Message = ({ data }) => {
  const [pageData, setPagedata] = useState();
  const [loading, setLoading] = useState(true);
  const url = 'https://nacomtest.herokuapp.com/message';
  const getMessages = async () => {
    const data = await auth(url);
    setPagedata(data);
    setLoading(false);
  };

  useEffect(() => {
    getMessages();
    return () => {
      getMessages();
    };
  }, []);
  console.log(pageData);
  console.log(loading);

  return (
    <div>
      {data}
      {loading ? (
        <div className='bg-gray-200 pt-2'>
          {' '}
          <Skenton />
          <Skenton />
          <Skenton />
          <Skenton />
          <Skenton />
        </div>
      ) : (
        <div className='bg-gray-200 h-screen pt-2'>
          <Card data={pageData} />
        </div>
      )}
    </div>
  );
};

export default Message;
