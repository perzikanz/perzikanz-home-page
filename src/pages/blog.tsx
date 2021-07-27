import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import Head from 'next/head';
import ViewMarkdown from '../components/ViewMarkdown';
import style from '../styles/blog.module.css';

type TResponse = {
  items: {
    fields: {
      bodyText: string;
      title: string;
    };
    metadata: {};
    sys: {};
  }[];
};

const Blog = () => {
  const [titles, setTitles] = useState(['']);
  const [markdowns, setMarkdowns] = useState(['']);
  const [blog, setBlog] = useState([<></>]);

  const client = contentful.createClient({
    space: `${process.env.NEXT_PUBLIC_SPACE_ID}`,
    accessToken: `${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`,
  });

  const getEntryes = async () => {
    let tit: string[] = [];
    let mar: string[] = [];
    const response: TResponse = await client.getEntries({
      content_type: process.env.NEXT_PUBLIC_CONTENT_TYPE_ID,
      limit: 3,
    });
    const { items } = response;

    items.forEach((item) => {
      tit.push(item.fields.title);
      mar.push(item.fields.bodyText);
    });
    setTitles(tit);
    setMarkdowns(mar);
  };

  useEffect(() => {
    getEntryes();
  }, []);

  useEffect(() => {
    let articles: JSX.Element[] = [];
    for (let i = 0; i < titles.length; i++) {
      const article = (
        <ViewMarkdown title={titles[i]} markdown={markdowns[i]} />
      );
      articles.push(article);
    }
    setBlog(articles);
  }, [titles, markdowns]);

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={style.blog}>{blog}</div>
    </>
  );
};

export default Blog;
