import { navData } from '@constants/mocks/home';
import { sitemapField } from '@utilities/format';
import { getDomain } from '@utilities/dev';
import { getServerSideSitemapLegacy } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  const fields = navData
    .filter((item) => item.sitemap) // only items with sitemap flag
    .map((item) => sitemapField(`${getDomain()}${item.linkTo}`));

  return getServerSideSitemapLegacy(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
