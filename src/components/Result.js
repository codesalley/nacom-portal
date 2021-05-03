import { useEffect } from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../utils/auth';
import ResultCard from './ResultCard';
import Skenton from './skenton';

const Result = ({ data }) => {
  const url = 'https://nacomtest.herokuapp.com/result';
  const [pageData, setPageData] = useState();
  const [loading, setLoading] = useState(true);

  const getResults = async () => {
    const data = await auth(url);
    setPageData(data);
    setLoading(false);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      {data}
      {loading ? (
        <div className='bg-gray-200 h-screen pt-2'>
          <Skenton />
          <Skenton />
          <Skenton />
          <Skenton />
          <Skenton />
        </div>
      ) : pageData && !pageData.msg ? (
        <div className='bg-gray-200 h-screen pt-2'>
          <ResultCard data={pageData} />
        </div>
      ) : (
        <Redirect to='/login' />
      )}
    </div>
  );
};

export default Result;
