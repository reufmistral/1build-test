import { useApi } from "lib/hooks";

export const usePosts = () => {
  const {
    result,
    isLoading,
    isError,
    isSuccess,
    fetch: loadUsers,
  } = useApi("blog-posts.json");

  return { result, isLoading, isError, isSuccess, loadUsers };
};
