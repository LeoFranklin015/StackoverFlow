// import React, { useState } from "react";
// import Posts from "../Posts/Posts";
// import PostShare from "../PostShare/PostShare";
// import ProfileCard from "../ProfileCard/ProfileCard";
// import "./PostSide.css";
// const PostSide = ({ profilepage, setProfilePage }) => {
//   return (
//     <div className="PostSide">
//       {profilepage ? (
//         <>
//           <ProfileCard
//             profilepage={profilepage}
//             setProfilePage={setProfilePage}
//           />
//           {/* <button onClick={setProfilePage(false)}>Home</button> */}
//         </>
//       ) : (
//         <></>
//       )}

//       <PostShare />
//       <Posts />
//     </div>
//   );
// };

// export default PostSide;

import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";

const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
