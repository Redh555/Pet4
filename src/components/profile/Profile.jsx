import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import module from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={module.profile_content}>
      <MyPosts />;
    </div>
  );
};
export default Profile;
