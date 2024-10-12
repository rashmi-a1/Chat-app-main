import React, { useContext } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <div>
          <img src={data.user.photoURL} alt="" />
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <VideocamIcon className="uiiconsmall" />
          <MoreHorizIcon className="uiiconsmall" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
