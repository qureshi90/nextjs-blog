import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default () => {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className='text-xl'>
          <p>[Your Self Introduction]</p>
          <p>
            This is a sample website - you’ll be building a site like this on{' '}
            <a href='https://nextjs.org/learn' target='_blank'>
              our Next.js tutorial
            </a>
          </p>
        </section>
      </Layout>
    </>
  );
};
