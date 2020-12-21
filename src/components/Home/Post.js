import React,{useState} from 'react';
import postStyle from "../../styles/Post.module.css";
import Avatar from "@material-ui/core/Avatar";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import heartIcon from "../../images/hearticon.png";

export default function Post(props) {
   const [comments,setComments]=useState({comment:""});
   const [postedComments,setPostedComment]=useState({postedComment:""})
    const commentHandler=(e)=>{
      setComments({comment:e.target.value})
    }
    const commentPostHandler=()=>{
        setPostedComment({postedComment:comments.comment})
    }
    return (
        <div className={postStyle.post_container} >

            <div className={postStyle.post_header}>
                <Avatar className={postStyle.post_header_img} alt="Cindy Baker" src={props.avatarimg} />
                <h3>{props.username}</h3>
            </div>



            <img src={props.userimg} className={postStyle.user_img} alt="..." />

            <p className={postStyle.post_caption}><strong>@username</strong>   caption #crazy#innovative {props.caption}</p>
            
           {(postedComments.postedComment)? <p className={postStyle.post_caption}><strong>@username</strong> {postedComments.postedComment} 
           <img src={heartIcon} alt="..." className={postStyle.hrtIcon}/> </p>:null}
            <div className="input-group">
                <div className="custom-file">
                    <input type="text" className="form-control" placeholder="Add a comment.." value={comments.comment} name="comment" onChange={commentHandler} />
                </div>
                <div className="input-group-append">
                    <span className={postStyle.post} onClick={commentPostHandler} >post</span>
                </div>
            </div>

        </div>
    )
}
