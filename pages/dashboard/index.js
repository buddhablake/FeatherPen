import { useEffect, useState } from "react";
import axios from "axios";
import { DeleteButton } from "../../components/buttons/index";
import Link from "next/link";

const Dashboard = () => {
  const [posts, setPosts] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authorization") === null) {
      return;
    } else {
      axios
        .get("/api/posts/getUserPosts", {
          headers: {
            authorization: localStorage.getItem("authorization"),
          },
        })
        .then((res) => {
          setPosts(res.data.userPosts);
          console.log(res);
        });
    }
  }, []);

  return (
    <div>
      <div className="flex w-full flex-col">
        <div className="bg-indigo-700 rounded-full text-white px-3 self-end m-6">
          <div className="flex gap-3">
            <Link href="/dashboard/newPost">
              <a className="text-2xl">
                + <span className="text-2xl">new post</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        {posts
          ? posts.map((post, index) => {
              return (
                <div
                  key={index}
                  className="border-2 border-gray-700 m-8 p-4 flex justify-between"
                >
                  {post.title}

                  <div className="flex gap-2">
                    <DeleteButton postid={post._id} />

                    <Link href={`dashboard/editPost/${post._id}`}>
                      <a>Edit Post</a>
                    </Link>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Dashboard;
