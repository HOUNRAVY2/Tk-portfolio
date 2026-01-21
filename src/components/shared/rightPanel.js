import { fetchDataByGet, fetchImage, fetcher } from '@service/strapi';
import { useRequest } from 'ahooks';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getPlayLink } from '@utilities/dev';
import useSWR from 'swr';
import { useRouter } from 'next/router';

const fetchData = () => {
  return fetch(
    fetchDataByGet('/posts', {
      _limit: 7,
      _sort: 'created_at:DESC',
    }),
  ).then((res) => res.json());
};

export default function RightPanel() {
  const [dataSource, setDataSource] = useState([]);
  const { run, loading } = useRequest(fetchData, {
    manual: true,
    onSuccess: (result) => {
      setDataSource(result);
    },
  });

  useEffect(() => {
    run();
  }, [run]);

  const { data: ads } = useSWR(fetchDataByGet('/ads'), fetcher);
  const router = useRouter();
  const { asPath } = router;
  const firstPath = asPath.split('/')[1];

  return (
    <div className='space-y-[30px]'>
      {ads && (
        <div>
          {firstPath === 'category' ? (
            <Link href={getPlayLink()}>
              <div className='hover:scale-[1.02] transition-all'>
                <Image
                  src={fetchImage(ads[0].image?.url)}
                  alt={ads[0].image?.name}
                  width={ads[0].image?.width}
                  height={ads[0].image?.height}
                  className='rounded-lg'
                />
              </div>
            </Link>
          ) : (
            <Link href={getPlayLink()}>
              <div className='hover:scale-[1.02] transition-all'>
                <Image
                  src={fetchImage(ads[1].image?.url)}
                  alt={ads[1].image?.name}
                  width={ads[1].image?.width}
                  height={ads[1].image?.height}
                  className='rounded-lg'
                />
              </div>
            </Link>
          )}
        </div>
      )}

      {loading && (
        <div class='border border-amber-500 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
          <div class='animate-pulse flex space-x-4'>
            <div class='rounded-full bg-slate-700 h-10 w-10' />
            <div class='flex-1 space-y-6 py-1'>
              <div class='h-2 bg-slate-700 rounded' />
              <div class='space-y-3'>
                <div class='grid grid-cols-3 gap-4'>
                  <div class='h-2 bg-slate-700 rounded col-span-2' />
                  <div class='h-2 bg-slate-700 rounded col-span-1' />
                </div>
                <div class='h-2 bg-slate-700 rounded' />
              </div>
            </div>
          </div>
        </div>
      )}

      <ul className='space-y-[20px]'>
        {[...dataSource].splice(0, 5)?.map((load) => (
          <li key={load.id}>
            <Link href={`/blog${load.linkTo}`}>
              <div className='flex bg-gray1 rounded-lg hover:scale-[1.02] transition-all'>
                <div className='flex-none w-[140px]'>
                  <Image
                    src={fetchImage(load.images[0].url)}
                    alt={load.images[0].name}
                    width={load.images[0].width}
                    height={load.images[0].height}
                    className='rounded-lg'
                  />
                </div>

                <div className='w-full py-[5px] px-[10px]'>
                  <p className='text-14px line-clamp-2 colortext'>{load.title}</p>

                  <small className='line-clamp-2 text-[10px]'>{load.description}</small>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <ul className='space-y-[20px]'>
        {[...dataSource].splice(5, 3).map((load) => (
          <li key={load.id}>
            <Link href={`/blog${load.linkTo}`}>
              <div className='bg-gray1 rounded-lg hover:scale-[1.02] transition-all'>
                <div>
                  <Image
                    src={fetchImage(load.images[0].url)}
                    alt={load.images[0].name}
                    width={load.images[0].width}
                    height={load.images[0].height}
                    className='rounded-lg'
                  />
                </div>
                <div className='p-[20px]'>
                  <p className='text-20px font-bold colortext'>{load.title}</p>
                  <p className=' text-16px'>{load.description}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
