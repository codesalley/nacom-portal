import { useEffect } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import ModalData from './Modal';
import Modal from 'react-modal';
import { format, toDate } from 'date-fns';

Modal.setAppElement('#modal');
const ResultCard = ({ data }) => {
  const [ismodal, setModal] = useState(false);

  console.log(data);
  if (data.msg) {
    return <Redirect to='/login' />;
  }

  function showData() {
    setModal((e) => !e);
  }

  return data.map((v, i) => {
    return (
      <div
        key={i}
        className='main-card flex gap-3 bg-white rounded p-5 mx-auto mt-3 max-w-md'
      >
        <Modal isOpen={ismodal}>
          <div>
            {' '}
            <button onClick={showData}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6'
                />
              </svg>
            </button>{' '}
            <p></p>
          </div>
          <ModalData data={v} />
        </Modal>
        <h2>First Semister Result {} </h2>
        <button key={i} onClick={showData}>
          {' '}
          Show{' '}
        </button>
      </div>
    );
  });
};

export default ResultCard;
