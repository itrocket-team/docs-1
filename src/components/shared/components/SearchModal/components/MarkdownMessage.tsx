import styled from "@emotion/styled";
import { Message } from "ai";
import clsx from "clsx";
import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { CodeBlock } from "../../CodeBlock";
import { MarkdownCodeBlock } from "./MarkdownCodeBlock";

const StyledMarkdownMessage = styled.div``;

export const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ message }) => {
  return (
    <Markdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      rehypePlugins={[rehypeRaw]}
      skipHtml={false}
      components={{
        code: (props: any) => <MarkdownCodeBlock {...props} />,
        // img: (props: any) => NextImageHandler(props),
        // Image: (props: any) => NextImageHandler(props),
        h1: ({ children, ...args }) => {
          return (
            <h1 className="my-2 text-3xl font-semibold" {...args}>
              {children}
            </h1>
          );
        },
        h2: ({ children, ...args }) => {
          return (
            <h2 className="my-2 text-2xl font-semibold" {...args}>
              {children}
            </h2>
          );
        },
        h3: ({ children, ...args }) => {
          return (
            <h3 className="my-2 text-xl font-semibold" {...args}>
              {children}
            </h3>
          );
        },
        li: ({ children, ...args }) => {
          return (
            <li className="my-2" {...args}>
              {children}
            </li>
          );
        },
        mark: ({ children, ...args }) => {
          return (
            <mark
              {...args}
              className={clsx(
                "cursor-pointer rounded-md bg-slate-300/50 px-1 py-0.5 text-sm font-semibold transition-all duration-200 ease-in-out hover:bg-blue-300/40"
              )}
            >
              {children}
            </mark>
          );
        },
      }}
    >
      {message.content}
    </Markdown>
  );
};

interface MarkdownMessageProps {
  message: Message;
}
