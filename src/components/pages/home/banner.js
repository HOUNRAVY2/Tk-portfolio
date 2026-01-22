import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { findMe } from '@constants/mocks/home';
import Icon from '@components/common/Display/Icon';

export default function Banner() {
  return (
    <main className='container-full pt-[80px] pb-[30px] md:pb-[80px] border-b-[1px] border-[#555C61]'>
      <div className=' items-center '>
        <div className=' grid md:grid-cols-2 grid-cols-1 gap-y-[30px]'>
          <div className=' flex items-center '>
            <div className='md:space-y-[7px]'>
              <p className=' text-16px'>Hello, I am</p>
              <h5 className='text-45px font-extrabold text-heading uppercase'>
                theany <span className=' text-coca text-45px font-extrabold'>kouch</span>
              </h5>
              <p className='text-20px '>D. Marketing Manager & Project Manager</p>
              <p className='text-16px md:pr-[50px] text-justify text-paragraph'>
                Digital Marketing Manager with 5+ years of experience in e-commerce and tech,
                skilled in Facebook Ads, TikTok, Instagram, content creation, SEO, and integrated
                campaigns. Experienced in end-to-end website projects, livestream/KOL promotions,
                and collaborating with designers, developers, and merchants. Currently pursuing
                advanced Chinese language and e-commerce studies to enhance skills and drive
                personal and professional growth. Passionate about learning, adaptability, and
                delivering measurable results.
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

          <div className=' flex justify-center'>
            <div className='aspect-[6.7/7.7]  relative w-[330px] md:w-[500px] '>
              <Image src='/assets/home/me.webp' alt='person' fill draggable='false' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
