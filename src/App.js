import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Comment from "./components/NewCommentSection/Comment";
// import Comment from "./components/CommentSection/Comment";
import userImg from "./images/demoUserImg.jpg";
import Story from "./components/StoryHeader/Userstories";
import Login from "./components/Login";
import { auth } from "./firebase/firebase";

function App() {
  const [loginUser, setLoginUser] = useState(null);
  const [post, setPost] = useState([
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__1",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__2",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__3",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__4",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__5",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__6",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__7",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__8",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__9",
    },
    {
      posturl: userImg,
      postCaption: "#carying",
      avatarUrl: userImg,
      userName: "username__10",
    },
  ]);

  var isTrue = false;
  if (isTrue) {
    setPost([]);
  }
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLoginUser(user.email);
      } else {
        setLoginUser(null);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Route exact path="/">
          <Home post={post} LoginUser={loginUser} />
        </Route>
        <Route exact path="/login">
          <Login LoginUser={loginUser} />
        </Route>
        <Route exact path="/comment">
          <Comment data={post} />
        </Route>
        <Route exact path="/story">
          <Story data={post} />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
