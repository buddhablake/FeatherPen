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
      <button>
        <Link href="/dashboard/newPost">
          <a>New Post</a>
        </Link>
      </button>
      {posts
        ? posts.map((post, index) => {
            return (
              <div key={index}>
                {" "}
                {post.title}
                <br />
                <DeleteButton postid={post._id} />
                <br />
                <Link href={`dashboard/editPost/${post._id}`}>
                  <a>Edit Post</a>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Dashboard;
