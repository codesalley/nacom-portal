import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import auth from '../utils/auth';

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
    <div className='bg-red-200'>
      {data}
      {loading ? (
        <div> loading </div>
      ) : (
        <div>
          <h2>Announcementse</h2>
          <Link to='/login'>Login</Link>
        </div>
      )}
    </div>
  );
};

export default Announcements;
