import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <p>こんにちは！</p>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
