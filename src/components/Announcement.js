import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Announcements = ({ data }) => {
  return (
    <div className='bg-red-200'>
      {data}
      <h2>Announcementse</h2>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default Announcements;
