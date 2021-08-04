import React from 'react';
import Head from 'next/head';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogTitles from '../../components/blog/BlogTitles';

import styles from '../../styles/BlogTop.module.css';

const BlogTop = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className={styles.main_container}>
        <h1 className={styles.page_title}>記事一覧</h1>
        <BlogTitles titleNumber={100} />
      </main>

      <Footer />
    </>
  );
};

export default BlogTop;
