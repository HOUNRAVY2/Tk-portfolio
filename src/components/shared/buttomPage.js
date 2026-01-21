import React from 'react';
import Link from 'next/link';
import { getPlayLink } from '@utilities/dev';
import Image from 'next/image';

export default function ButtomPage() {
  return (
    <section className='grid grid-cols-3'>
      <div className='w-full max-w-[400px]'>
        <Image src='/assets/home/left.png' alt='frame-1' width={933} height={398} />
      </div>
      <div className=' flex justify-center items-center '>
        <Link href={getPlayLink()}>
          <button
            type='button'
            className='bg-button-2 bg-btn_gardient md:px-[30px] px-[20px] py-[9px] rounded-full font-bold text-18px'
          >
            立即開戶體驗
          </button>
        </Link>
      </div>
      <div className='flex justify-end items-end'>
        <div className='w-full max-w-[400px]'>
          <Image src='/assets/home/right.png' alt='frame-2' width={927} height={398} />
        </div>
      </div>
    </section>
  );
}
