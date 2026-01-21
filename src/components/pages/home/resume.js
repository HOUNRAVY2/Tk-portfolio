import React from 'react';
import { jobExperience, educationQuality } from '@constants/mocks/home';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Resume() {
  return (
    <main id='resume'>
      <div className='container-full  py-[30px] md:py-[80px] border-b-[1px] border-[#555C61] space-y-[40px]'>
        <div className='flex justify-center'>
          <h5 className='text-24px text-white underline underline-offset-8 decoration-coca '>
            {' '}
            My Resume
          </h5>
        </div>
        <div className=' grid md:grid-cols-2 grid-cols-1 gap-[30px]'>
          <div className=' space-y-[40px]'>
            <div>
              <p className=' text-20px font-bold'>Job Experience</p>
              <span className='text-coca text-14px'>2021 - 2025</span>
            </div>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className=' grid grid-cols-1 gap-y-[15px]'
            >
              {jobExperience.map((job) => (
                <motion.div
                  variants={childVariants}
                  key={job.id}
                  className='space-y-[20px] bg-[#2A343A] px-[25px] py-[15px] rounded-md'
                >
                  <div className=' space-y-[5px]'>
                    <p className='text-20px'>{job.title}</p>
                    <span className='text-14px text-coca'>{job.at}</span>
                  </div>
                  <p className='text-16px line-clamp-2'>{job.dsp}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className=' space-y-[40px]'>
            <div>
              <p className=' text-20px font-bold'>Education Quality</p>
              <span className='text-coca text-14px'>2010 - 2026</span>
            </div>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className=' grid grid-cols-1 gap-y-[15px]'
            >
              {educationQuality.map((job) => (
                <motion.div
                  variants={childVariants}
                  key={job.id}
                  className=' space-y-[20px] bg-[#2A343A] px-[25px] py-[15px] rounded-md'
                >
                  <div className=' space-y-[5px]'>
                    <p className='text-20px'>{job.title}</p>
                    <span className='text-14px text-coca'>{job.at}</span>
                  </div>
                  <ul>
                    {job.dsp &&
                      job.dsp.map((load) => (
                        <li key={load} className='text-16px line-clamp-2'>
                          {load}
                        </li>
                      ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
