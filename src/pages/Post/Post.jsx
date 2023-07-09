// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import "./Post.css";
// import Like from "../../Assets/heart-solid.svg";
// import DisLike from "../../Assets/heart-regular.svg";
// import Comment from "../../Assets/message-regular.svg";
// import Share from "../../Assets/paper-plane-regular.svg";
// import { likePost } from "../../api/PostAPI";
// const Post = ({ data }) => {
//   const { user } = useSelector((state) => state.authReducer.authData);

//   const [liked, setLiked] = useState(data.likes.includes(user._id));
//   const [like, setLike] = useState(data.likes.length);

//   const handleLike = () => {
//     setLiked(!liked);
//     likePost(data._id, user._id);
//     liked ? setLike(like - 1) : setLike(like + 1);
//   };
//   return (
//     <div className="Post">
//       <img
//         src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
//         alt=""
//         className="Postimg"
//       />

//       <div className="postReaction">
//         <img
//           src={liked ? Like : DisLike}
//           alt=""
//           width="20px"
//           style={{ cursor: "pointer" }}
//           onClick={handleLike}
//         />
//         <img src={Comment} alt="" width="20px" />
//         <img src={Share} alt="" width="20px" />
//       </div>
//       <span style={{ color: "gray", fontSize: "12px" }}>{like} likes</span>
//       <div className="details">
//         <span style={{ fontWeight: "bold" }}>{data.name}</span>
//         <span> {data.desc}</span>
//       </div>
//     </div>
//   );
// };

// export default Post;

import React, { useState } from "react";
import "./Post.css";
import Comment from "../../Assets/message-regular.svg";
import Share from "../../Assets/paper-plane-regular.svg";
import Heart from "../../Assets/heart-solid.svg";
import NotLike from "../../Assets/heart-regular.svg";
import { likePost } from "../../api/PostRequests";
import { useSelector } from "react-redux";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
  };
  return (
    <div className="Post">
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>
          <b>{data.name} </b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
