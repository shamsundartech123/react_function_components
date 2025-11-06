import { useState } from "react";
import ProductList from "./productlist.jsx";
import SignupForm from "./signupform.jsx";

export default function App() {
  const [text, setText] = useState("");
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        padding: "20px",
        background: dark ? "#1a1a1a" : "#f4f4f4",
        color: dark ? "white" : "black",
        minHeight: "100vh"
      }}
    >
      <h1>React Multi-Component App</h1>

      {/* 1. Live Text Preview */}
      <h2>Live Preview</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <p><strong>Preview:</strong> {text}</p>

      {/* 2. Dark/Light Mode */}
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "Light" : "Dark"} Mode
      </button>

      {/* 3–6 Product List Component */}
      <ProductList dark={dark} />

      {/* 7–11 Signup Form Component */}
      <SignupForm dark={dark} />
    </div>
  );
}
