import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">Admin Panel</div>

      <nav className="menu">
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </aside>
  );
}