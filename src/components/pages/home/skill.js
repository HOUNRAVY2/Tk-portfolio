import React from 'react';
import { skillData } from '@constants/mocks/home';
import Image from 'next/image';

export default function Skill() {
  return (
    <main id='skills'>
      <div className='container-full py-[30px] md:py-[80px] border-b-[1px] border-[#555C61] space-y-[40px]'>
        <div className='flex justify-center'>
          <h5 className='text-24px text-white underline underline-offset-8 decoration-coca '>
            {' '}
            Skills
          </h5>
        </div>

        <div className=' grid grid-cols-3 gap-[32px]'>
          {skillData.map((load) => (
            <div
              key={load.id}
              className='bg-[#2A343A] rounded-md space-y-[10px] flex flex-col justify-center md:h-[200px] h-[110px]  items-center'
            >
              <Image src={load.images.url} alt={load.images.atl} width={80} height={80} />
              <p className='md:text-20px text-18px'>{load.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
