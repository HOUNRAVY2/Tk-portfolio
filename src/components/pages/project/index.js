import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Project({ data }) {
  return (
    <main>
      <div className=' bg-banner bg-no-repeat container-fluid'>
        <div className=' container-full py-[100px]'>
          <div className=' space-y-[30px]'>
            <div className='flex justify-center'>
              <h5 className='text-24px text-white underline underline-offset-8 decoration-coca '>
                {' '}
                My Work Done
              </h5>
            </div>
            <motion.div
              variants={containerVariants}
              initial='hidden'
              viewport={{ once: true }}
              whileInView='show'
              className=' grid md:grid-cols-3 grid-cols-1 gap-[15px]'
            >
              {data
                .sort((a, b) => b.id - a.id)
                .map((load) => (
                  <Link href={`https://${load.slug}`} key={load.id} target='_blank'>
                    <motion.div variants={childVariants} className='space-y-[10px]'>
                      <div className=' aspect-[4.3/2.4]  relative w-full overflow-hidden group rounded-md'>
                        <Image
                          src={load.cover.url}
                          alt={load.cover.name}
                          fill
                          className=' transition-all shrink-0 opacity-80 hover:opacity-100 object-cover group-hover:scale-105'
                        />
                      </div>
                      <p className=' text-16px text-center text-white'>{load.title}</p>
                      <p className=' text-18px line-clamp-1 text-white'>{load.description}</p>
                    </motion.div>
                  </Link>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
