import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import client from '../contentfulClient';

import { TEntries } from '../types';
import styles from '../../styles/blogTitle.module.css';

const BlogTitles = ({ titleNumber }: { titleNumber: number }) => {
  const [blogIds, setBlogIds] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const [blogLinks, setBlogLinks] = useState<JSX.Element[]>([]);

  const getEntries = async () => {
    const response: TEntries = await client.getEntries({
      content_type: process.env.NEXT_PUBLIC_CONTENT_TYPE_ID,
      limit: titleNumber,
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
        <li key={blogIds[i]} className={styles.article_list_item}>
          <Link href={'/blog/[id]'} as={`/blog/${blogIds[i]}`}>
            <a className={styles.blog_title_ancher}>{titles[i]}</a>
          </Link>
        </li>
      );
      links.push(blogLink);
    }
    setBlogLinks(links);
  }, [blogIds, titles]);

  return (
    <>
      <ul className={styles.article_list}>{blogLinks}</ul>
    </>
  );
};

export default BlogTitles;
