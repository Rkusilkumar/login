import React, { useState } from "react";

function ProfileUpdate() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    dob: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle form submission and update user details
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date of Birth (DOB):</label>
          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ProfileUpdate;
