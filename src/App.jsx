import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";

import Dashboard from "./pages/dashboard";
import Users from "./pages/user";
import Products from "./pages/products";
import Settings from "./pages/settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />

          <Route path="users" element={<Users />} />

          <Route path="products" element={<Products />} />

          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}