import React, { useState } from "react";
import './App.css';
import Home from "./components/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Comment from "./components/CommentSection/Comment"
import Header from "./components/header";
import userImg from "./images/demoUserImg.jpg";

function App() {
  const [post, setPost] = useState([
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "chirag_agarwal112"
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
    <Header />
    <Route exact path="/"> <Home post={post} /></Route>
    <Route exact path="/comment"><Comment userName={post[0].userName}/></Route>
     
    </div>
  </BrowserRouter>
  );
}

export default App;
