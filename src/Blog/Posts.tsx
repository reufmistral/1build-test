import React, { FC } from "react";
import { Container } from "react-bootstrap";

import { Post } from "./Post";

export type PostProps = {
  title: string;
  author: string;
  posted: Date;
};

type PostsProps = {
  posts: Array<PostProps>;
};

export const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <Container>
      {posts?.map((p: any, i: number) => (
        <Post key={i} index={i + 1} post={p} />
      ))}
    </Container>
  );
};
