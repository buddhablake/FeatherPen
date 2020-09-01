import Link from "next/link";
import verifySession from "../utils/useVerify";
import { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("api/posts")
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createPostPreview = (body) => {
    body = body.split("");
    let preview = "";
    for (let i = 0; i < 250; i++) {
      preview += body[i];
    }
    return preview;
  };

  return (
    <div className="p-10 text-gray-800">
      {posts.length
        ? posts.map((post, index) => {
            return (
              <div
                key={index}
                className="mb-10 border-gray-600 border rounded-lg p-4"
              >
                <h2 className="text-2xl underline tracking-wide">
                  {post.title}
                </h2>
                <p>
                  {createPostPreview(post.body)}...{" "}
                  <a
                    href={"/post/" + post._id}
                    className="underline text-blue-700 font-bold"
                  >
                    Continue reading
                  </a>
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Index;
