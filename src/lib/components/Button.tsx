import React, { FC, ReactChildren, ReactChild } from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import styled from "styled-components";

const Container = styled(BootstrapButton)`
  background: linear-gradient(180deg, #2f80ed 0%, #183cbd 100%);
  border-radius: ${(props) => (props.rounded ? "40px" : "0")};
  padding: 0.6rem 3rem;
`;

type ButtonProps = {
  children: ReactChildren | ReactChild;
  rounded: number;
};

export const Button: FC<ButtonProps> = ({
  children,
  rounded = false,
  ...rest
}) => {
  return (
    <Container rounded={rounded} {...rest}>
      {children}
    </Container>
  );
};
