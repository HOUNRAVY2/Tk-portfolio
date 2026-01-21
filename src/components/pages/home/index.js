import React from 'react';
import Banner from './banner';
import Ido from './ido';
import Skill from './skill';
import Works from './workDone';
import Resume from './resume';
import Contact from './contact';

export default function Home({ data }) {
  return (
    <main>
      <section className='container-fluid bg-banner'>
        <Banner />
      </section>
      <section className='container-fluid bg-sec2 text-cool bg-no-repeat'>
        <Ido />
        <Skill />
        <Works data={data} />
      </section>
      <section className='container-fluid bg-sec3 text-cool bg-no-repeat'>
        <Resume />
        <Contact />
      </section>
    </main>
  );
}
