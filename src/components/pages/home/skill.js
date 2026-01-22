import React from 'react';
import { skillData } from '@constants/mocks/home';
import Image from 'next/image';

export default function Skill() {
  return (
    <main id='skills'>
      <div className='container-full py-[30px] md:py-[80px] border-b-[1px] border-[#555C61] space-y-[40px]'>
        <div className='flex justify-center'>
          <h5 className='text-24px  underline underline-offset-8 decoration-coca '> Skills</h5>
        </div>

        <div className=' grid md:grid-cols-3 grid-cols-2 md:gap-[12px] gap-[8px]'>
          {skillData.map((load) => (
            <div
              key={load.id}
              className='bg-EA rounded-lg space-y-[10px] flex flex-col justify-center py-[30px]  items-center'
            >
              <div className=' relative w-[140px] h-[120px]'>
                <Image
                  src={load.images.url}
                  alt={load.images.atl}
                  width={200}
                  height={180}
                  draggable={false}
                  className=' object-contain'
                />
              </div>
              <p className='md:text-20px text-18px'>{load.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
