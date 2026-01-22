import React, { useState } from 'react';
import { contactData } from '@constants/mocks/home';
import { BsFillSendFill } from 'react-icons/bs';
import Icon from '@components/common/Display/Icon';
import Link from 'next/link';
import { getBotToken, getChatID } from '@utilities/dev';
import Image from 'next/image';
import { MdOutlineCancel } from 'react-icons/md';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Contact() {
  const [isSubmit, setSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const onHandleChange = (e) => {
    setInput((el) => ({
      ...el,
      [e.target.id]: e.target.value,
    }));
  };

  const sendMessage = async () => {
    if (
      input.name !== '' &&
      input.phone !== '' &&
      input.email !== '' &&
      input.subject !== '' &&
      input.message !== ''
    ) {
      setLoading(true);
      try {
        const botToken = getBotToken();
        const chatId = getChatID();
        const messageS = `Eric Ravy's website visitor request\nname: ${input.name}\nphone: ${input.phone}\nemail: ${input.email}\nsubject: ${input.subject}\nmessages: ${input.message}`;

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageS,
            parse_mode: 'HTML', // Change to 'Markdown' if needed
          }),
        });

        if (response.ok) {
          setSubmit(true);
          setInput({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
          });
          setSubmit(true);
          setLoading(false);
        }
      } catch (error) {
        console.error(`error ${error}`);
      }
    }
  };

  return (
    <main id='contact'>
      {isSubmit && (
        <div className='fixed top-0 left-0  w-screen h-screen z-50 bg-black/80 flex justify-center items-center '>
          <div className=' flex justify-center items-center bg-white w-[500px] h-[500px] rounded-lg relative'>
            <MdOutlineCancel
              onClick={() => setSubmit(false)}
              className=' absolute right-2 top-2 cursor-pointer text-30px hover:text-red-600 hover:scale-105 transition-all text-slate-500'
            />
            <div className=' space-y-[25px]'>
              <div className='flex justify-center items-center'>
                <div className=' w-[100px] '>
                  <Image src='/assets/home/pop.png' alt='logo' width={185} height={185} />
                </div>
              </div>
              <div className=' text-center space-y-[15px]'>
                <h5 className=' text-purple-800 text-45px font-semibold'>Thank you!</h5>
                <p className=' text-20px'>Your submission has been sent.</p>
              </div>

              <div className=' flex justify-between space-x-[40px]'>
                <Link href='/'>
                  <button
                    type='button'
                    onClick={() => setSubmit(false)}
                    className=' bg-gray-400 rounded-xl px-[15px] py-[9px] text-16px text-white font-bold hover:scale-105 transition-all'
                  >
                    Return home
                  </button>
                </Link>
                <button
                  type='button'
                  onClick={() => setSubmit(false)}
                  className='rounded-md bg-coca px-[15px] py-[9px] text-16px font-bold text-white  hover:scale-105 transition-all'
                >
                  Continue Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='container-full  py-[30px] md:py-[80px] border-b-[1px] border-[#555C61] space-y-[40px]'>
        <div className='flex justify-center'>
          <h5 className='text-24px underline underline-offset-8 decoration-coca '>
            {' '}
            Contact With Me
          </h5>
        </div>
        <div className='grid md:grid-cols-5 grid-cols-1 gap-[20px]'>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
            className='col-span-2'
          >
            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className=' grid grid-cols-1 gap-y-[20px]'
            >
              {contactData.map((load) => (
                <Link href={load.linkTo} key={load.id}>
                  <motion.div
                    variants={childVariants}
                    className='flex text-coca hover:text-white hover:scale-[1.05] transition-all flex-col justify-center rounded-md py-[20px] px-[30px] items-center gap-y-[10px] bg-[#CECECE]'
                  >
                    <Icon name={load.icon} size={24} />
                    <p className='text-16px text-heading'>{load.name}</p>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring' }}
            className=' col-span-3 bg-EA p-[30px] rounded-md'
          >
            <div className='mb-4 flex gap-[20px]'>
              <input
                required
                type='text'
                id='name'
                value={input.name}
                onChange={(e) => onHandleChange(e)}
                placeholder='Your name'
                className='w-full px-3 py-2 border-none text-14px bg-[#CECECE] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
              <input
                required
                type='text'
                id='phone'
                value={input.phone}
                onChange={(e) => onHandleChange(e)}
                placeholder='Your phone'
                className='w-full px-3 py-2 border-none text-14px bg-[#CECECE] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div className='mb-4 flex gap-[20px]'>
              <input
                required
                type='text'
                id='email'
                value={input.email}
                onChange={(e) => onHandleChange(e)}
                placeholder='Your Email'
                className='w-full px-3 py-2 border-none text-14px bg-[#CECECE] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
              <input
                required
                type='text'
                id='subject'
                value={input.subject}
                onChange={(e) => onHandleChange(e)}
                placeholder='Your subject'
                className='w-full px-3 py-2 border-none text-14px bg-[#CECECE] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div className='mb-4'>
              <textarea
                required
                id='message'
                value={input.message}
                onChange={(e) => onHandleChange(e)}
                rows='4'
                placeholder='Enter your message'
                className='w-full px-3 py-2 border-none text-14px bg-[#CECECE] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              />
            </div>
            <div className='flex justify-center items-center  '>
              {!isLoading ? (
                <button
                  type='button'
                  onClick={() => sendMessage()}
                  className=' px-[25px] py-[10px] bg-[#CECECE] rounded-md flex justify-center items-center text-coca gap-x-[8px] transition-all hover:text-white hover:bg-coca'
                >
                  <span className='text-14px text-heading'>Send Message </span>{' '}
                  <BsFillSendFill size={16} />
                </button>
              ) : (
                <button
                  type='button'
                  className='px-[25px] text-14px py-[10px] bg-[#CECECE] rounded-md flex justify-center  text-coca gap-x-[8px] transition-all hover:text-white hover:bg-coca items-center cursor-not-allowed'
                  disabled
                >
                  {' '}
                  Sending
                  <svg
                    className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    />
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
