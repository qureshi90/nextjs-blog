import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/utils.module.css';

const name = 'Your Name';

export const siteTitle = 'Next.js Sample Website';

export default ({ children, home }) => {
  return (
    <div className='max-w-xl mx-auto mt-12 mb-24 p-4 bg-gray-200 rounded-2xl'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <header className='flex flex-col items-center'>
        {home ? (
          <>
            <Image
              priority
              src='/static/images/profile.jpeg'
              className={styles.borderCircle}
              height={144}
              width={144}
              alt=''
            />
            <h1 className={styles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src='/static/images/profile.jpeg'
                className={styles.borderCircle}
                height={108}
                width={108}
                alt=''
              />
            </Link>
            <h2 className={styles.headingLg}>
              <Link href='/' className={styles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className='m-12'>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
    </div>
  );
};
