import { useState } from "react";
import TextInput from "./assets/components/textname.jsx";

export default function SignupForm({ dark }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [preview, setPreview] = useState(null);

  const isEmailValid = /\S+@\S+\.\S+/.test(form.email);
  const isFormValid =
    form.name.trim() !== "" && form.password.trim() !== "" && isEmailValid;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setPreview(form);
  };

  const clearForm = () => {
    setForm({ name: "", email: "", password: "" });
    setPreview(null);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Signup Form</h2>

      <form onSubmit={submitForm}>
        <TextInput
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <TextInput
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {!isEmailValid && form.email && (
          <p style={{ color: "red" }}>Invalid email format</p>
        )}

        <TextInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button disabled={!isFormValid} style={{ padding: "8px 15px" }}>
          Submit
        </button>

        <button
          type="button"
          onClick={clearForm}
          style={{ padding: "8px 15px", marginLeft: "10px" }}
        >
          Clear
        </button>
      </form>

      {/* Preview */}
      {preview && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: dark ? "#222" : "#fff",
            border: "1px solid gray",
            borderRadius: "8px"
          }}
        >
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {preview.name}</p>
          <p><strong>Email:</strong> {preview.email}</p>
          <p><strong>Password:</strong> {preview.password}</p>
        </div>
      )}
    </div>
  );
}
