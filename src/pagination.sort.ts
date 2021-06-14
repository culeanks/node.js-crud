import { Request } from "express";
import Blog from "./models/blog";

export default async (req: Request) => {
  let page: number = parseInt(req.query.page as any);
  let size: number = parseInt(req.query.limit as any);
  // if (!page) {
  //   page = 1;
  // }
  // if (!size) {
  //   size = 5;
  // }
  const skip = (page - 1) * size;
  const blogs = await Blog.find().limit(size).skip(skip);
  console.log(blogs);
  return {
    page,
    size,
    data: blogs,
  };
}

