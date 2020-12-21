import React, { useState } from "react";
import './App.css';
import Home from "./components/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";

import userImg from "./images/demoUserImg.jpg";

function App() {
  const [post, setPost] = useState([
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username"
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username"
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username"
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username"
    }])
  return (<BrowserRouter>
    <div className="app">
    <Route path="/"> <Home post={post} /></Route>
     
    </div>
  </BrowserRouter>
  );
}

export default App;
