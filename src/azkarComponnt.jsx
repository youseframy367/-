// azkarComponnt.jsx
import React from "react";

export default function DuaItem({ dua }) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      background: "#fff",
      padding: "10px",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <span>{dua.text}</span>
    </div>
  );
}
