import React from 'react';
import postStyle from "../styles/Post.module.css";

import Avatar from "@material-ui/core/Avatar"

export default function Post(props) {
    return (
        <div className={postStyle.post_container} >
            <div className={postStyle.post_header}>
                <Avatar className={postStyle.post_header_img} alt="Cindy Baker" src={props.avatarimg} />
                <h3>{props.username}</h3>
            </div>



            <img src={props.userimg} className={postStyle.user_img} alt="..." />

            <p className={postStyle.post_caption}><strong>@username</strong>   caption #crazy#innovative {props.caption}</p>
        </div>
    )
}
