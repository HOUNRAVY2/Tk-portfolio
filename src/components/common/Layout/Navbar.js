import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navData } from '@constants/mocks/home';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClear } from 'react-icons/md';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/home/tk_CV.pdf'; // Path to your PDF file
    link.download = 'tk_CV.pdf'; // Suggested filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // const clickSmooth = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const clickSmooth = (e, targetId) => {
    setActiveLink(targetId);
    e.preventDefault();
    router.push(`${targetId}`).then(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  };
  return (
    <nav className='relative'>
      <div
        className={`fixed w-full top-0 z-30 transition-all ${
          scrollPosition > 50 ? 'bg-EA' : 'bg-transparent'
        }`}
      >
        <div className='container-full py-[20px]'>
          <div className='flex items-center justify-between '>
            <ul className='lg:flex hidden items-center gap-x-[70px] w-full max-w-[800px] relative'>
              {navData.map((load) => (
                <li key={load.id}>
                  <Link href={`${load.linkTo}`} onClick={(e) => clickSmooth(e, load.linkTo)}>
                    <p
                      className={`text-14px hover:text-red-600 ${
                        activeLink === load.linkTo ? 'text-red-600' : 'text-heading'
                      }`}
                    >
                      {load.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className='flex-none '>
              <button
                type='button'
                className='text-14px bg-coca text-white px-[20px] py-[9px] rounded-lg'
                onClick={handleDownload}
              >
                DOWNLOAD CV
              </button>
            </div>
            <div className='lg:hidden'>
              <HiOutlineMenu onClick={() => setShowMenu(true)} color='#fff' size={30} />
            </div>
          </div>
        </div>
        <div
          className={`lg:hidden fixed z-50 top-0 w-full h-screen bg-[#24292C]  ${
            // eslint-disable-next-line no-nested-ternary
            showMenu === true ? (showMenu ? 'menu-in' : 'menu-out') : 'hidden'
          }`}
        >
          <div className=' text-EA'>
            <div className=' bg-gradient py-2 flex justify-end px-[15px]'>
              <MdOutlineClear color='#fff' onClick={() => setShowMenu(false)} size={30} />
            </div>
            <ul className='pt-[20px]'>
              {navData.map((load) => (
                <li key={load.id} className='px-[20px]'>
                  <div className='px-[20px] py-[10px] border-b-[1px]'>
                    <Link href={load.linkTo}>
                      <button
                        type='button'
                        className='text-18px text-white'
                        onClick={() => setShowMenu(false)}
                      >
                        {load.title}
                      </button>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
