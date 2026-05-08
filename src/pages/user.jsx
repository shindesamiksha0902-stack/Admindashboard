import { useState } from "react";
import { useAppContext } from "../context/AppContext";

export default function Users() {

  const { users, setUsers } = useAppContext();



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "Active",
  });

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: editingId || Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim(),
      status: formData.status,
    };

    if (!newUser.name || !newUser.email) return;

    if (editingId) {
      setUsers((prev) =>
        prev.map((user) => (user.id === editingId ? newUser : user))
      );
      setEditingId(null);
    } else {
      setUsers((prev) => [...prev, newUser]);
    }

    setFormData({
      name: "",
      email: "",
      status: "Active",
    });
  };

  const handleEdit = (user) => {
    setEditingId(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      status: user.status,
    });
  };

  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));

    if (editingId === id) {
      setEditingId(null);
      setFormData({
        name: "",
        email: "",
        status: "Active",
      });
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      name: "",
      email: "",
      status: "Active",
    });
  };

  return (
    <div>
      <h1 style={{ fontSize: "42px", marginBottom: "24px" }}>Users</h1>

      <div className="panel">
        <h2>{editingId ? "Edit User" : "Add User"}</h2>

        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="User name"
          />

          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <select
            className="input"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Blocked">Blocked</option>
          </select>

          <div style={{ display: "flex", gap: "12px" }}>
            <button className="btn primary" type="submit">
              {editingId ? "Update User" : "Add User"}
            </button>

            {editingId && (
              <button className="btn" type="button" onClick={handleCancel}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="panel">
        <h2>Manage Users</h2>

        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td style={{ display: "flex", gap: "10px" }}>
                  <button className="btn" onClick={() => handleEdit(user)}>
                    Edit
                  </button>

                  <button
                    className="btn"
                    onClick={() => handleDelete(user.id)}
                    style={{ background: "#ef4444", color: "white" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}