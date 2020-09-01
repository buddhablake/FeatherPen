import React from "react";
import axios from "axios";
import { useEffect } from "react";

const ViewPost = ({ post }) => {
  console.log();
  return (
    <div className="p-4">
      <h2 className="text-2xl underline tracking-wide">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default ViewPost;

ViewPost.getInitialProps = async ({ query: { postid }, req }) => {
  const post = await axios.get(
    `https://${req.headers.host}/api/posts/${postid}`
  );
  console.log();
  return { post: post.data.data };
};
