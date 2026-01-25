import React from 'react';
import { toolsData } from '@constants/mocks/home';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export function Tools() {
  return (
    <main id='skills'>
      <div className='container-full py-[30px] md:py-[80px] border-b-[1px] border-[#555C61] space-y-[40px]'>
        <div className='flex justify-center'>
          <h5 className='text-24px  underline underline-offset-8 decoration-coca '>Tools I Use</h5>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          viewport={{ once: true }}
          whileInView='show'
          className=' grid md:grid-cols-4 grid-cols-2 md:gap-[12px] gap-[8px]'
        >
          {toolsData.map((load) => (
            <motion.div
              variants={childVariants}
              key={load.id}
              className='bg-EA rounded-lg space-y-[10px] flex justify-center py-[30px]  items-center'
            >
              <div className='relative  '>
                <Image
                  src={load.images.url}
                  alt={load.images.atl}
                  width={120}
                  height={100}
                  draggable={false}
                  className=' object-contain shrink-0 w-[120px] h-[100px]'
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
