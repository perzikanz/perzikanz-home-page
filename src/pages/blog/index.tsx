import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import client from '../../components/contentfulClient';

import { TEntries } from '../../components/types';
import style from '../../styles/blogTitle.module.css';

const BlogTitles = () => {
  const [blogIds, setBlogIds] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const [blogLinks, setBlogLinks] = useState<JSX.Element[]>([]);

  const getEntries = async () => {
    const response: TEntries = await client.getEntries({
      content_type: process.env.NEXT_PUBLIC_CONTENT_TYPE_ID,
      limit: 10,
    });
    const { items } = response;
    const ids: string[] = [];
    const tit: string[] = [];
    items.forEach((item) => {
      ids.push(item.sys.id);
      tit.push(item.fields.title);
    });
    setBlogIds(ids);
    setTitles(tit);
  };

  useEffect(() => {
    getEntries();
  }, []);

  useEffect(() => {
    const links = [];
    for (let i = 0; i < blogIds.length; i++) {
      const blogLink = (
        <li key={blogIds[i]} className={style.article_list_item}>
          <Link href={'/blog/[id]'} as={`/blog/${blogIds[i]}`}>
            <a className={style.blog_title_ancher}>{titles[i]}</a>
          </Link>
        </li>
      );
      links.push(blogLink);
    }
    setBlogLinks(links);
  }, [blogIds, titles]);

  return (
    <>
      <h1 className={style.page_title}>記事一覧</h1>
      <ul className={style.article_list}>{blogLinks}</ul>
    </>
  );
};

export default BlogTitles;
