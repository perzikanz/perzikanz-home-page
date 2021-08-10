import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile from '../components/top/Profile';
import BlogTitles from '../components/blog/BlogTitles';
import Work from '../components/top/Work';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className={styles.main}>
        <Profile />

        <div className={'white_container ' + styles.blog_titles_container}>
          <h2 className={styles.h2}>Blog</h2>
          <BlogTitles titleNumber={5} />
          <div className={styles.anchor_wrapper}>
            <Link href='/blog' as='/blog.html'>
              <a className={styles.more_title_anchor}>もっと見る</a>
            </Link>
          </div>
        </div>

        <Work />
      </main>

      <Footer />
    </>
  );
}
