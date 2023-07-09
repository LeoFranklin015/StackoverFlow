// import React, { useState, useRef } from "react";
// import "./PostShare.css";
// import { useDispatch, useSelector } from "react-redux";
// import { uploadImage, uploadPost } from "../../action/uploadAction";
// import profile from "../../Assets/profile.jpeg";
// import photos from "../../Assets/image-gallery.png";
// import video from "../../Assets/video.png";
// import close from "../../Assets/xmark-solid.svg";
// import defaultProfile from "../../Assets/profile.png";
// import location from "../../Assets/location.png";

// const PostShare = () => {
//   const loading = useSelector((state) => state.postReducer.uploading);
//   const [image, setImage] = useState(null);
//   const [desc, setDesc] = useState("");
//   const imageRef = useRef();
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.authReducer.authData);
//   const onChangeImage = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       let img = e.target.files[0];
//       setImage(img);
//     }
//   };

//   const reset = () => {
//     setImage(null);
//     setDesc("");
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newPost = {
//       userId: user.user._id,
//       desc: desc,
//     };

//     if (image) {
//       const data = new FormData();
//       const filename = Date.now() + image.name;
//       data.append("name", filename);
//       data.append("file", image);
//       newPost.image = filename;
//       console.log(newPost);
//       try {
//         dispatch(uploadImage(data));
//       } catch (error) {
//         console.log(error);
//       }
//       dispatch(uploadPost(newPost));
//       reset();
//     }
//   };

//   const Folder = process.env.REACT_APP_PUBLIC_FOLDER;
//   return (
//     <div className="PostShare">
//       <img
//         src={
//           user.profilePicture ? Folder + user.profilePicture : defaultProfile
//         }
//         alt=""
//         className="profileimg"
//       />
//       <div className="text">
//         <input
//           type="text"
//           placeholder="Share about your experience "
//           onChange={(e) => setDesc(e.target.value)}
//         />

//         <div className="postOptions">
//           <div
//             className="option"
//             style={{ color: "red" }}
//             onClick={() => imageRef.current.click()}
//           >
//             <img src={photos} alt="" width="25px" />
//             Photo
//           </div>
//           <div className="option">
//             <img src={video} alt="" width="25px" />
//             Video
//           </div>
//           <div className="option">
//             <img src={location} alt="" width="25px" />
//             Location
//           </div>
//           <button
//             className="share-btn"
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? "Uploading" : "Share"}
//           </button>
//           <div style={{ display: "none" }}>
//             <input
//               type="file"
//               name="myImage"
//               ref={imageRef}
//               onChange={onChangeImage}
//             />
//           </div>
//         </div>
//         {image && (
//           <div className="PreviewImage">
//             <img
//               src={close}
//               alt=""
//               width="18px"
//               onClick={() => setImage(null)}
//               className="close"
//             />
//             <img
//               src={URL.createObjectURL(image)}
//               alt=""
//               className="uploadImage"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PostShare;

import React, { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/UploadAction";

const PostShare = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const imageRef = useRef();

  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();

    //post data
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    // if there is an image with post
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(uploadPost(newPost));
    resetShare();
  };

  // Reset Post Share
  const resetShare = () => {
    setImage(null);
    desc.current.value = "";
  };
  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt="Profile"
      />
      <div>
        <input
          type="text"
          placeholder="What's happening?"
          required
          ref={desc}
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>

          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
          </div>
          <button
            className="button ps-button"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "uploading" : "Share"}
          </button>

          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
