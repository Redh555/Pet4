import "./App.css";
import "./Styles.css";

import React from "react";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header-content">
        <img
          className="header-img"
          src="https://cdn.discordapp.com/attachments/1242711127394222120/1245625035750899773/image.png?ex=66596e37&is=66581cb7&hm=6cdf9e22145c5f9ba2b7f25e20117800509bd8214df9572ea43bf485aeb794ef&"
          alt="Sorry :3"
        ></img>
      </header>
      <nav className="left-content">
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </nav>
      <div className="main-content">
        <div className="main-content-top">
          <img src="https://cdn.discordapp.com/attachments/1134096034579107933/1245641597018968064/image.png?ex=66597da3&is=66582c23&hm=61df5adb3bf5af030919d90b7fce3100edc9c86db6eb7d6399268228ef451df0&"></img>
        </div>
        <div className="main-content-mid">
          <div className="main-content-mid-avatar">ava</div>
          <div className="main-content-mid-description">description</div>
        </div>
        <div className="main-content-bot">
          <div className="main-content-bot-message">
            <div className="main-content-bot-message-title"></div>
            <div className="main-content-bot-message-input"></div>
            <div className="main-content-bot-message-button"></div>
          </div>
          <div className="main-content-posts">
            <div className="main-content-posts-avatar"></div>
            <div className="main-content-posts-text"></div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
