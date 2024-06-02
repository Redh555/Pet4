import React from "react";

import module from "./MainContent.module.css";

const MainContent = () => {
  return (
    <div className={module.main_content}>
      <div className={module.main_top}>
        <img src="https://i.imgur.com/srctf2T.jpeg"></img>
      </div>
      <div className="main-content-mid">
        <div className="main-content-mid-avatar">ava</div>
        <div className="main-content-mid-description">description</div>
      </div>
      <div className="main-content-bot">
        <div className="main-content-bot-message">
          <div className="main-content-bot-message-title">
            <div className={module.item}>message</div>
          </div>
          <div className="main-content-bot-message-input"></div>
          <div className="main-content-bot-message-button"></div>
        </div>
        <div className="main-content-posts">
          <div className="main-content-posts-avatar"></div>
          <div className="main-content-posts-text"></div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
