import { useState } from 'react';
import ModalData from './Modal';
import Modal from 'react-modal';
import './ResultCard.css';

Modal.setAppElement('#modal');
const ResultCard = ({ data }) => {
  const [ismodal, setModal] = useState(false);

  const elementsFrag = data.map((v, i) => (
    <div
      key={i}
      className='main-card flex gap-3 bg-white rounded p-5 mx-auto mt-3 max-w-md'
    >
      <Modal isOpen={ismodal}>
        <div>
          {' '}
          <button onClick={() => setModal((e) => !e)}>
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
      <h2>{v[1].name} Semister Result </h2>
      <button
        className='w-1/4 show-btn'
        key={i}
        onClick={() => setModal((e) => !e)}
      >
        {' '}
        Show{' '}
      </button>
    </div>
  ));

  // const elementMain = () => {};

  return elementsFrag;
};

export default ResultCard;
