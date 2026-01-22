import React from 'react';
import Banner from './banner';
import Ido from './ido';
import Skill from './skill';
// import Works from './workDone';
import Resume from './resume';
import Contact from './contact';

export default function Home() {
  return (
    <main className=' text-heading'>
      <section className='container-fluid '>
        <Banner />
      </section>
      <section className='container-fluid   bg-no-repeat'>
        <Ido />
        <Skill />
        {/* <Works /> */}
      </section>
      <section className='container-fluid   bg-no-repeat'>
        <Resume />
        <Contact />
      </section>
    </main>
  );
}
