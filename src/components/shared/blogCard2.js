import { fetchImage } from '@service/strapi';
import Image from 'next/image';
import React from 'react';

export default function BlogCard2({ load }) {
  return (
    <div className='relative pb-[50px] rounded-lg hover:scale-[1.02] transition-all '>
      <div className=' relative aspect-[8/5]'>
        <Image
          src={fetchImage(load.images[0].url)}
          alt={load.images[0].name}
          fill
          className=' rounded-lg'
        />
      </div>

      <div className='absolute bottom-0 w-full bg-football_frame bg-cover bg-no-repeat bg-top rounded-b-md min-h-[100px]'>
        <div className='p-[20px]'>
          <p className='text-white line-clamp-2 text-20px'>{load.title}</p>
        </div>
      </div>
    </div>
  );
}
