import React from "react";
import { Alert } from "react-bootstrap";

import { useBlog } from "./BlogContext";
import { Posts } from "./Posts";
import { Skeleton } from "lib/components";

export const BlogContent = () => {
  const { result, isLoading, isError, isSuccess } = useBlog();

  return (
    <>
      {isError && (
        <Alert variant="danger">
          An error occured, failed to retrieve data!
        </Alert>
      )}
      <Skeleton
        type="text"
        ready={!isLoading && isSuccess}
        firstLaunchOnly={true}
      >
        <Posts posts={result?.posts} />
      </Skeleton>
    </>
  );
};
