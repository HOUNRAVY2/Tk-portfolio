import { Project } from '@components/pages';
import { seoDefualt } from '@constants/seoData';
import { getCMSDomain } from '@utilities/dev';
import { fetchDataByGetToken, headers } from '@service/strapi';

export default function Index({ projectData }) {
  return <Project data={projectData} />;
}

export async function getStaticProps() {
  let projectData = null;

  if (getCMSDomain()) {
    const projectPath = fetchDataByGetToken('/articles', {
      sort: 'createdAt:asc',
      filters: {
        category: {
          slug: {
            $eq: 'websites',
          },
        },
      },
      populate: {
        cover: {
          populate: '*',
        },
      },
    });
    projectData =
      (await fetch(projectPath, { headers }).then((res) =>
        res.json().then((allData) => allData.data),
      )) || null;
  }
  return {
    props: {
      projectData,
      seo: {
        ...seoDefualt,
        linkTo: '/',
      },
    },
    revalidate: 60,
  };
}
