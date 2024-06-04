import React from "react";
import module from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={module.navbar}>
      <div className={module.item}>
        <a>Profile</a>
      </div>
      <div className={module.item}>
        <a>Messages</a>
      </div>
      <div className={module.item}>
        <a>News</a>
      </div>
      <div className={module.item}>
        <a>Music</a>
      </div>
      <div className={`${module.item} ${module.active}`}>
        <a>Settings</a>
      </div>
      {/* //example second class // */}
    </nav>
  );
};
export default Navbar;
