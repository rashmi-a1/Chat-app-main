import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  {
    /*
 Function to Get Time ago
 const now = new Date();
  const ts = message.date.seconds;

  const diff = now.getTime() / 1000 - ts;

  function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay =
      d > 0
        ? d + (d === 1 ? " day ago " : " days ago")
        : h > 0
        ? h + (h === 1 ? " hour ago " : " hours ago")
        : m > 0
        ? m + (m === 1 ? " minute ago " : " minutes ago")
        : s > 0
        ? "Just Now"
        : "";

    return dDisplay;
  }*/
  }
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="U"
        />
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
        {/*<span className="timeago">{secondsToDhms(diff)}</span>*/}
      </div>
    </div>
  );
};

export default Message;
