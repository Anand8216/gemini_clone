import React, { useState,useContext } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
function Sidebar() {
  const [sidebar, SetSidebar] = useState(false);
  const loadPrompt=async(prompt)=>{
    setRecentPrompt([prompt])
    await onSent(prompt)
  }
  const {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    newChat,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  const handleClick = () => {
    SetSidebar(!sidebar);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu"
          onClick={handleClick}
        />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="plus" />
          {sidebar ? <p>New Chat</p> : null}
        </div>
        {sidebar ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="message" />
                  <p>{item.slice(0,18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question" />
          {sidebar ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="question" />
          {sidebar ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="question" />
          {sidebar ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
