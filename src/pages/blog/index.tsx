import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import client from '../../components/contentfulClient';

import { TEntries } from '../../components/types';

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
        <li key={blogIds[i]}>
          <Link href={'/blog/[id]'} as={`/blog/${blogIds[i]}`}>
            <a>{titles[i]}</a>
          </Link>
        </li>
      );
      links.push(blogLink);
    }
    setBlogLinks(links);
  }, [blogIds, titles]);

  return (
    <>
      <ul>{blogLinks}</ul>
    </>
  );
};

export default BlogTitles;
