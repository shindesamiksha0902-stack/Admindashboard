import { useState } from "react";
import { useAppContext } from "../context/AppContext";

type SettingsForm = {
  name: string;
  email: string;
  password: string;
};

export default function Settings() {
  const { settings, setSettings } = useAppContext();

  const [formData, setFormData] = useState<SettingsForm>(settings);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSettings(formData);
  };

  return (
    <div>
      <h1 style={{ fontSize: "42px", marginBottom: "24px" }}>Settings</h1>

      <div className="panel">
        <h2>Admin Settings</h2>

        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Admin name"
          />

          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            className="input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <button className="btn primary" type="submit">
            Update Settings
          </button>
        </form>

        <div style={{ marginTop: "30px" }}>
          <h3>
            Current Admin:{" "}
            <span style={{ color: "#2563eb" }}>{settings.name}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}