import Head from 'next/head';
import React from 'react';
import ViewMarkdown from '../components/ViewMarkdown';
import style from '../styles/blog.module.css';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={style.blog}>
        <ViewMarkdown />
      </div>
    </>
  );
};

export default Blog;
