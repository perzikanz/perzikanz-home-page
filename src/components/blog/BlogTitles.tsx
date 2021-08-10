import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import client from '../contentfulClient';

import { TEntries } from '../types';

import styles from '../../styles/BlogTitles.module.css';

const BlogTitles = ({ titleNumber }: { titleNumber: number }) => {
  const [blogIds, setBlogIds] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const [blogLinks, setBlogLinks] = useState<JSX.Element[]>([]);

  const getEntries = async () => {
    const response: TEntries = await client.getEntries({
      content_type: process.env.NEXT_PUBLIC_CONTENT_TYPE_ID,
      limit: titleNumber,
    });
    const { items } = response;
    const idSet: string[] = [];
    const titleSet: string[] = [];
    const dateSet: string[] = [];
    items.forEach((item) => {
      idSet.push(item.sys.id);
      titleSet.push(item.fields.title);
      dateSet.push(item.fields.date);
    });
    setBlogIds(idSet);
    setTitles(titleSet);
    setDates(dateSet);
  };

  useEffect(() => {
    getEntries();
  }, []);

  useEffect(() => {
    const links = [];
    for (let i = 0; i < blogIds.length; i++) {
      const blogLink = (
        <li key={blogIds[i]} className={styles.article_list_item}>
          <Link href={'/blog/[id]'} as={`/blog/${blogIds[i]}.html`}>
            <a className={styles.blog_title_ancher}>
              <p className={styles.blog_title}>{titles[i]}</p>
              <p className={styles.blog_date}>{dates[i]}</p>
            </a>
          </Link>
        </li>
      );
      links.push(blogLink);
    }
    setBlogLinks(links);
  }, [blogIds, titles, dates]);

  return (
    <>
      <ul className={styles.article_list}>{blogLinks}</ul>
    </>
  );
};

export default BlogTitles;
