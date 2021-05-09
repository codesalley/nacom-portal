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
        <div className='bg-gray-200 main-page-height pt-2'>
          <div className='max-w-3xl mx-auto h-full border-r-2 border-double border-l-2 border-gray-400 shadow-lg'>
            <Skenton />
            <Skenton />
            <Skenton />
            <Skenton />
            <Skenton />
          </div>
        </div>
      ) : pageData && !pageData.msg ? (
        <div className='bg-gray-200 main-page-height pt-2'>
          <div className='max-w-3xl mx-auto h-full border-r-2 border-double border-l-2 border-gray-400 shadow-lg'>
            <ResultCard data={pageData} />
          </div>
        </div>
      ) : (
        <Redirect to='/login' />
      )}
    </div>
  );
};

export default Result;
