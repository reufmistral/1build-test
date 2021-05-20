import React, { ReactChildren, ReactChild, FC } from "react";
import ReactPlaceholder from "react-placeholder";

type SkeletonProps = {
  children?: ReactChildren | ReactChild;
  firstLaunchOnly?: boolean;
  type?: "text";
  rows?: number;
  ready?: boolean;
};

export const Skeleton: FC<SkeletonProps> = ({
  ready = false,
  rows = 6,
  type = "text",
  firstLaunchOnly = false,
  children,
  ...rest
}) => {
  return (
    <ReactPlaceholder
      type={type}
      ready={ready}
      rows={rows}
      firstLaunchOnly={firstLaunchOnly}
      showLoadingAnimation={true}
      {...rest}
    >
      {children}
    </ReactPlaceholder>
  );
};
