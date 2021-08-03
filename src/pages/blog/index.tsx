import React from 'react';
import BlogTitles from '../../components/blog/BlogTitles';
import style from '../../styles/blog.module.css';

const BlogTop = () => {
  return (
    <>
      <h1 className={style.page_title}>記事一覧</h1>
      <BlogTitles titleNumber={100} />
    </>
  );
};

export default BlogTop;
