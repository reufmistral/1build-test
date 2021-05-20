import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled, { css } from "styled-components";
import { FaLongArrowAltRight } from "react-icons/fa";

import { AppLayout } from "lib/components";
import { BlogProvider } from "./BlogContext";
import { BlogContent } from "./BlogContent";

const Intro = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.02em;
`;

const BaseContent = css`
  @media only screen and (max-width: 1320px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

const LeftContent = styled(Col)`
  ${BaseContent}
  display: flex;
  justify-content: center;
`;

const RightContent = styled(Col)`
  ${BaseContent}
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LearnMore = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 48px;
  color: #2f80ed;
  margin-top: 10px;
`;

const ArrowRight = styled(FaLongArrowAltRight)`
  font-size: 20px;
  margin-left: 10px;
`;

const Blog = () => {
  return (
    <BlogProvider>
      <AppLayout>
        <Container>
          <Row>
            <LeftContent xs={12} md={12} lg={5}>
              <img src={`${process.env.PUBLIC_URL}/worker.png`} alt="Worker" />
            </LeftContent>
            <RightContent xs={12} md={12} lg={{ span: 6 }}>
              <Col xs={12}>
                <Intro>
                  Building is about getting around the obstacles that are
                  presented to you.
                </Intro>
              </Col>
              <Col xs={12}>
                <LearnMore>
                  Learn more <ArrowRight />
                </LearnMore>
              </Col>
              <Col xs={12}>
                <BlogContent />
              </Col>
            </RightContent>
          </Row>
        </Container>
      </AppLayout>
    </BlogProvider>
  );
};

export default Blog;
