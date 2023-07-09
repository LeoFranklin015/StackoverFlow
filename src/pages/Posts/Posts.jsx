// import React, { useEffect } from "react";
// import "./Posts.css";
// import postPic1 from "../../Assets/img1.jpeg";
// import postPic2 from "../../Assets/bg.jpeg";
// import Post from "../Post/Post";
// import { useDispatch, useSelector } from "react-redux";
// import { getTimelinePost } from "../../action/postAction";

// const Posts = () => {
//   const PostsData = [
//     {
//       img: postPic1,
//       name: "Tzuyu",
//       desc: "Happy New Year all friends! #2023",
//       likes: 2100,
//       liked: true,
//     },
//     {
//       img: postPic2,
//       name: "HAzzy",
//       desc: "HHELLO peeps",
//       likes: 2300,
//       liked: false,
//     },
//   ];
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.authReducer.authData);
//   const { posts, loading } = useSelector((state) => state.postReducer);

//   useEffect(() => {
//     dispatch(getTimelinePost(user.user._id));
//   }, [user, dispatch]);
//   console.log(posts);
//   return (
//     <div className="Posts">
//       {loading ? "fetching..." : posts.map((post) => <Post data={post} />)}
//     </div>
//   );
// };

// export default Posts;

import React, { useEffect } from "react";
import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if (!posts) return "No Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div className="Posts">
      {loading
        ? "Fetching posts...."
        : posts.map((post, id) => {
            return <Post data={post} key={id} />;
          })}
    </div>
  );
};

export default Posts;
