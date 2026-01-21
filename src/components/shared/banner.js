import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export default function Banner({ dataSource }) {
  return (
    <div>
      {dataSource.map((load) => (
        <div key={load.id}>
          <Image
            src={load.image.url}
            alt={load.image.alt}
            width={load.image.width}
            height={load.image.height}
          />
        </div>
      ))}
      <div className=' container-full'>
        <div className='py-[10px] '>
          <Marquee>
            <p className=' text-18px hover:opacity-70'>
              歡迎來到9527，球百通足球資訊綱站，專業分析5大聯賽賠率，24小時365天全年無休，專人客服24小時歡迎查詢，特快出款，忠誠穩健，
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
