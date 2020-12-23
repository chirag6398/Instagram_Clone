import React, { useState } from "react";
import './App.css';
import Home from "./components/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Comment from "./components/CommentSection/Comment"
import Header from "./components/header";
import userImg from "./images/demoUserImg.jpg";
import Story from "./components/StoryHeader/Userstories";

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
    
    <Route exact path="/"> <Home post={post} /></Route>
    <Route exact path="/comment"><Comment data={post}/></Route>
    <Route exact path="/story"><Story data={post}/></Route>
     
    </div>
  </BrowserRouter>
  );
}

export default App;
