"use client";
import { useSearchParams } from "next/navigation";
import { blogData } from "../component/blog";
import React from "react";


const BlogDetailPage = () => {
  const searchParams = useSearchParams();
  const id = parseInt(searchParams.get("id"));
  const blog = blogData.find((item) => item.id === id);

  if (!blog) {
    return <h2 style={{ padding: "2rem" }}>Blog not found.</h2>;
  }

  return (
    <div className="blog-detail-container">
      <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      <h1 className="blog-detail-title">{blog.title}</h1>
      <p className="blog-detail-meta">
        <b>Author:</b> {blog.author} | <b>Published:</b> {blog.date}
      </p>
      <p className="blog-detail-summary">{blog.summary}</p>
      <p className="blog-detail-body">
        This is a detailed view of the blog post. In a full app, this could show paragraphs,
        embedded images, comments, and more.
      </p>
    </div>
  );
};

export default BlogDetailPage;
