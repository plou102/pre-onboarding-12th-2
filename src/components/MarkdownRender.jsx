import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { styled } from 'styled-components';

const MarkdownRender = ({ body }) => {
  const BodyContent = body;

  return (
    <MarkDownContent>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{BodyContent}</ReactMarkdown>
    </MarkDownContent>
  );
};

export default MarkdownRender;

const MarkDownContent = styled.div`
  margin-top: 5px;

  code {
    display: block;
    width: 100%;
    word-break: break-all;
    white-space: pre-wrap;
  }

  img {
    max-width: 100%;
  }
`;
