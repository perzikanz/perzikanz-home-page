import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {
  CodeComponent,
  ReactMarkdownNames,
} from 'react-markdown/src/ast-to-react';
import style from '../styles/article.module.css';

const ViewMarkdown = (props: { title: string; markdown: string }) => {
  const { title, markdown } = props;
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
      <code className={style.inline_code} {...props}>
        {children}
      </code>
    );
  };

  const components = {
    code: codeBlock,
  };

  return (
    <div className={style.blog_article}>
      <h1 className={style.blog_title}>{title}</h1>
      <ReactMarkdown
        remarkPlugins={[gfm]}
        components={components}
        className={style.blog_body}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default ViewMarkdown;
