import React, { useMemo, useContext, FC } from "react";

import { usePosts } from "./usePosts";

interface BlogContextProps {
  result: any;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const BlogContext = React.createContext<BlogContextProps>(
  {} as BlogContextProps
);

export const BlogProvider: FC = ({ children }) => {
  const { result, isLoading, isError, isSuccess } = usePosts();

  const context = useMemo(
    () => ({
      result,
      isLoading,
      isError,
      isSuccess,
    }),
    [result, isLoading, isError, isSuccess]
  );

  return (
    <BlogContext.Provider value={context}>{children}</BlogContext.Provider>
  );
};

export const useBlog = (): BlogContextProps => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error(`useBlog must be used within a BlogProvider`);
  }
  return context;
};

export const Consumer = BlogContext.Consumer;
