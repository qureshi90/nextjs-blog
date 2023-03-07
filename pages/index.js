import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts.js';
import utilStyles from '../styles/utils.module.css';

// getStaticProps and getServerSideProps can only be exported from a page.
// You can’t export it from non-page files.

// One of the reasons for this restriction is that 
// Next needs to have all the required data before the page is rendered.

// To use Static-Site Generation, you need to export getStaticProps.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData(); // to get data
  return {
    props: {
      allPostsData,
    },
  };
}

// To use Server-Side Rendering, you need to export getServerSideProps.
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

export default ({ allPostsData }) => {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className='text-xl'>
          <p className='mb-2'>Senior Frontend Developer</p>
          <p>
            This is a sample website - you’ll be building a site like this on{' '}
            <a href='https://nextjs.org/learn' target='_blank'>
              our Next.js tutorial
            </a>
          </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
};
