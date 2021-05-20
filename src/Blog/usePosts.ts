import { useQuery } from "react-query";

import API from "lib/utils";

export const usePosts = () => {
  const {
    data: result,
    isLoading,
    isError,
    isSuccess,
  } = useQuery("posts", async () => {
    const response = await API.instance.get("blog-posts.json");
    return response.data;
  });

  return { result, isLoading, isError, isSuccess };
};
