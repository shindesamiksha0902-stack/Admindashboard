import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function Layout() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}