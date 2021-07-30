import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import client from '../../components/contentfulClient';
import ViewMarkdown from '../../components/ViewMarkdown';
import style from '../../styles/blog.module.css';

import { TEntry } from '../../components/types';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useState('');
  const router = useRouter();

  const { id } = router.query;

  const getEntry = async () => {
    const response: TEntry = await client.getEntry(`${id}`);
    setTitle(response.fields.title);
    setMarkdown(response.fields.bodyText);
  };

  useEffect(() => {
    getEntry();
  }, []);

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={style.blog}>
        <ViewMarkdown title={title} markdown={markdown} />
      </div>
    </>
  );
};

export default Blog;

export async function getStaticPaths() {
  const response = await client.getEntries({
    content_type: process.env.NEXT_PUBLIC_CONTENT_TYPE_ID,
    limit: 10,
  });
  const paths: { params: { id: string } }[] = [];
  response.items.forEach((item) => {
    const path = { params: { id: `${item.sys.id}` } };
    paths.push(path);
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const response = await client.getEntries({
    content_type: process.env.NEXT_PUBLIC_CONTENT_TYPE_ID,
    limit: 10,
  });

  const { items } = response;
  return {
    props: {
      items,
    },
  };
}
