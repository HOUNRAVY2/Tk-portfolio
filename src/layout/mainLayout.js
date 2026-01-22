import { Layout } from '@components/common';
import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div className=' '>
      <Layout.Navbar />
      <div>{children}</div>
      <Layout.Footer />
    </div>
  );
}
