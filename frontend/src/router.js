import Home from "../src/Pages/Home";
import Post from "../src/Pages/Post";
import React from "react";

const router = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    path: "/Post",
    exact: false,
    main: () => <Post />
  }
];
export default router;
