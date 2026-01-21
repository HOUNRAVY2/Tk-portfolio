import { Main } from '@components/common';
import { seoDefualt } from '@constants/seoData';
import MainLayout from '@layout/mainLayout';
import { getMsmId } from '@utilities/dev';
import Script from 'next/script';
import '@styles/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import NextNProgress from 'nextjs-progressbar';

const config = {
  enableRecoil: false,
};

function GoogleAnalytics() {
  const measurementId = getMsmId();

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}'); 
        `}
      </Script>
    </>
  );
}

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  let appElem = (
    <Layout>
      <GoogleAnalytics />
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
