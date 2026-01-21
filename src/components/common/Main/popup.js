import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

export default function Popup() {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem('popupClosed');
    if (hasClosedPopup) return undefined; // Explicitly returning undefined

    const timer = setTimeout(() => setPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setPopup(false);
    sessionStorage.setItem('popupClosed', 'true');
  };

  if (!popup) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-banner'>
      <div className='container-full flex justify-center items-center px-[20px] md:px-[40px] lg:px-[50px]'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className='relative bg-[#1010104D] border-4 border-[#FFFFFF33] rounded-lg shadow-lg p-8 text-white text-center space-y-[10px]'
        >
          <IoClose
            className='absolute top-[-40px] right-[-10px] md:top-[-50px] md:right-[-20px] text-[30px] md:text-[40px] cursor-pointer animate-pulse hover:scale-105 transition-all '
            onClick={closePopup}
          />
          <h2 className='text-title'>Dear Visitors,</h2>
          <p className='text-16px'>
            Thank you for visiting my website! I truly appreciate your support and the valuable
            feedback I’ve received. Seeing so many visitors engage with my site has inspired me to
            enhance and modernize it. I’m currently working on several improvements, including:
          </p>
          <ul className=' list-disc flex justify-center items-center flex-col gap-y-[10px]'>
            <li className='text-16px '>
              <span className='text-16px font-bold'>Dark mode & light mode</span> for a better user
              experience
            </li>
            <li className='text-16px '>
              <span className='text-16px font-bold'>A dedicated blog page</span> to share insights
              and updates
            </li>
            <li className='text-16px '>
              <span className='text-16px font-bold'>
                Support for multiple languages (2-3 languages)
              </span>{' '}
              for broader accessibility
            </li>
          </ul>
          <p className='text-16px'>
            I’m committed to making these updates as soon as possible and will keep you posted on
            the progress.
          </p>
          <p className='text-16px'>Thank you again for your support! 🙏 .</p>
        </motion.div>
      </div>
    </div>
  );
}
