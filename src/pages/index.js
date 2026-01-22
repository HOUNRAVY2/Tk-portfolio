import { Home } from '@components/pages';
import { seoDefualt } from '@constants/seoData';

export default function Index() {
  return <Home />;
}

export async function getStaticProps() {
  return {
    props: {
      seo: {
        ...seoDefualt,
        linkTo: '/',
      },
    },
    revalidate: 60,
  };
}
