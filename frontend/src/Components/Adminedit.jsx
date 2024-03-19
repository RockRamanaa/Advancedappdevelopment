import React, { useState, useEffect } from 'react';

const AdminEdit = ({ adminId }) => {
  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    role: '',
  });

  // Simulated data fetch using useEffect
  useEffect(() => {
    // Assuming fetchAdminData is a function to fetch admin data by ID from a server
    fetchAdminData(adminId)
      .then((data) => {
        setAdminData(data);
      })
      .catch((error) => {
        console.error('Error fetching admin data:', error);
      });
  }, [adminId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending data to a server for update
    console.log('Form submitted with data:', adminData);
  };

  return (
    <div>
      <h2>Edit Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={adminData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={adminData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={adminData.role}
            onChange={handleInputChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default AdminEdit;
