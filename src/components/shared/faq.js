import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export default function Faq({ dataSource }) {
  const [faqIndex, setFaqIndex] = useState('');

  const openFaq = (idx) => {
    if (idx === faqIndex) {
      setFaqIndex('');
    } else {
      setFaqIndex(idx);
    }
  };
  return (
    <div className='space-y-[50px]'>
      <div className=' flex justify-center items-center'>
        <div className=' relative'>
          <h5 className=' colortext text-h1 font-black'>FAQ</h5>
        </div>
      </div>

      <div>
        <ul className='space-y-[10px]'>
          {dataSource?.map((load, idx) => (
            <li key={load.id}>
              <button
                type='button'
                className='w-full bg-football_frame bg-cover bg-repeat bg-center rounded-md p-[10px]'
                onClick={() => openFaq(idx)}
              >
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-20px text-white'>{load.questionName}</p>
                  </div>
                  <div>
                    <MdOutlineKeyboardArrowDown size={42} color='white' />
                  </div>
                </div>
              </button>

              {faqIndex === idx && (
                <div className='p-[10px]'>
                  <p className=' text-18px'>{load.acceptedAnswerText}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
