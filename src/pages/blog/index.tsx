import React from 'react';
import Head from 'next/head';

import BlogTitles from '../../components/blog/BlogTitles';

import style from '../../styles/BlogTop.module.css';

const BlogTop = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className={style.page_title}>記事一覧</h1>
        <BlogTitles titleNumber={100} />
      </main>
    </>
  );
};

export default BlogTop;
