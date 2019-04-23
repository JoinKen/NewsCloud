import Home from "../src/Pages/Home";
import Post from "../src/Pages/Post";
import React from "react";
import LastNews from "../src/Pages/LastNews";
import About from '../src/Pages/About';
import Contact from '../src/Pages/Contact';
// import Image from '../src/Components/PostImage/postImage';
import Login from '../src/Components/Login/login';
import AdminPage from '../src/Components/HomePage/admin';
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
  },
  {
    path:'/LastNews',
    exact:false,
    main:() => <LastNews/>
  },
  {
    path:'/About',
    exact:false,
    main:() => <About/>
  },
  {
    path:'/Contact',
    exact:false,
    main:()=><Contact/>
  },
  {
    path:'/Login',
    exact:false,
    main:()=><Login/>
  },
  {
    path:'/Admin',
    exact:false,
    main:()=><AdminPage/>
  }
];
export default router;
