import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import {
  CodeComponent,
  ReactMarkdownNames,
} from 'react-markdown/src/ast-to-react';

import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '../styles/ViewMarkdown.module.css';

const ViewMarkdown = ({ markdown }: { markdown: string }) => {
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
      <code className={styles.inline_code} {...props}>
        {children}
      </code>
    );
  };

  const components = {
    code: codeBlock,
  };

  return (
    <ReactMarkdown
      remarkPlugins={[gfm]}
      components={components}
      className={styles.blog_body}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default ViewMarkdown;
