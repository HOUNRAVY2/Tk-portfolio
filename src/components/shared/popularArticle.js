import { fetchDataByGet, fetcher } from '@service/strapi';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import useSWR from 'swr';
import BlogCard1 from '@components/shared/blogCard1';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export default function PopularArticle() {
  const { data: dataSource } = useSWR(
    fetchDataByGet('/posts', {
      _sort: 'publish_at:DESC, updated_at:DESC',
    }),
    fetcher,
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: dataSource?.length < 3 ? dataSource?.length : 3,
    slidesToScroll: 1,
    nextArrow: <ArrowNext rotate='right-[-50px] top-[50%]' />,
    prevArrow: <ArrowNext rotate='left-[-50px] top-[50%] rotate-180' />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: dataSource?.length < 3 ? dataSource?.length : 3,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: dataSource?.length < 2 ? dataSource?.length : 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='py-10 px-5 md:px-0'>
      <div className='flex flex-col items-center space-y-[10px] py-[20px]'>
        <div>
          <h5 className=' text-title font-black colortext'>精選文章</h5>
        </div>
        <p className=' text-20px'>Popular Article</p>
      </div>

      <Slider {...settings}>
        {dataSource?.map((load) => (
          <div key={load.id} className='px-[6px]'>
            <Link href={`/blog${load.linkTo}`}>
              <BlogCard1 load={load} />
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}

function ArrowNext({ rotate, onClick }) {
  return (
    <div className={`absolute hover:scale-[1.04] transition-all cursor-pointer   ${rotate}`}>
      <IoIosArrowDroprightCircle onClick={onClick} size={35} color='#ff0066' />
    </div>
  );
}
