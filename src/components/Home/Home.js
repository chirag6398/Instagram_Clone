import React from 'react';
import Header from "./header";
import Post from "./Post";

export default function Home(props) {
    return (
        <div>
             <Header />
             {
        props.post.map((val, i) => {
          return <Post key={i}
            userimg={val.posturl}
            avatarimg={val.avatarUrl}
            caption={val.postCaption}
            username={val.userName}
          />
        })
      }
        </div>
    )
}
