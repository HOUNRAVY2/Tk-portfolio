import React from 'react';
import { motion } from 'framer-motion';
import { doData } from '@constants/mocks/home';
import Icon from '@components/common/Display/Icon';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Ido() {
  return (
    <main>
      <div className='container-full py-[30px] md:py-[80px] border-b-[1px] border-[#555C61] space-y-[40px]'>
        <div className='flex justify-center'>
          <h5 className='text-24px  underline underline-offset-8 decoration-coca '> What I Do</h5>
        </div>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          viewport={{ once: true }}
          whileInView='show'
          className=' grid md:grid-cols-3 grid-cols-1 gap-[10px]'
        >
          {doData.map((load) => (
            <motion.div
              variants={childVariants}
              key={load.id}
              className=' p-[20px] bg-EA rounded-lg'
            >
              <div className='space-y-[10px] relative z-20'>
                <Icon name={load.icon} className=' md:text-[75px] text-[55px] text-coca' />
                <p className='text-20px'>{load.title}</p>
                <p className='text-14px'>{load.dsp}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
