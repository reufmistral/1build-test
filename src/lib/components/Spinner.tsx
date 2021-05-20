import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  overflow: hidden;
  margin: 0.5rem;

  svg {
    margin: auto;
    display: block;
    shape-rendering: auto;

    circle {
      stroke: #0d6efd;
    }
  }
`;

export const Spinner = () => (
  <Loader>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        strokeWidth="0.5rem"
        stroke="#666"
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
        transform="rotate(83.2478 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  </Loader>
);
