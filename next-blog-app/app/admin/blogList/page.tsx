"use client";
import BlogTableItem from "@/Components/AdminComponents/BlogTable";
import { Blog } from "@/Types/Blog";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  const deleteBlog = async (mongoId: number) => {
    const response = await axios.delete("/api/blog", {
      params: { id: mongoId },
    });

    toast.success(response.data.message);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 sm:pt-12 sm:pl-16">
      <h1>All blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="column" className="hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="column" className=" px-6 py-3">
                Blog title
              </th>
              <th scope="column" className=" px-6 py-3">
                date
              </th>
              <th scope="column" className=" px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  key={index}
                  authorImg={blog.author_img}
                  title={blog.title}
                  author={blog.author}
                  mongoId={blog._id}
                  date={blog.date}
                  deleteBlog={deleteBlog}
                />
              );
            })}
            <BlogTableItem
              authorImg={""}
              title={""}
              author={""}
              mongoId={1}
              date={1}
              deleteBlog={deleteBlog}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
