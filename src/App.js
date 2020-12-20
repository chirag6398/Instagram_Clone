import React,{useState} from "react";
import './App.css';
import Header from "./components/header";
import Post from "./components/Post";
import userImg from "./images/demoUserImg.jpg";

function App() {
  const [post,setPost]=useState([
    {},
  {},
  {},
  {}])
  return (
    <div className="app">
    <Header/>
    <Post userimg={userImg} avatarimg={userImg} caption="its good"/>
    <Post userimg={userImg} avatarimg={userImg} caption="its good"/>
    <Post userimg={userImg} avatarimg={userImg} caption="its good"/>
    <Post userimg={userImg} avatarimg={userImg} caption="its good"/>
     hello baby
     
    </div>
  );
}

export default App;
