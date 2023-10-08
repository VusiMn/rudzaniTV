import { blogPostData } from "../BlogsPostPage/Sections/blogPostData";

export const getBlogPostById = (id) => {
  return blogPostData.find((item) => item.id === id);
};
