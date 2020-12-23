import React from 'react';
import commentStyle from "../../styles/Comment.module.css";

export default function Comment(props) {
    return (
        <div className={commentStyle.ext_div}>
            <div className={commentStyle.center_div}>
                <div className={commentStyle.leftside_portion}>
                   <div className={commentStyle.user_detail}>
                      <span className={commentStyle.userName}>  {props.userName}</span> 
                   </div>
                </div>
                <div className={commentStyle.rightside_portion}>

                </div>
            </div>

        </div>
    )
}
