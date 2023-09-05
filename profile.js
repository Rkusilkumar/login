import React, { useState } from "react";
import ProfileUpdate from "./profileupdate";
import "./profile.css"; // Import your custom CSS file for styling

function Profile() {
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  const toggleUpdateForm = () => {
    setIsUpdateFormVisible(!isUpdateFormVisible);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile Page</h2>
      <div className="profile-data">
        {/* Display user profile data here */}
        {/* Example button to toggle the update form */}
        <button
          className="profile-update-button"
          onClick={toggleUpdateForm}
        >
          Update Profile
        </button>
        {isUpdateFormVisible && <ProfileUpdate />}
      </div>
    </div>
  );
}

export default Profile;
