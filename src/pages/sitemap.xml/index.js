import { getServerSideSitemapIndexLegacy } from 'next-sitemap';
import { getDomain } from '../../utilities/dev';

export const getServerSideProps = async (ctx) => {
  const sitemapIndex = [`${getDomain()}/sitemap-main.xml`];

  return getServerSideSitemapIndexLegacy(ctx, sitemapIndex);
};

export default function SitemapIndex() {}
