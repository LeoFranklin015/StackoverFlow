import React, { useState } from "react";
import "./UserProfile.css";
const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser.result.name);
  const [about, setAbout] = useState(currentUser.result.about);
  const [tags, setTags] = useState(" ");
  return (
    <div>
      <h1 className="edit-profile-title">Edit your profile</h1>
      <h2 className="edit-profile-title-2">Public Information</h2>
      <form action="" className="edit-profile-form">
        <label htmlFor="name">
          <h3>Display Name </h3>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="about">
          <h3>About</h3>
          <textarea
            name=""
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched Tags</h3>
          <p>Add tags seperated by a space</p>
          <input
            type="text"
            id="tags"
            onChange={(e) => setTags(e.target.value.split(" "))}
          />
        </label>
        <br />
        <input type="submit" value="Save Profile" className="user-submit-btn" />
        <button
          type="button"
          className="user-cancel-btn"
          onClick={() => setSwitch(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
