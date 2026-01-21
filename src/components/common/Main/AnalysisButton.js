import React from 'react';
import Link from 'next/link';
import { getPlayLink } from '@utilities/dev';

export default function AnalysisButton() {
  return (
    <div>
      <div className='hidden md:block fixed top-1/2 transform -translate-y-1/2 left-10 z-10  hover:scale-[1.02]'>
        <Link href='/analysis'>
          <button
            type='button'
            className='bg-btn_gardient   px-4 py-7 rounded-full border-2 border-primary'
          >
            <p className='flex-col w-[20px] font-bold text-20px'>早盤分析</p>
          </button>
        </Link>
      </div>

      <div className='hidden md:block fixed top-1/2 transform -translate-y-1/2 right-10 z-10  hover:scale-[1.02]'>
        <Link href={getPlayLink()}>
          <button
            type='button'
            className=' bg-btn_gardient  px-4 py-7 rounded-full border-2 border-primary'
          >
            <p className='flex-col w-[20px] font-bold text-20px'>前往投注</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
