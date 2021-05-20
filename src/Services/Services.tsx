import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { AppLayout } from "lib/components";

const Services = () => {
  return (
    <AppLayout>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h1>Services Page</h1>
          </Col>
        </Row>
      </Container>
    </AppLayout>
  );
};

export default Services;
