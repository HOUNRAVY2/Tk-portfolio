import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';
import Image from 'next/image';
import { websiteData } from '@constants/mocks/home';
import Link from 'next/link';

export default function Works() {
  return (
    <main id='works'>
      <div className='container-full  py-[30px] md:py-[80px] border-b-[1px] border-[#555C61] space-y-[40px]'>
        <div className='flex justify-center'>
          <h5 className='text-24px text-heading underline underline-offset-8 decoration-coca '>
            {' '}
            Recent Works
          </h5>
        </div>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          viewport={{ once: true }}
          whileInView='show'
          className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[10px]'
        >
          {websiteData.map((load) => (
            <Link href={load.url} key={load.id} target='_blank'>
              <motion.div variants={childVariants} className='space-y-[10px]'>
                <div className=' aspect-[4.3/2.4]  relative w-full overflow-hidden group rounded-md'>
                  <Image
                    src={load.images.url}
                    alt={load.images.atl}
                    draggable={false}
                    fill
                    className=' object-contain transition-all shrink-0 opacity-80 hover:opacity-100  group-hover:scale-105'
                  />
                </div>
                <p className=' text-16px text-center'>{load.name}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
