import React, { useState } from 'react';

const AdminAdd = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending data to a server
    console.log('Form submitted with data:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      role: '',
    });
  };

  return (
    <div>
      <h2>Add Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        <button type="submit">Add Admin</button>
      </form>
    </div>
  );
};

export default AdminAdd;
