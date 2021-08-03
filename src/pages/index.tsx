import Head from 'next/head';
import Link from 'next/link';
import BlogTitles from '../components/blog/BlogTitles';
import Profile from '../components/Profile';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Profile />
        <div className={styles.blog_titles}>
          <h2 className={styles.h2}>最新記事</h2>
          <BlogTitles titleNumber={5} />
          <div className={styles.anchor_wrapper}>
            <Link href='/blog'>
              <a className={styles.more_title_anchor}>もっと見る</a>
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
}
