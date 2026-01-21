import { Layout, Main } from '@components/common';
import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div className=' '>
      <Layout.Navbar />
      <Main.Popup />
      <div>{children}</div>
      <Layout.Footer />
    </div>
  );
}
