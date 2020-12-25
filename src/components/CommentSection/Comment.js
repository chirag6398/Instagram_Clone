import React, { useState } from 'react';
import Header from "../header";
import commentStyle from "../../styles/Comment.module.css";
import arrImg from "../../images/arrcommentimg.png";
import userimg from "../../images/demoUserImg.jpg";
import Avatar from "@material-ui/core/Avatar";

export default function Comment(props) {
    const [chatperson, setChatperson] = useState();
    const [chatData, setChatData] = useState([]);
    const [message, setMessage] = useState([]);


    const chatDataHandler = (e) => {

        setChatData([e.target.value]);
        setMessage([]);

    }

    const messageHandler = () => {
        setMessage([...message, chatData]);
    }


    const chatHandler = (e, val) => {
        console.log(val.userName);

        setChatperson({
            userName: val.userName
        });
        console.log(chatperson);
    }
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
                            props.data.map((val, i) => {
                                return (<div key={i} onClick={(e) => {
                                    chatHandler(e, val)
                                }}>
                                    <Avatar  alt="..." src={userimg} />
                                    <span className={commentStyle.username}>{val.userName}</span>
                                </div>)
                            })
                        }
                    </div>
                </div>


                <div className={commentStyle.rightside_portion}>
                    {

                        (!chatperson) ? <div>
                            <img src={arrImg} alt="..." className={commentStyle.arrimg} />
                            <p className={commentStyle.text}>Your Messages</p>
                            <p className={commentStyle.text2}>Send private photos and messages to a friend or group.</p>
                        </div>
                            : <div>
                                <div className={commentStyle.chatHeader}>
                                    <img className={commentStyle.chatUserImg} alt="..." src={userimg}></img>
                                    <p className={commentStyle.chatUserName}> {chatperson.userName}</p>
                                    <div className={commentStyle.messagePart}>
                                        {
                                            message.map((val, i) => {
                                                return <p className={commentStyle.message} key={i}>{val}
                                                         
                                                </p>
                                            })
                                        }
                                    </div>
                                    <input className={commentStyle.chatInput} type="text" value={chatData} placeholder="Message" onChange={chatDataHandler}></input>
                                    <button className={commentStyle.sendButton} onClick={messageHandler}><b>send</b></button>
                                </div>

                            </div>
                    }
                </div>
            </div>

        </div>
    </>
    )
}
