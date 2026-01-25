import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { findMe } from '@constants/mocks/home';
import Icon from '@components/common/Display/Icon';

export default function Banner() {
  return (
    <main className='container-full pt-[80px] pb-[30px] md:pb-[80px] border-b-[1px] border-[#555C61]'>
      <div className=' items-center '>
        <div className=' grid lg:grid-cols-2 grid-cols-1 gap-y-[30px]'>
          <div className=' flex items-center '>
            <div className='md:space-y-[7px]'>
              <p className=' text-16px'>Hello, I am</p>
              <h5 className='text-45px font-extrabold text-heading uppercase'>
                theany <span className=' text-coca text-45px font-extrabold'>kouch</span>
              </h5>
              <p className='text-20px '>Marketing & Project Manager</p>
              <p className='text-16px lg:pr-[50px] text-justify text-heading'>
                Marketing & Project Manager with 5+ years of experience leading marketing strategy
                and execution across tech and digital platforms. Strong in digital marketing, paid
                media, e-commerce, and app launches, with proven ability to plan campaigns, manage
                complex projects, and align cross-functional teams to deliver measurable results.
                Recently managed marketing and project execution for a blockchain-based payment
                platform and multiple e-commerce app and web projects, collaborating closely with
                designers, developers, and stakeholders to drive adoption, performance, and scalable
                growth.
              </p>
              <div className=' space-y-[10px] pt-[40px]'>
                <p className='text-18px md:text-start text-center'>FIND ME ON:</p>
                <div className='flex  items-center justify-center md:justify-start gap-x-[10px] text-white md:text-[24px] text-[20px]'>
                  {findMe.map((load) => (
                    <Link href={load.linkTo} key={load.id}>
                      <div className='bg-[#EAEAEA] p-[10px] rounded-md text-coca hover:text-heading hover:scale-[1.16] transition-all'>
                        <Icon name={load.icon} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className=' flex justify-center lg:order-last order-first'>
            <div className='aspect-[6.3/6.8]  relative md:w-[320px] w-[300px] 2xl:w-[500px] lg:w-[460px] '>
              <Image
                src='/assets/home/me.webp'
                alt='person'
                fill
                draggable='false'
                className=' object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
