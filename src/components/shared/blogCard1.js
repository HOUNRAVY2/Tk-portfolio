import { fetchImage } from '@service/strapi';
import React from 'react';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Image from 'next/image';

export default function BlogCard1({ load }) {
  return (
    <div className='  rounded-md hover:scale-[1.02] transition-all'>
      <div className='relative w-full aspect-[8/5] mb-[-15px]'>
        <Image
          src={fetchImage(load.images[0].url)}
          alt={load.images[0].alt}
          fill
          className=' rounded-lg'
        />
      </div>
      <div className='px-[20px] pb-[5px] pt-[40px] bg-blog_frame02 bg-no-repeat bg-cover bg-top  rounded-b-md relative'>
        <div className='space-y-[20px] md:min-h-[120px] min-h-[80px]'>
          <p className='font-bold text-white text-20px line-clamp-1'>{load.title}</p>
          <p className='text-white text-14px line-clamp-2'>{load.description}</p>
        </div>

        <div className='flex justify-end'>
          <IoIosArrowDroprightCircle size={48} color='#fff' />
        </div>
      </div>
    </div>
  );
}
