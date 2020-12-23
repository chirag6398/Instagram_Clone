import React from 'react';
import Header from "../header"
import commentStyle from "../../styles/Comment.module.css";
import arrImg from "../../images/arrcommentimg.png";
import userimg from "../../images/demoUserImg.jpg";

export default function Comment(props) {
    return (<>
    <Header />
        <div className={commentStyle.ext_div}>
            <div className={commentStyle.center_div}>
                <div className={commentStyle.leftside_portion}>
                    <div className={commentStyle.user_detail}>
                        <span className={commentStyle.userName}>  {props.data[0].userName}</span>
                    </div>
                    <div className={commentStyle.userNames}>
                        {
                            props.data.map((val) => {
                                return(<>
                                    <img className={commentStyle.userimg} alt="..." src={userimg}></img>
                                    <span className={commentStyle.username}>{val. userName}</span>
                                </>)
                            })
                        }
                    </div>
                </div>
                <div className={commentStyle.rightside_portion}>
                    <img src={arrImg} alt="..." className={commentStyle.arrimg} />
                    <p className={commentStyle.text}>Your Messages</p>
                    <p className={commentStyle.text2}>Send private photos and messages to a friend or group.</p>
                </div>
            </div>

        </div>
        </>
    )
}
