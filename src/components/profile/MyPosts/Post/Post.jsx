import module from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={module.item}>
      <img src="https://i.imgur.com/v0NjNbs.png" alt="reng" />
      post 1{props.message}
      <div>{props.likesCount}</div>
    </div>
  );
};
export default Post;

<img src="https://i.imgur.com/v0NjNbs.png" alt="reng" />;
