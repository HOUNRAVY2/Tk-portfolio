import { Main } from '@components/common';
import { seoDefualt } from '@constants/seoData';
import MainLayout from '@layout/mainLayout';
import '@styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import NextNProgress from 'nextjs-progressbar';

const config = {
  enableRecoil: false,
};

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  let appElem = (
    <Layout>
      <Main.HeadNextSeo dataSource={pageProps?.seo || seoDefualt} />
      <MainLayout>
        <NextNProgress color='#F01414' />
        <Component {...pageProps} />
      </MainLayout>
    </Layout>
  );

  if (config.enableRecoil) {
    appElem = <RecoilRoot>{appElem}</RecoilRoot>;
  }

  return appElem;
}
