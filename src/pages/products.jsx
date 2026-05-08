import { useState } from "react";

import { useAppContext } from "../context/AppContext";

export default function Products() {
  const { products, setProducts } = useAppContext();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const price = formData.price.trim();
    const category = formData.category.trim();

    if (!name || !price || !category) return;

    setProducts((prev) => {
      const existingIndex = prev.findIndex(
        (product) => product.name.toLowerCase() === name.toLowerCase()
      );

      if (existingIndex !== -1) {
        return prev.map((product, index) =>
          index === existingIndex
            ? { ...product, name, price, category }
            : product
        );
      }

      return [
        ...prev,
        {
          id: Date.now(),
          name,
          price,
          category,
        },
      ];
    });

    setFormData({
      name: "",
      price: "",
      category: "",
    });
  };

  return (
    <div>
      <h1 style={{ fontSize: "42px", marginBottom: "24px" }}>Products</h1>

      <div className="panel">
        <h2>Add / Update Product</h2>

        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product name"
          />

          <input
            className="input"
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
          />

          <input
            className="input"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
          />

          <button className="btn primary" type="submit">
            Save Product
          </button>
        </form>
      </div>

      <div className="card-grid" style={{ marginTop: "24px" }}>
        {products.map((product) => (
          <div className="stat-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <small>{product.category}</small>
          </div>
        ))}
      </div>
    </div>
  );
}