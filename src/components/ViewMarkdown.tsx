import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {
  CodeComponent,
  ReactMarkdownNames,
} from 'react-markdown/src/ast-to-react';
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

const ViewMarkdown = () => {
  const [markdown, setMarkdown] = useState('# Hello World');
  const [title, setTitle] = useState('');
  const client = contentful.createClient({
    space: `${process.env.NEXT_PUBLIC_SPACE_ID}`,
    accessToken: `${process.env.NEXT_PUBLIC_DELIVERY_ACCESS_TOKEN}`,
  });

  const getEntryes = async () => {
    const response: TResponse = await client.getEntries({
      content_type: process.env.NEXT_PUBLIC_CONTENT_TYPE_ID,
    });
    const { items } = response;
    setMarkdown(items[0].fields.bodyText);
    setTitle(items[0].fields.title);
  };

  const codeBlock: CodeComponent | ReactMarkdownNames = ({
    node,
    inline,
    className,
    children,
    ...props
  }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        PreTag='div'
        // useInlineStyles={false}
        style={xonokai}
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  };

  const components = {
    code: codeBlock,
  };

  useEffect(() => {
    getEntryes();
  });

  return (
    <div className={style.blog_post}>
      <h1>{title}</h1>
      <ReactMarkdown remarkPlugins={[gfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default ViewMarkdown;
