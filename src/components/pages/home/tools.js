import React from 'react';
import { toolsData, tools2Data } from '@constants/mocks/home';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export function Tools() {
  return (
    <main id='skills'>
      <div className='container-full py-[30px] md:py-[80px] border-b-[1px] border-[#555C61] space-y-[40px]'>
        <div className='flex justify-center'>
          <h5 className='text-24px  underline underline-offset-8 decoration-coca '>Tools I Use</h5>
        </div>
        <Marquee pauseOnClick direction='left' speed={40}>
          <div className='flex justify-center items-center mx-[5px] gap-x-[10px]'>
            {toolsData.map((load) => (
              <div
                key={load.id}
                className='bg-EA md:p-[50px] p-[30px] rounded-md space-y-[10px] flex flex-col justify-center md:h-[200px] h-[110px] md:w-[200px] w-[110px] items-center'
              >
                <Image
                  src={load.images.url}
                  alt={load.images.atl}
                  width={120}
                  height={120}
                  className='w-[110px] h-[110px] object-contain'
                />
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee pauseOnClick direction='right' speed={40}>
          <div className='flex justify-center items-center mx-[5px] gap-x-[10px]'>
            {tools2Data.map((load) => (
              <div
                key={load.id}
                className='bg-EA md:p-[50px] p-[30px] rounded-md space-y-[10px] flex flex-col justify-center md:h-[200px] h-[110px] md:w-[200px] w-[110px] items-center'
              >
                <Image
                  src={load.images.url}
                  alt={load.images.atl}
                  width={120}
                  height={120}
                  className='w-[100px] h-[100px] object-contain'
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </main>
  );
}
