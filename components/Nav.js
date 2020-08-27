import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isLogged, setIslogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authorization") === null) {
      return;
    } else {
      setIslogged(true);
    }
  }, []);

  const router = useRouter();

  //Can we abstract this function into it's own file???
  const logout = () => {
    axios
      .delete("/api/session", {
        headers: { authorization: localStorage.getItem("authorization") },
      })
      .then((res) => {
        localStorage.removeItem("authorization");
        if (window.location.pathname === "/") {
          router.reload();
        } else {
          location.assign("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="flex">
      <ul className="flex justify-around gap-4">
        <li className="hover:underline">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {isLogged ? (
          <>
            <li className="hover:underline">
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <button className="hover:underline" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="hover:underline">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li className="hover:underline">
              <Link href="/register">
                <a>Signup</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
