import BlogCard1 from '@components/shared/blogCard1';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, childVariants } from '@constants/mocks/motion';

export default function Blogs({ dataSource }) {
  return (
    <div className='space-y-[50px]'>
      <div className='flex flex-col items-center'>
        <h5 className='colortext text-title font-black'>精選文章</h5>
        <p className='text-20px'>Popular Article</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        viewport={{ once: true }}
        whileInView='show'
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]'
      >
        {dataSource?.map((load) => (
          <motion.div variants={childVariants} key={load.id}>
            <Link href={`/blog${load.linkTo}`}>
              <BlogCard1 load={load} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
