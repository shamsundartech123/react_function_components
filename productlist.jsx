import { useState } from "react";
import React from "react";  
import PropTypes from "prop-types";
import SignupForm from "./signupform.jsx";

export default function ProductList({ dark }) {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" },
    { id: 4, name: "Keyboard" },
    { id: 5, name: "Mouse" }
  ];

  const [layout, setLayout] = useState("grid");
  const [filter, setFilter] = useState("");
  const [hovered, setHovered] = useState(null);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Product List</h2>

      <input
        type="text"
        placeholder="Filter products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <br /><br />

      <button onClick={() => setLayout("grid")}>Grid</button>
      <button onClick={() => setLayout("list")} style={{ marginLeft: "10px" }}>
        List
      </button>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: layout === "grid" ? "repeat(3, 1fr)" : "1fr",
          gap: "10px"
        }}
      >
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              padding: "15px",
              borderRadius: "8px",
              border: "1px solid gray",
              background: hovered === p.id ? "#ffe5b4" : dark ? "#333" : "#fff",
              color: dark ? "white" : "black",
              transition: "0.3s"
            }}
          >
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}
