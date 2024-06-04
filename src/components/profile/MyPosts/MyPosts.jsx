import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        <Post message="it's okay" likesCount="0" />
        <Post message="Testing props" likesCount="22" />
      </div>
    </div>
  );
};
export default MyPosts;
