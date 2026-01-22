import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Works() {
  return (
    <main id='works'>
      <div className='container-full  py-[30px] md:py-[80px] border-b-[1px] border-[#555C61] space-y-[40px]'>
        <div className='flex justify-center'>
          <h5 className='text-24px text-white underline underline-offset-8 decoration-coca '>
            {' '}
            Recent Works
          </h5>
        </div>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          viewport={{ once: true }}
          whileInView='show'
          className=' grid md:grid-cols-3 grid-cols-1 gap-[10px]'
        >
          {Array[4].map((load) => (
            <Link href='/' key={load} target='_blank'>
              <motion.div variants={childVariants} className='space-y-[10px]'>
                <div className=' aspect-[4.3/2.4]  relative w-full overflow-hidden group rounded-md'>
                  <Image
                    src={load.cover.url}
                    alt={load.cover.name}
                    fill
                    className=' transition-all shrink-0 opacity-80 hover:opacity-100 object-cover group-hover:scale-105'
                  />
                </div>
                <p className=' text-16px text-center'>{load.title}</p>
                <p className=' text-18px line-clamp-1'>{load.description}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
        <div className=' flex justify-center items-center'>
          <Link href='/projects'>
            <button
              type='button'
              className=' md:px-[25px] px-[18px] md:py-[10px] py-[5px] bg-[#2A343A] rounded-md flex justify-center items-center text-coca gap-x-[3px] transition-all hover:text-white hover:bg-coca'
            >
              <span className='text-16px text-cool'>View all works</span>{' '}
              <IoIosArrowForward size={25} />
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
