import React, { FC } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

import { PostProps } from "./Posts";

const Title = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
`;

const Subtitle = styled.span`
  ont-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 40px;
  color: #757da8;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const NumberContainer = styled.div`
  border: 1px solid #586cb3;
  border-radius: 2px;
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  width: 27px;
`;

const Number = styled.span`
  transform: rotate(45deg);
  font-family: AppleMyungjo;
  font-style: normal;
  font-weight: normal;
`;

const RowItem = styled(Row)`
  padding: 2rem 0 1rem 0;
  align-items: center;
  border-bottom: 1px solid rgba(229, 222, 222, 0.5);
`;

const RowData = styled(Row)`
  display: flex;
  flex-direction: column;
`;

const Divider = styled.span`
  margin: 0 3px;
  font-weigth: bold;
`;

type PostCompProps = {
  post: PostProps;
  index: number;
};

export const Post: FC<PostCompProps> = ({ post, index }) => {
  const date = new Date(post.posted).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <RowItem>
      <Col xs={1}>
        <NumberContainer>
          <Number>{index}</Number>
        </NumberContainer>
      </Col>
      <Col xs={11}>
        <RowData>
          <Col>
            <Title>{post.title}</Title>
          </Col>
          <Col style={{ marginTop: "-10px" }}>
            <Subtitle>
              {date}
              <Divider>&#183;</Divider> {post.author}
            </Subtitle>
          </Col>
        </RowData>
      </Col>
    </RowItem>
  );
};
