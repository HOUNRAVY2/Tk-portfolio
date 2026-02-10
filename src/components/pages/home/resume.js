import React from 'react';
import { jobExperience, educationQuality } from '@constants/mocks/home';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Resume() {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <main id='resume'>
      <div className='container-full  py-[30px] md:py-[80px] border-b-[1px] border-[#555C61] space-y-[40px]'>
        <div className='flex justify-center'>
          <h5 className='text-24px  underline underline-offset-8 decoration-coca '> My Resume</h5>
        </div>
        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-[30px]'>
          <div className=' space-y-[12px]'>
            <div>
              <p className=' text-20px font-bold'>Job Experience</p>
              <span className='text-coca text-14px'>2021 - 2025</span>
            </div>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className=' grid grid-cols-1 gap-y-[12px]'
            >
              {jobExperience.map((job) => (
                <motion.div
                  variants={childVariants}
                  key={job.id}
                  className='space-y-[20px] bg-EA px-[25px] py-[15px] 2xl:h-[270px] lg:h-[290px] rounded-md'
                >
                  <div className=' space-y-[5px]'>
                    <p className='text-20px'>{job.title}</p>
                    <span className='text-14px text-coca'>{job.at}</span>
                  </div>
                  <p className='text-16px text-justify text-paragraph'>{job.dsp}</p>
                </motion.div>
              ))}
            </motion.div>
            {showMore && (
              <div className=' space-y-[12px]'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, type: 'just' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className=' space-y-[30px]'
                >
                  <div>
                    <div className='space-y-[20px] bg-EA px-[25px] py-[15px]  xl:h-[560px] lg:h-[550px] rounded-md'>
                      <div className=' space-y-[5px]'>
                        <p className='text-20px'>Founder & Social Media Manager</p>
                        <span className='text-14px text-coca'>
                          Perfect Solution Social Media Agency (2020-Present)
                        </span>
                      </div>
                      <ul className=' list-disc'>
                        <li className='text-16px text-justify text-paragraph'>
                          Providing digital marketing service including: content strategy, digital
                          marketing materials set up (Ad account & maintenance support), design
                          artwork, and performance campaigns for startups and local online stores.
                        </li>
                        <li className='text-16px text-justify text-paragraph'>
                          <b>Itel Mobile</b> – Campaign support including KOL livestreams,
                          giveaways, and Mobile Legends competitions.
                        </li>
                        <li className='text-16px text-justify text-paragraph'>
                          <b>Fastex Delivery App</b> – Social media management, content creation,
                          and social media artwork design.
                        </li>
                        <li className='text-16px text-justify text-paragraph'>
                          <b>Tela</b> – Freelance Assistant Producer (Tipsa Agency) for TVC
                          production, coordinating KOLs, managing materials and purchasing or
                          payment processing.
                        </li>
                        <li className='text-16px text-justify text-paragraph'>
                          <b>EstateBook</b> – Real estate app platform; set up and launched Facebook
                          page and built initial follower base.
                        </li>
                        <li className='text-16px text-justify text-paragraph'>
                          <b>KOLs on Panda Shopping</b> – Short-form video content creation and
                          audience engagement strategy.
                        </li>
                        <li className='text-16px text-justify text-paragraph'>
                          <b>Local Online Shops</b> – Digital marketing training, ad account setup,
                          and ongoing performance optimization support.
                        </li>
                        <li className='text-16px text-justify text-paragraph'>
                          <b>Sanura Farm</b> – Ad account setup & maintenance
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, type: 'just' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className=' space-y-[30px]'
                >
                  <div>
                    <p className=' text-20px font-bold'>Professional Courses & Training</p>
                  </div>
                  <div>
                    <div className='space-y-[20px] bg-EA px-[25px] py-[15px] 2xl:h-[200px] xl:h-[230px] lg:h-[240px] rounded-md'>
                      <div className=' space-y-[5px]'>
                        <p className='text-20px'>Digital Marketing</p>
                        <span className='text-14px text-coca'>(2017-2021)</span>
                      </div>
                      <ul className=' list-disc'>
                        <li className='text-16px text-justify text-paragraph'>
                          Attended 10+ professional courses in digital marketing, leadership,
                          strategic management (Executive & MBA level), and fundraising for private
                          equity and investors. Programs supported by AIESEC, USAID, UNDP, AUSAID,
                          GIZ, SwissContact, and Apollo Training.
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
          <div className=' space-y-[12px]'>
            <div>
              <p className=' text-20px font-bold'>Education Quality</p>
              <span className='text-coca text-14px'>2010 - 2026</span>
            </div>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className=' grid grid-cols-1 gap-y-[12px]'
            >
              {educationQuality.map((job) => (
                <motion.div
                  variants={childVariants}
                  key={job.id}
                  className=' space-y-[20px] bg-EA px-[25px] py-[15px] 2xl:h-[270px] lg:h-[290px] rounded-md'
                >
                  <div className=' space-y-[5px]'>
                    <p className='text-20px'>{job.title}</p>
                    <span className='text-14px text-coca'>{job.at}</span>
                  </div>
                  <ul className=' list-disc'>
                    {job.dsp &&
                      job.dsp.map((load) => (
                        <li key={load} className='text-16px text-justify text-paragraph'>
                          {load}
                        </li>
                      ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {showMore && (
              <div className=' space-y-[12px]'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, type: 'just' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className=' space-y-[30px]'
                >
                  <div>
                    <div className='space-y-[20px] bg-EA px-[25px] py-[15px] xl:h-[560px] lg:h-[550px]  rounded-md'>
                      <div className=' space-y-[5px]'>
                        <p className='text-20px'>Completed Computer Program</p>
                        <span className='text-14px text-coca'>
                          Royal University of Law & Economics (2010)
                        </span>
                      </div>
                      <ul className=' list-disc'>
                        <li className='text-16px text-justify text-paragraph'>
                          Completed training course and received certificate
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2, type: 'just' }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className=' space-y-[30px]'
                >
                  <div>
                    <p className=' text-20px font-bold'>Award</p>
                  </div>
                  <div>
                    <div className='space-y-[20px] bg-EA px-[25px] py-[15px] 2xl:h-[200px] xl:h-[230px] lg:h-[240px] rounded-md'>
                      <div className=' space-y-[5px]'>
                        <p className='text-20px'>Outstanding Woman Award – Private Sector</p>
                        <span className='text-14px text-coca'>(2016)</span>
                      </div>
                      <ul className=' list-disc'>
                        <li className='text-16px text-justify text-paragraph'>
                          Recognized for active participation in social work, charity activities,
                          and tourism promotion
                        </li>
                        <li className='text-16px text-justify text-paragraph'>
                          Award presented by the Ministry of Women’s Affairs and the Ministry of
                          Tourism of Cambodia
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button
            type='button'
            onClick={() => setShowMore((prev) => !prev)}
            className='bg-coca text-14px text-white font-semibold px-[22px] py-[8px]'
          >
            {!showMore ? 'See more' : 'See less'}
          </button>
        </div>
      </div>
    </main>
  );
}
