import { Link } from "react-router-dom";

type SidebarProps = {
  sidebarOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ sidebarOpen, onClose }: SidebarProps) {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="brand">Admin Panel</div>

      <nav className="menu">
        <Link to="/" onClick={onClose}>Dashboard</Link>
        <Link to="/users" onClick={onClose}>Users</Link>
        <Link to="/products" onClick={onClose}>Products</Link>
        <Link to="/settings" onClick={onClose}>Settings</Link>
      </nav>
    </aside>
  );
}