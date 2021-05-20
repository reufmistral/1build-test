import React, { FC, Suspense, ReactChildren, ReactChild } from "react";
import styled from "styled-components";

import { Navbar } from "lib/components";

const HEADER_HEIGHT = 5; // rem
const FOOTER_HEIGHT = 7; // rem

const Header = styled.div`
  height: ${HEADER_HEIGHT}rem;
  border: 1px solid #e5dede;
`;

const Footer = styled.div`
  height: ${FOOTER_HEIGHT}rem;
  background-color: #182048;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 40px;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}rem);
  width: 100%;
  overflow-y: auto;
  will-change: transform;
  display: flex;
  align-items: center;
  min-height: 800px;

  .container {
    max-height: 100%;
  }
`;

const Main = styled.div`
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
`;

type AppLayoutProps = {
  children: ReactChildren | ReactChild;
};

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    // TODO: implement proper loader
    <Suspense fallback={<div>Loading...</div>}>
      <Wrapper>
        <Main>
          <Header>
            <Navbar />
          </Header>
          <Content className="content-wrapper">{children}</Content>
          <Footer>FOOTER</Footer>
        </Main>
      </Wrapper>
    </Suspense>
  );
};
