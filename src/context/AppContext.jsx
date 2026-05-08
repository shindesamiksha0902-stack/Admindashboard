import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: "Aryan", email: "aryan@gmail.com", status: "Active" },
    { id: 2, name: "Riya", email: "riya@gmail.com", status: "Pending" },
    { id: 3, name: "Neeraj", email: "neeraj@gmail.com", status: "Active" },
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: "900", category: "Electronics" },
    { id: 2, name: "Headphones", price: "120", category: "Audio" },
    { id: 3, name: "Mouse", price: "35", category: "Accessories" },
  ]);

  const [settings, setSettings] = useState({
    name: "Admin",
    email: "admin@gmail.com",
    password: "123456",
  });

  const stats = useMemo(() => {
    const revenue = products.reduce(
      (sum, product) => sum + Number(product.price || 0),
      0
    );

    return {
      totalUsers: users.length,
      totalProducts: products.length,
      totalRevenue: revenue,
      adminName: settings.name,
    };
  }, [users, products, settings]);

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        products,
        setProducts,
        settings,
        setSettings,
        stats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return ctx;
}