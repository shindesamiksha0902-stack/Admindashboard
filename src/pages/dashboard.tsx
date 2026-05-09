import Card from "../components/card";
import Charts from "../components/charts";
import { useAppContext } from "../context/AppContext";

export default function Dashboard() {
  const { stats } = useAppContext();

  return (
    <div>
      <h1 style={{ fontSize: "42px", marginBottom: "24px" }}>Dashboard</h1>

      <div className="card-grid">
        <Card title="Total Users" value={stats.totalUsers} />
        <Card title="Revenue" value={`$${stats.totalRevenue.toLocaleString()}`} />
        <Card title="Products" value={stats.totalProducts} />
        <Card title="Admin Name" value={stats.adminName} />
      </div>

      <div className="panel">
        <h2>Sales Overview</h2>
        <Charts />
      </div>
    </div>
  );
}