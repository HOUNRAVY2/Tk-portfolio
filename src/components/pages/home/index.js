import React from 'react';
import Banner from './banner';
import Ido from './ido';
import Skill from './skill';
import Works from './workDone';
import Resume from './resume';
import Contact from './contact';

export default function Home() {
  return (
    <main className=' text-heading'>
      <section className='container-fluid bg-banner bg-no-repeat md:bg-center '>
        <Banner />
      </section>
      <section className='container-fluid   bg-no-repeat bg-sec2 bg-center'>
        <Ido />
        <Skill />
      </section>
      <section className='container-fluid '>
        <Works />
      </section>
      <section className='container-fluid   bg-no-repeat bg-sec3  bg-center'>
        <Resume />
        <Contact />
      </section>
    </main>
  );
}
