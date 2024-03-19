import React, { useState } from 'react';

const AdminUpdate = ({ adminData }) => {
  const [updatedAdminData, setUpdatedAdminData] = useState({
    name: adminData.name,
    email: adminData.email,
    role: adminData.role,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAdminData({ ...updatedAdminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending data to a server for update
    console.log('Form submitted with updated data:', updatedAdminData);
  };

  return (
    <div>
      <h2>Update Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedAdminData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={updatedAdminData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={updatedAdminData.role}
            onChange={handleInputChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        <button type="submit">Update Admin</button>
      </form>
    </div>
  );
};

export default AdminUpdate;
