import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { findMe } from '@constants/mocks/home';
import Link from 'next/link';
import Icon from '../Display/Icon';

export default function Footer() {
  return (
    <footer className='text-white bg-footer'>
      <main className=' container-full space-y-[20px]'>
        <div className=' flex justify-center items-center pt-[26px]'>
          <button
            type='button'
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              })
            }
            className='flex flex-col justify-center items-center gap-y-[10px] hover:scale-[1.08] transition-all'
          >
            <MdOutlineKeyboardDoubleArrowUp className=' text-45px  text-coca' />
            <p className='text-16px'>Back To Top</p>
          </button>
        </div>
        <div className='flex justify-center items-center gap-x-[20px] text-white text-[24px]'>
          {findMe.map((load) => (
            <Link href={load.linkTo} key={load.id}>
              <div>
                <Icon
                  name={load.icon}
                  className='hover:text-coca hover:scale-[1.16] transition-all'
                />
              </div>
            </Link>
          ))}
        </div>
        <div className=' text-center border-t-[1px] border-white/70 py-[26px]'>
          <p className='text-14px text-white/70'>
            @2026 <span className=' text-coca text-14px font-bold'>Theany Kouch</span> All Rights
            Reserved.
          </p>
        </div>
      </main>
    </footer>
  );
}
