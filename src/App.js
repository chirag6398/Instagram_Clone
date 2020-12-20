import React, { useState } from "react";
import './App.css';
import Header from "./components/header";
import Post from "./components/Post";
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
  return (
    <div className="app">
      <Header />
      {
        post.map((val, i) => {
          return <Post key={i}
            userimg={val.posturl}
            avatarimg={val.avatarUrl}
            caption={val.postCaption}
            username={val.userName}
          />
        })
      }

     hello baby

    </div>
  );
}

export default App;
